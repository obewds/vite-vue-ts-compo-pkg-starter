// ./docs/.vitepress/config.js

module.exports = {
    base: '/vite-vue-ts-compo-pkg-starter/',
    title: '@obewds/vite-vue-ts-compo-pkg-starter',
    description: 'A documentation site for the ViteVueTsCompoPkgStarter component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vite-vue-ts-compo-pkg-starter" },
            { text: "GitHub", link: "https://github.com/obewds/vite-vue-ts-compo-pkg-starter" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
