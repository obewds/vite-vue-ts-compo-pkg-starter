<!--
    ./src/app/CheckboxBlock.vue
-->


<template>

    <div class="flex items-start">
        <div class="flex items-center h-5">
            <slot/>
        </div>
        <div class="ml-3 text-sm">
            <slot name="label"/>
        </div>
    </div>

</template>
