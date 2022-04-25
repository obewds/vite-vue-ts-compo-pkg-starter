<!--
    ./src/app/HelpContent.vue
-->


<script setup>

    import { computed, ref } from 'vue'
    
    
    // setup static values
    const more = 'more things'
    const less = 'less things'
    const toDosWip = 'START THE THINGS'
    const toDosDone = 'DID THE THINGS'
    const btnClasses = 'inline text-white rounded px-2 py-1 shadow'
    const btnStyle = 'background-color:#42b983;'
    const flexColSect = 'flex flex-col space-y-2'
    const h2Classes = 'text-lg font-bold'
    const imgClasses = 'w-20 mx-auto sm:mx-0'
    const inputClasses = 'focus:ring-green-500 focus:border-green-500 block w-full shadow-sm border-gray-300 rounded-md'
    const readonlyInputClasses = 'focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm border-black bg-gray-800 text-lime-400 rounded-md selection:bg-lime-400 selection:text-black'
    const linkStyle = 'color:#42b983;'

    
    // retrieve local storage values
    let storedRepoName = localStorage && localStorage.getItem('repoName') !== undefined && localStorage.getItem('repoName') !== null ? localStorage.getItem('repoName') : ''
    let toDosHeadlineText = localStorage && localStorage.length === 24 ? toDosDone : toDosWip

    function checkLocalStoreChecks(key) {
        return localStorage && localStorage.getItem(key) !== undefined && localStorage.getItem(key) === 'checked' ? true : false
    }

    
    // setup reactive values
    const count = ref(0)
    const newRepoName = ref(storedRepoName)
    const showDocs = ref(false)
    const showDocsBtnText = ref(more)
    const showToDos = ref(false)
    const showToDosBtnText = ref(more)
    const toDosHeadline = ref(toDosHeadlineText)


    // adjust states according if local storage data is complete on page load
    // if (localStorage.length === 24) {
    //     toDosHeadline.value = toDosDone
    //     showToDos.value = false
    //     showToDosBtnText.value = more
    // }

    
    // setup computed values
    const newRepoCommand = computed(() => {
        return 'npm run init:as -- ' + newRepoName.value
    })

    
    // setup interactive functionality
    function showDocsSection(){
        showDocs.value = !showDocs.value
        showDocs.value === false ? showDocsBtnText.value = more : showDocsBtnText.value = less
    }

    function showToDosSection(){
        showToDos.value = !showToDos.value
        showToDos.value === false ? showToDosBtnText.value = more : showToDosBtnText.value = less
    }

    function updateRepoName(event){
        if (event.target.value === '') {
            localStorage.removeItem('repoName')
            toDosHeadline.value = toDosWip
        } else {
            localStorage.setItem('repoName', newRepoName.value)
        }
        // if (localStorage.length === 24) {
        //     toDosHeadline.value = toDosDone
        // }
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

    <div class="w-full flex flex-col sm:flex-row justify-center text-center gap-8 pb-10 px-8">
        <img :class="imgClasses" alt="Vue logo" src="../assets/vue-logo.png"/>
        <img :class="imgClasses" alt="TypeScript logo" src="../assets/typescript-logo.png"/>
        <img :class="imgClasses" alt="OBE:WDS logo" src="../assets/OBE-MARK-200x200.png"/>
    </div>

    <h1 class="text-3xl pb-2">OBE:WDS Vite/Vue TypeScript</h1>
    <p class="text-xl pb-14">Component Package Dev Kit</p>

    <slot/>

    <div :class="[flexColSect, 'pt-14 px-4']">

        <h2 :class="h2Classes">{{ toDosHeadline }}</h2>

        <p class="pb-2">
            <button
                type="button"
                :class="btnClasses"
                :style="btnStyle"
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
                            :class="['bg-red-500', btnClasses]"
                            @click="reset()"
                        >
                            reset
                        </button>
                    </div>

                </div>

            </div>

        </div>    

    </div>

    <div :class="[flexColSect, 'pt-8 pb-20']">

        <h2 :class="h2Classes">READ THE THINGS</h2>

        <p class="pb-2">
            <button
                type="button"
                :class="btnClasses"
                :style="btnStyle"
                @click="showDocsSection()"
            >
                {{ showDocsBtnText }}
            </button>
        </p>

        <div v-if="showDocs">

            <ul>
                <li>
                    <a href="https://v3.vuejs.org/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Vue 3 Docs</a>
                </li>
                <li>
                    <a href="https://vitejs.dev/guide/features.html" target="_blank" :style="linkStyle" rel="noopener noreferrer">Vite Docs</a>
                </li>
                <li>
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" :style="linkStyle" rel="noopener noreferrer">TypeScript Docs</a>
                </li>
                <li>
                    <a href="https://vitest.dev/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Vitest Docs</a>
                </li>
                <li>
                    <a href="https://test-utils.vuejs.org/guide/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Vue Test Utils</a>
                </li>
                <li>
                    <a href="https://tailwindcss.com/docs/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Tailwind CSS Docs</a>
                </li>
                <li>
                    <a href="https://headlessui.dev/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Headless UI</a>
                </li>
                <li>
                    <a href="https://rollupjs.org/guide/en/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Rollup Docs</a>
                </li>
            </ul>

            <p class="pt-2">
                Recommended IDE setup:
                <br>
                <a href="https://code.visualstudio.com/" target="_blank" :style="linkStyle" rel="noopener noreferrer">VS Code</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" :style="linkStyle" rel="noopener noreferrer">Volar</a>
            </p>

        </div>
    


        <h2 :class="[h2Classes, 'pt-6']">A REACTIVE THING</h2>

        <p>
            <button
                type="button"
                :class="btnClasses"
                :style="btnStyle"
                @click="count++"
            >
                count is: {{ count }}
            </button>
        </p> 
    
    </div>

    <div class="pt-10 pb-4 text-center text-gray-500">
        Made with <span class="text-red-500">&hearts;</span> by <a href="https://github.com/oberocks" target="_blank" :style="linkStyle" rel="noopener noreferrer">@oberocks</a>
    </div>

</template>
