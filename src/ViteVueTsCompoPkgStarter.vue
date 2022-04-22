<script setup lang="ts">

    type ViteVueTsCompoPkgStarterProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<ViteVueTsCompoPkgStarterProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>ViteVueTsCompoPkgStarter</slot>
        </template>
    </div>

</template>
