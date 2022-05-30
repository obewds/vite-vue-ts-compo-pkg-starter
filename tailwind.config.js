module.exports = {

    // darkMode: 'media',
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        // PROVIDES TAILWIND OBE:WDS DEFAULT DESIGN SYSTEM CLASSES
        "./node_modules/@obewds/**/dist/*.js",
        // PROVIDES TAILWIND OBE:WDS APP DESIGN SYSTEM CLASSES
        "./obewds.tw.config.json"
    ],

    // theme: {
    //     extend: {},
    // },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],

}
