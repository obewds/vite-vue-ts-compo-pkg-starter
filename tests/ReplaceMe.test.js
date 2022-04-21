// ./tests/ReplaceMe.test.js

import { mount } from '@vue/test-utils'
import ReplaceMe from '../src/ReplaceMe.vue'



test('ReplaceMe.vue component mounts successfully', async () => {

    expect(ReplaceMe).toBeTruthy()

})



test('ReplaceMe.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(ReplaceMe, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



/*test('ReplaceMe.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(ReplaceMe, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})*/
