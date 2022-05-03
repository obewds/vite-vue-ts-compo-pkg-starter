import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

// import tw from '../obewds.tw.config.json'

const app = createApp(App)

// app.provide('tw', tw)

app.provide('globals', {
    classes: {
        btn: 'inline text-white rounded px-2 py-1 shadow',
        h2: 'text-lg font-bold',
    },
    strings: {
        more: 'more things',
        less: 'less things',
    },
    styles: {
        btn: 'background-color:#42b983;',
    },
})

app.mount('#app')
