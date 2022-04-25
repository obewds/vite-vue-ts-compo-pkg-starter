// ./tests/ViteVueTsCompoPkgStarter.test.js

import { mount } from '@vue/test-utils'
import ViteVueTsCompoPkgStarter from '../src/components/ViteVueTsCompoPkgStarter.vue'



test('ViteVueTsCompoPkgStarter.vue component mounts successfully', async () => {

    expect(ViteVueTsCompoPkgStarter).toBeTruthy()

})



test('ViteVueTsCompoPkgStarter.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(ViteVueTsCompoPkgStarter, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('ViteVueTsCompoPkgStarter.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(ViteVueTsCompoPkgStarter, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
