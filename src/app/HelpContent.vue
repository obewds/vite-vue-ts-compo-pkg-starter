<!--
    ./src/app/HelpContent.vue
-->


<script setup>

    import { inject, ref } from 'vue'
    import vueLogoSrc from '@/assets/vue-logo.png'
    import tsLogoSrc from '@/assets/typescript-logo.png'
    import obeLogoSrc from '@/assets/OBE-MARK-200x200.png'

    import InitContent from '@/app/InitContent.vue'


    // setup globals values
    const globals = inject('globals')
    
    
    // setup static values
    const flexColSect = 'flex flex-col space-y-2'
    const linkStyle = 'color:#42b983;'
    const rel = 'noopener noreferrer'
    const imgs = [
        { alt: 'Vue logo', src: vueLogoSrc },
        { alt: 'TypeScript logo', src: tsLogoSrc },
        { alt: 'OBE:WDS logo', src: obeLogoSrc },
    ]
    const links = [
        { text: 'Vue 3 Docs', href: 'https://v3.vuejs.org/' },
        { text: 'Vite Docs', href: 'https://vitejs.dev/guide/features.html' },
        { text: 'TypeScript Docs', href: 'https://www.typescriptlang.org/docs/' },
        { text: 'Vitest Docs', href: 'https://vitest.dev/' },
        { text: 'Vue Test Utils', href: 'https://test-utils.vuejs.org/guide/' },
        { text: 'Tailwind CSS Docs', href: 'https://tailwindcss.com/docs/' },
        { text: 'Headless UI', href: 'https://headlessui.dev/' },
        { text: 'Rollup Docs', href: 'https://rollupjs.org/guide/en/' },
    ]

    
    // setup reactive values
    const count = ref(0)
    const showDocs = ref(false)
    const showDocsBtnText = ref(globals.strings.more)

    
    // setup interactive functionality
    function showDocsSection(){
        showDocs.value = !showDocs.value
        showDocsBtnText.value = showDocs.value === false ? globals.strings.more : globals.strings.less
    }

</script>


<template>

    <div class="w-full flex flex-col sm:flex-row justify-center text-center gap-8 pb-10 px-8">
        <img v-for="img in imgs" class="w-20 mx-auto sm:mx-0" :alt="img.alt" :src="img.src"/>
    </div>

    <h1 class="text-3xl pb-2">OBE:WDS Vite/Vue TypeScript</h1>
    <p class="text-xl pb-14">Component Package Dev Kit</p>

    <slot/>

    <InitContent :class="[flexColSect, 'pt-14 px-4']"/>

    <div :class="[flexColSect, 'pt-14 pb-20 px-4']">

        <h2 :class="globals.classes.h2">READ THE THINGS</h2>

        <p class="pb-2">
            <button
                type="button"
                :class="globals.classes.btn"
                :style="globals.styles.btn"
                @click="showDocsSection()"
            >
                {{ showDocsBtnText }}
            </button>
        </p>

        <div v-if="showDocs">

            <ul>
                <li v-for="link in links">
                    <a :href="link.href" target="_blank" :style="linkStyle" :rel="rel">
                        {{ link.text }}
                    </a>
                </li>
            </ul>

            <p class="pt-2">
                Recommended IDE setup:
                <br>
                <a href="https://code.visualstudio.com/" target="_blank" :style="linkStyle" :rel="rel">
                    VS Code
                </a>
                <span> + </span>
                <a href="https://github.com/johnsoncodehk/volar" target="_blank" :style="linkStyle" :rel="rel">
                    Volar
                </a>
            </p>

        </div>
    


        <h2 :class="[globals.classes.h2, 'pt-6']">A REACTIVE THING</h2>

        <p>
            <button
                type="button"
                :class="globals.classes.btn"
                :style="globals.styles.btn"
                @click="count++"
            >
                count is: {{ count }}
            </button>
        </p> 
    
    </div>

    <div class="text-gray-500 text-center pt-10 pb-4 px-4">
        Made with <span class="text-red-500">&hearts;</span> by <a href="https://github.com/oberocks" target="_blank" :style="linkStyle" :rel="rel">@oberocks</a>
    </div>

</template>
