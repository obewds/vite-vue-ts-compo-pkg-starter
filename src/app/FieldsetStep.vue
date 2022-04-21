<!--
    ./src/app/FieldsetStep.vue
-->


<template>

    <StepHeading>
        STEP {{ stepNumber }}:
    </StepHeading>

    <FieldsetBlock>

        <template #legend>
            Find &amp; replace all occurances of the string:<br>
            <code :class="codeClasses">{{ findString }}</code><br>
            with the string:<br>
            <code :class="codeClasses">{{ replaceString }}</code><br>
            in the following file(s):
        </template>

        <slot/>

    </FieldsetBlock>

</template>


<script setup>

    import FieldsetBlock from './FieldsetBlock.vue'
    import StepHeading from './StepHeading.vue'

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
