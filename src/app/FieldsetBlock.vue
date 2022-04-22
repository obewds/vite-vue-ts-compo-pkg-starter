<!--
    ./src/app/FieldsetBlock.vue
-->


<script setup lang="ts">

    const props = defineProps({
        codeClasses: {
            type: String,
            default: '',
        },
        stepNumber: {
            type: Number,
            default: 1,
        },
        findString: {
            type: String,
            default: '',
        },
        replaceString: {
            type: String,
            default: '',
        },
    })

</script>


<template>

    <fieldset class="pb-4">

        <legend class="text-base font-medium text-gray-900">
            <slot name="legend"/>
        </legend>

        <div class="flex flex-col space-y-1 pt-4">

            <slot/>
            
        </div>

    </fieldset>

</template>
