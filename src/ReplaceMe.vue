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


<script lang="ts">

    import { defineComponent } from 'vue'

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

    })

</script>
