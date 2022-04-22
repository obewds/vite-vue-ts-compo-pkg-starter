<script setup lang="ts">

    type ReplaceMeProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<ReplaceMeProps>(), {
            text: ''
        }
    )

    // Example using TypeScript generic (with angular bracket)
    // const props = defineProps<{
    //     text: String
    // }>()

    /*import { defineComponent } from 'vue'

    export default defineComponent({

        name: 'ReplaceMe',

        // components: {},

        props: {
            text: {
                type: String,
                default: '',
            },
        },

        // setup(){},

    })*/ 

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>ReplaceMe</slot>
        </template>
    </div>

</template>
