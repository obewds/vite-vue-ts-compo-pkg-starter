<!--
    ./src/app/InitContent.vue
-->


<script setup>

    import { computed, inject, ref } from 'vue'


    // setup globals values
    const globals = inject('globals')
    
    
    // setup static values
    const toDosWip = 'START THE THINGS'
    const toDosDone = 'DID THE THINGS'
    const inputClasses = 'focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md'
    const readonlyInputClasses = 'focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm border-black bg-gray-800 text-lime-400 rounded-md selection:bg-lime-400 selection:text-black'

    
    // retrieve local storage values
    let storedRepoName = localStorage && localStorage.getItem('repoName') !== undefined && localStorage.getItem('repoName') !== null ? localStorage.getItem('repoName') : ''
    let toDosHeadlineText = localStorage && localStorage.length === 24 ? toDosDone : toDosWip

    
    // setup reactive values
    const newRepoName = ref(storedRepoName)
    const showToDos = ref(false)
    const showToDosBtnText = ref(globals.strings.more)
    const toDosHeadline = ref(toDosHeadlineText)

    
    // setup computed values
    const newRepoCommand = computed(() => {
        return 'npm run init:as -- ' + newRepoName.value
    })

    
    // setup interactive functionality
    function showToDosSection(){
        showToDos.value = !showToDos.value
        showToDosBtnText.value = showToDos.value === false ? globals.strings.more : globals.strings.less
    }

    function updateRepoName(event){
        if (event.target.value === '') {
            localStorage.removeItem('repoName')
            toDosHeadline.value = toDosWip
        } else {
            localStorage.setItem('repoName', newRepoName.value)
        }
    }

    function reset(){
        if (localStorage) {
            localStorage.removeItem('repoName')
        }
        newRepoName.value = ''
        toDosHeadline.value = toDosWip
    }

</script>


<template>

    <div>

        <h2 :class="globals.classes.h2">{{ toDosHeadline }}</h2>

        <p class="pb-2">
            <button
                type="button"
                :class="globals.classes.btn"
                :style="globals.styles.btn"
                @click="showToDosSection()"
            >
                {{ showToDosBtnText }}
            </button>
        </p>

        <div v-if="showToDos" class="max-w-xl bg-white rounded-lg shadow-lg p-4 text-left mx-auto">

            <div class="flex flex-col">

                <div class="flex flex-col space-y-1">
                    <label for="new-repo-name">New Repo Name:</label>
                    <input type="text" id="new-repo-name" v-model="newRepoName" :class="inputClasses" @input="updateRepoName($event)"/>
                    <small class="opacity-70">Usually the component GitHub repository name (in kebab-case-syntax)</small>
                </div>

                <div class="flex flex-col space-y-1 py-4">
                    <label for="new-repo-command">Initialize Files Command:</label>
                    <input type="text" id="new-repo-command" v-model="newRepoCommand" :class="readonlyInputClasses" @input="updateRepoName($event)" readonly/>
                    <small class="opacity-70">Run this command (from root) to setup this template and start testing/developing your new Vue/TypeScript component!</small>
                </div>

                <div v-if="newRepoName">
                
                    <hr/>

                    <div class="text-center pt-4">
                        <button
                            type="button"
                            :class="['bg-red-500', globals.classes.btn]"
                            @click="reset()"
                        >
                            reset
                        </button>
                    </div>

                </div>

            </div>

        </div>    

    </div>

</template>
