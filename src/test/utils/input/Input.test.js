import React from 'react';
import {act, create} from 'react-test-renderer'
import Input from "../../../utils/input/Input";

describe('Input util component', () => {

    test('should be one input in component', () => {
        const component = create(<Input />)
        const root = component.root
        let input = root.findByType("input")
        expect(input).not.toBeNull()
    })

    test('should be value in input', () => {
        const component = create(<Input value={'Юнус'} />)
        const root = component.root
        const input = root.findByType('input').props.value
        expect(input).toEqual('Юнус')
    })

    test('should not be value in input', () => {
        const component = create(<Input />)
        const root = component.root
        const input = root.findByType('input').props.value
        expect(input).not.toEqual('Юнус')
    })

    // test('should handle change event in input', () => {
    //     const component = create(<Input />)
    //     const root = component.root
    //     const input = root.findByType('input').props.value
    //     expect(input).toEqual('')
    //     const iEvent = { target: { value: 'Yunus' } }
    //     act(() => {
    //         root.findByType('input').props.onChange(iEvent)
    //     })
    //     expect(root.findByType('input').props.value).toEqual('Yunus')
    // })

})
