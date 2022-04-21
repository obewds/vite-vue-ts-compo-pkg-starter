<template>

    <div>{{ testVar }}</div>

</template>

<script setup>

    const props = defineProps({
        testVar: {
            type: String,
            default: 'this-is-a-test'
        },
    })

</script>