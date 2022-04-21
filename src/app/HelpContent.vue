<!--
    ./src/app/HelpContent.vue
-->


<template>

    <div class="w-full flex flex-col sm:flex-row justify-center text-center gap-8 pb-10 px-8">
        <img :class="imgClasses" alt="Vue logo" src="../assets/logo.png"/>
        <img :class="imgClasses" alt="OBE:WDS logo" src="../assets/OBE-MARK-200x200.png"/>
    </div>

    <h1 class="text-3xl pb-14">OBE:WDS Vite/Vue Compo Starter</h1>

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
                    <small class="opacity-60">This is usually the GitHub repository name for the component in kebab-case-syntax</small>
                </div>

                <div class="pt-4" v-if="newRepoName">

                    <hr/>

                    <!-- step 1 -->
                    <FieldsetStep
                        :code-classes="codeClasses"
                        :step-number="1"
                        find-string="vite-vue-ts-compo-pkg-starter"
                        :replace-string="newRepoName"
                    >

                        <CheckboxBlock>

                            <input id="checbox-1-1" type="checkbox" :class="checkboxClasses" :checked="check_1_1" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-1-1" :class="checkLabels">
                                    ./package.json
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-1-2" type="checkbox" :class="checkboxClasses" :checked="check_1_2" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-1-2" :class="checkLabels">
                                    ./README.md
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-1-3" type="checkbox" :class="checkboxClasses" :checked="check_1_3" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-1-3" :class="checkLabels">
                                    ./docs/.vitepress/config.js
                                </label>
                            </template>

                        </CheckboxBlock>

                    </FieldsetStep>

                    <hr/>

                    <!-- step 2 -->
                    <FieldsetStep
                        :code-classes="codeClasses"
                        :step-number="2"
                        find-string="ReplaceMe"
                        :replace-string="newCompoName"
                    >

                        <CheckboxBlock>

                            <input id="checbox-2-1" type="checkbox" :class="checkboxClasses" :checked="check_2_1" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-1" :class="checkLabels">
                                    ./package.json
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-2" type="checkbox" :class="checkboxClasses" :checked="check_2_2" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-2" :class="checkLabels">
                                    ./rollup.config.js
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-3" type="checkbox" :class="checkboxClasses" :checked="check_2_3" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-3" :class="checkLabels">
                                    ./docs/component.md
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-4" type="checkbox" :class="checkboxClasses" :checked="check_2_4" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-4" :class="checkLabels">
                                    ./docs/index.md
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-5" type="checkbox" :class="checkboxClasses" :checked="check_2_5" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-5" :class="checkLabels">
                                    ./docs/.vitepress/config.js
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-6" type="checkbox" :class="checkboxClasses" :checked="check_2_6" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-6" :class="checkLabels">
                                    ./src/index.js
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-7" type="checkbox" :class="checkboxClasses" :checked="check_2_7" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-7" :class="checkLabels">
                                    ./src/ReplaceMe.vue
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-8" type="checkbox" :class="checkboxClasses" :checked="check_2_8" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-8" :class="checkLabels">
                                    ./src/app/Workspace.vue
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-2-9" type="checkbox" :class="checkboxClasses" :checked="check_2_9" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-2-9" :class="checkLabels">
                                    ./tests/ReplaceMe.js
                                </label>
                            </template>

                        </CheckboxBlock>

                    </FieldsetStep>

                    <hr/>

                    <!-- step 3 -->
                    <FieldsetStep
                        :code-classes="codeClasses"
                        :step-number="3"
                        find-string="replace-me"
                        :replace-string="newRepoName"
                    >

                        <CheckboxBlock>

                            <input id="checbox-3-1" type="checkbox" :class="checkboxClasses" :checked="check_3_1" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-3-1" :class="checkLabels">
                                    ./docs/index.md
                                </label>
                            </template>

                        </CheckboxBlock>

                    </FieldsetStep>

                    <hr/>

                    <!-- step 4 -->
                    <StepHeading>STEP: 4</StepHeading>

                    <FieldsetBlock>

                        <template #legend>
                            Change the file names containing the string:<br>
                            <code :class="codeClasses">ReplaceMe</code><br>
                            to the string:<br>
                            <code :class="codeClasses">{{ newCompoName }}</code><br>
                            in the following file(s):
                        </template>

                        <CheckboxBlock>

                            <input id="checbox-4-1" type="checkbox" :class="checkboxClasses" :checked="check_4_1" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-4-1" :class="checkLabels">
                                    <span class="text-black">./src/ReplaceMe.vue &gt;</span> ./src/{{ newCompoName }}.vue
                                </label>
                            </template>

                        </CheckboxBlock>

                        <CheckboxBlock>

                            <input id="checbox-4-2" type="checkbox" :class="checkboxClasses" :checked="check_4_2" @input="updateCheckboxStatus($event)"/>

                            <template #label>
                                <label for="checbox-4-2" :class="checkLabels">
                                    <span class="text-black">./tests/ReplaceMe.test.js &gt;</span> ./tests/{{ newCompoName }}.test.js
                                </label>
                            </template>

                        </CheckboxBlock>

                    </FieldsetBlock>

                    <hr/>

                    <!-- step 5 -->
                    <div class="pb-4">
                    
                        <StepHeading>STEP: 5</StepHeading>

                        <div class="pb-4">
                            Now do the testing driven component things to the newly updated <code :class="codeClasses">./tests/{{ newCompoName }}.text.js</code> and <code :class="codeClasses">./src/{{ newCompoName }}.vue</code> files!
                        </div>

                        <div class="flex flex-col space-y-1">

                            <CheckboxBlock>

                                <input id="checbox-5-1" type="checkbox" :class="checkboxClasses" :checked="check_5_1" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-5-1" :class="checkLabels">
                                        <span class="text-black">Ensure 100% coverage in </span> ./tests/{{ newCompoName }}.text.js
                                    </label>
                                </template>

                            </CheckboxBlock>

                            <CheckboxBlock>

                                <input id="checbox-5-2" type="checkbox" :class="checkboxClasses" :checked="check_5_2" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-5-2" :class="checkLabels">
                                        <span class="text-black">Complete component in </span> ./src/{{ newCompoName }}.vue
                                    </label>
                                </template>

                            </CheckboxBlock>

                        </div>

                    </div>

                    <hr/>

                    <!-- step 6 -->
                    <div class="pb-4">

                        <StepHeading>STEP: 6</StepHeading>

                        <div class="pb-4">
                            Next, write up some docs covering all aspects of your tested component in the <code :class="codeClasses">./docs/index.md</code> and <code :class="codeClasses">./docs/component.md</code> files!
                        </div>

                        <div class="flex flex-col space-y-1">

                            <CheckboxBlock>

                                <input id="checbox-6-1" type="checkbox" :class="checkboxClasses" :checked="check_6_1" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-6-1" :class="checkLabels">
                                        <span class="text-black">Document component fully in</span> ./docs/index.md
                                    </label>
                                </template>

                            </CheckboxBlock>

                            <CheckboxBlock>

                                <input id="checbox-6-2" type="checkbox" :class="checkboxClasses" :checked="check_6_2" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-6-2" :class="checkLabels">
                                        <span class="text-black">Reference generated files in</span> ./docs/component.md
                                    </label>
                                </template>

                            </CheckboxBlock>

                        </div>

                    </div>

                    <hr/>

                    <!-- step 7 -->
                    <div class="pb-4">

                        <StepHeading>STEP: 7</StepHeading>

                        <div class="pb-4">
                            Next, prep all generated files by running the <code :class="codeClasses">npm run publish:prep</code> command from the project's root directory.
                        </div>

                        <div class="flex flex-col space-y-1">

                            <CheckboxBlock>

                                <input id="checbox-7-1" type="checkbox" :class="checkboxClasses" :checked="check_7_1" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-7-1" :class="checkLabels">
                                        <span class="text-black">Run</span> publish:prep <span class="text-black">to generate component and docs files</span>
                                    </label>
                                </template>

                            </CheckboxBlock>

                        </div>

                    </div>

                    <hr/>

                    <!-- step 8 -->
                    <div class="pb-4">

                        <StepHeading>STEP: 8</StepHeading>

                        <div class="pb-4">
                            Commit all finalized files to the repository in a PR, and merge them into the <code :class="codeClasses">main</code> branch to trigger the GitHub Action automation to create a new gh-pages branch (if it doesn't already exist), which will automatically copy the files generated in the <code :class="codeClasses">./docs/.vitepress/dist</code> directory to the branch to push the files live to the world.
                        </div>

                        <div class="flex flex-col space-y-1">

                            <CheckboxBlock>

                                <input id="checbox-8-1" type="checkbox" :class="checkboxClasses" :checked="check_8_1" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-8-1" :class="checkLabels">
                                        <span class="text-black">Commit all updates, make a PR, and merge to</span> main <span class="text-black">branch</span>
                                    </label>
                                </template>

                            </CheckboxBlock>

                            <CheckboxBlock>

                                <input id="checbox-8-2" type="checkbox" :class="checkboxClasses" :checked="check_8_2" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-8-2" :class="checkLabels">
                                        <span class="text-black">Ensure docs were published:</span> <a :href="'https://obewds.github.io/' + newRepoName" target="_blank" rel="noopener noreferrer">https://obewds.github.io/{{ newRepoName }}</a>
                                    </label>
                                </template>

                            </CheckboxBlock>

                        </div>

                    </div>

                    <hr/>

                    <!-- step 9 -->
                    <div class="pb-4">

                        <StepHeading>STEP: 9</StepHeading>

                        <div class="pb-4">
                            Lastly, use the <code :class="codeClasses">npm run publish:package</code> command, and follow the NPM authentication prompts. Once successful, the package will be pubished and ready for use as a dependency!
                        </div>

                        <div class="flex flex-col space-y-1">

                            <CheckboxBlock>

                                <input id="checbox-9-1" type="checkbox" :class="checkboxClasses" :checked="check_9_1" @input="updateCheckboxStatus($event)"/>

                                <template #label>
                                    <label for="checbox-9-1" :class="checkLabels">
                                        <span class="text-black">Ensure the package was published:</span> <a :href="'https://obewds.github.io/' + newRepoName + '/'" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/@obewds/{{ newRepoName }}</a>
                                    </label>
                                </template>

                            </CheckboxBlock>

                        </div>

                    </div>

                    <hr/>

                    <div class="text-center pt-4">
                        <button
                            type="button"
                            :class="['bg-red-500', btnClasses]"
                            @click="reset()"
                        >
                            reset all the things
                        </button>
                    </div>

                </div>

            </div>

        </div>    

    </div>

    <div :class="[flexColSect, 'pt-8 pb-20']">

        <h2 :class="h2Classes">READING THE THINGS</h2>

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
                    <a href="https://vitejs.dev/guide/features.html" target="_blank" :style="linkStyle" rel="noopener noreferrer">Vite Docs</a>
                </li>
                <li>
                    <a href="https://v3.vuejs.org/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Vue 3 Docs</a>
                </li>
                <li>
                    <a href="https://tailwindcss.com/docs/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Tailwind CSS Docs</a>
                </li>
                <li>
                    <a href="https://rollupjs.org/guide/en/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Rollup Docs</a>
                </li>
                <li>
                    <a href="https://vitest.dev/" target="_blank" :style="linkStyle" rel="noopener noreferrer">Vitest Docs</a>
                </li>
            </ul>

            <p>Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" :style="linkStyle" rel="noopener noreferrer">VS Code</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" :style="linkStyle" rel="noopener noreferrer">Volar</a></p>

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


<script setup>

    import { computed, ref } from 'vue'
    import CheckboxBlock from './CheckboxBlock.vue'
    import FieldsetBlock from './FieldsetBlock.vue'
    import FieldsetStep from './FieldsetStep.vue'
    import StepHeading from './StepHeading.vue'

    
    // setup static values
    const more = 'more things'
    const less = 'less things'
    const toDosWip = 'DOING THE THINGS'
    const toDosDone = 'DID THE THINGS'
    const btnClasses = 'inline text-white rounded px-2 py-1'
    const btnStyle = 'background-color:#42b983;'
    const checkboxClasses = 'focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded'
    const checkLabels = 'text-green-700'
    const codeClasses = 'bg-gray-100 text-green-700 selection:bg-green-500 selection:text-white px-1'
    const flexColSect = 'flex flex-col space-y-2'
    const h2Classes = 'text-lg font-bold'
    const imgClasses = 'w-24 mx-auto sm:mx-0'
    const inputClasses = 'focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
    const linkStyle = 'color:#42b983;'

    
    // retrieve local storage values
    let storedRepoName = localStorage && localStorage.getItem('repoName') !== undefined && localStorage.getItem('repoName') !== null ? localStorage.getItem('repoName') : ''
    let toDosHeadlineText = localStorage && localStorage.length === 24 ? toDosDone : toDosWip

    function checkLocalStoreChecks(key) {
        return localStorage && localStorage.getItem(key) !== undefined && localStorage.getItem(key) === 'checked' ? true : false
    }

    
    // setup reactive values
    const count = ref(0)
    const check_1_1 = ref(checkLocalStoreChecks('checbox-1-1'))
    const check_1_2 = ref(checkLocalStoreChecks('checbox-1-2'))
    const check_1_3 = ref(checkLocalStoreChecks('checbox-1-3'))
    const check_2_1 = ref(checkLocalStoreChecks('checbox-2-1'))
    const check_2_2 = ref(checkLocalStoreChecks('checbox-2-2'))
    const check_2_3 = ref(checkLocalStoreChecks('checbox-2-3'))
    const check_2_4 = ref(checkLocalStoreChecks('checbox-2-4'))
    const check_2_5 = ref(checkLocalStoreChecks('checbox-2-5'))
    const check_2_6 = ref(checkLocalStoreChecks('checbox-2-6'))
    const check_2_7 = ref(checkLocalStoreChecks('checbox-2-7'))
    const check_2_8 = ref(checkLocalStoreChecks('checbox-2-8'))
    const check_2_9 = ref(checkLocalStoreChecks('checbox-2-9'))
    const check_3_1 = ref(checkLocalStoreChecks('checbox-3-1'))
    const check_4_1 = ref(checkLocalStoreChecks('checbox-4-1'))
    const check_4_2 = ref(checkLocalStoreChecks('checbox-4-2'))
    const check_5_1 = ref(checkLocalStoreChecks('checbox-5-1'))
    const check_5_2 = ref(checkLocalStoreChecks('checbox-5-2'))
    const check_6_1 = ref(checkLocalStoreChecks('checbox-6-1'))
    const check_6_2 = ref(checkLocalStoreChecks('checbox-6-2'))
    const check_7_1 = ref(checkLocalStoreChecks('checbox-7-1'))
    const check_8_1 = ref(checkLocalStoreChecks('checbox-8-1'))
    const check_8_2 = ref(checkLocalStoreChecks('checbox-8-2'))
    const check_9_1 = ref(checkLocalStoreChecks('checbox-9-1'))
    const newRepoName = ref(storedRepoName)
    const showDocs = ref(false)
    const showDocsBtnText = ref(more)
    const showToDos = ref(true)
    const showToDosBtnText = ref(less)
    const toDosHeadline = ref(toDosHeadlineText)


    // adjust states according if local storage data is complete on page load
    if (localStorage.length === 24) {
        toDosHeadline.value = toDosDone
        showToDos.value = false
        showToDosBtnText.value = more
    }

    
    // setup computed values
    const newCompoName = computed(() => {
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        function pascalize (string) {
            const words = string.split('-')
            const capitalized = words.map(word => capitalize(word))
            return capitalized.join('')
        }
        return pascalize(newRepoName.value)
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
        if (localStorage.length === 24) {
            toDosHeadline.value = toDosDone
        }
    }

    function updateCheckboxStatus(event){
        const status = event.target.checked ? 'checked' : ''
        if (status === 'checked') {
            localStorage.setItem(event.target.id, status)
        } else {
            localStorage.removeItem(event.target.id)
            toDosHeadline.value = toDosWip
        }
        if (localStorage.length === 24) {
            toDosHeadline.value = toDosDone
        }
    }

    function reset(){
        const checksArr = [
            'checbox-1-1', 'checbox-1-2', 'checbox-1-3',
            'checbox-2-1', 'checbox-2-2', 'checbox-2-3', 'checbox-2-4', 'checbox-2-5', 'checbox-2-6', 'checbox-2-7', 'checbox-2-8', 'checbox-2-9',
            'checbox-3-1',
            'checbox-4-1', 'checbox-4-2',
            'checbox-5-1', 'checbox-5-2',
            'checbox-6-1', 'checbox-6-2',
            'checbox-7-1',
            'checbox-8-1', 'checbox-8-2',
            'checbox-9-1',
        ]
        for (let i = 0; i < checksArr.length; i++) {
            if (localStorage) {
                localStorage.removeItem(checksArr[i])
            }
        }
        check_1_1.value = false
        check_1_2.value = false
        check_1_3.value = false
        check_2_1.value = false
        check_2_2.value = false
        check_2_3.value = false
        check_2_4.value = false
        check_2_5.value = false
        check_2_6.value = false
        check_2_7.value = false
        check_2_8.value = false
        check_2_9.value = false
        check_3_1.value = false
        check_4_1.value = false
        check_4_2.value = false
        check_5_1.value = false
        check_5_2.value = false
        check_6_1.value = false
        check_6_2.value = false
        check_7_1.value = false
        check_8_1.value = false
        check_8_2.value = false
        check_9_1.value = false
        if (localStorage) {
            localStorage.removeItem('repoName')
        }
        newRepoName.value = ''
        toDosHeadline.value = toDosWip
    }

</script>
