---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# ReplaceMe.vue

Welcome to the docs page for OBE:WDS's `ReplaceMe.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/replace-me --save-dev
```




## Import Component




### Template syntax

```html{3}
<template>
    <ReplaceMe/>
</template>
```




### Script setup syntax

```html{3}
<script setup>
    import ReplaceMe from '@obewds/replace-me'
</script>
```




### Composition API syntax

```html{4,9}
<script>
    import { defineComponent } from 'vue'
    import ReplaceMe from '@obewds/replace-me'

    export default defineComponent({
        components: { ReplaceMe }
    })
</script>
```




## Props




### text

:white_check_mark: - Type `String`  
:x: - Not Required  
:x: - Doesn't Validate


```html{2}
<template>
    <ReplaceMe text="My text prop string"/>
</template>
```

Outputs:

```html
<div>My text prop string</div>
```

::: warning
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




## Slots




### default

```html{2-4}
<template>
    <ReplaceMe>
        My slot content
    </ReplaceMe>
</template>
```

Outputs:

```html
<div>My slot content</div>
```

::: danger
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




## Uninstall

```bash
npm uninstall @obewds/replace-me
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
