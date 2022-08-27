import React from 'react';
import appReducer, { hideLoader, showLoader } from '../../../store/reducers/appReducer';

const state = {
    loader: false
}

describe('appReducer tests', () => {

    test('should return default state when passed an empty action', () => {
        const testResult = appReducer(undefined, { type: '' })
        expect(testResult).toEqual(state)
    })

    test('loader should be showed', () => {
        const action = showLoader()
        const newState = appReducer(state, action)
        expect(newState.loader).toBe(true)
        expect(newState.loader).not.toBe(false)
    })

    test('loader should be hide', () => {
        const action = hideLoader()
        const newState = appReducer(state, action)
        expect(newState.loader).toBe(false)
        expect(newState.loader).not.toBe(true)
    })

})
