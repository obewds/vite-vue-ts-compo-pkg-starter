# vite-vue-ts-compo-pkg-starter

The @obewds/vite-vue-ts-compo-pkg-starter modular design system component for Vue.js

![GitHub package.json version](https://img.shields.io/github/package-json/v/obewds/vite-vue-ts-compo-pkg-starter?label=Github&logo=github&style=for-the-badge) &nbsp; ![npm](https://img.shields.io/npm/v/@obewds/vite-vue-ts-compo-pkg-starter?color=%23cc3534&logo=npm&style=for-the-badge)

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) &nbsp; ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) &nbsp; ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) &nbsp; ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) &nbsp; ![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)

<br>


---

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

---
## Getting Started With This Starter

Once the repo is local, you can install dependencies with:

```bash
npm install
```

To initialize your repository's files specific to your new repo/component name (under the `@obewds` namespace), run:

```bash
npm run init:as -- your-repo-name
```

And to generate all of the files after changing the names to your repo/component name, use:

```bash
npm run publish:prep
```

Then you can launch Vite and the Workspace app and a separate local vite server for your docs with:

```bash
npm run dev
```
```bash
npm run docs:dev
```


And of course you can run tests with:

```bash
npm run test
```

```bash
npm run coverage
```


And last but not least, you can remove the `init:as` script used to init the template files for your `@obewds` namespaced repository name, using:

```bash
npm run delete:init:as
```

Don't forget to **remove** the npm scripts `"init:as"` and `"delete:init:as"` from your `package.json` file after running the `delete:init:as` command!

> And after you've removed the npm scripts, it's safe to do a quick search of the repo files for the string `InitContent` and delete the file, and component import, and the component instance. And that will finish up clearing out all of the no longer needed content and files following the `init:as` process!

> Lastly, delete this section and the Vite/Vue section above to prep this file for publishing to npm!


<br>

---
## Documentation

Check out the [official docs](https://obewds.github.io/vite-vue-ts-compo-pkg-starter/) for this component for more details!

Or check out the [CHANGELOG](https://github.com/obewds/vite-vue-ts-compo-pkg-starter/blob/main/CHANGELOG.md) for the code base!

<br>


---
## Installation

```bash
npm install @obewds/vite-vue-ts-compo-pkg-starter --save-dev
```

<br>


---
## Uninstall

```bash
npm uninstall @obewds/vite-vue-ts-compo-pkg-starter
```
