import React from 'react';
import uploadReducer, {
    addUploadFile,
    changeUploadFile,
    hideUpLoader,
    removeUploadFile,
    showUpLoader
} from '../../../store/reducers/uploadReducer';

const state = {
    files: [
        { id: 1, name: 'Sasha', progress: 100 },
        { id: 2, name: 'Masha', progress: 100 },
        { id: 3, name: 'Dasha', progress: 90 }
    ],
    isVisible: false
}

describe('uploadReducer tests', () => {

    test('show uploader', () => {
        const action = showUpLoader()
        const newState = uploadReducer(state, action)
        expect(newState.isVisible).toBe(true)
        expect(newState.isVisible).not.toBe(false)
        expect(newState.isVisible).not.toBe(undefined)
    })

    test('hide uploader', () => {
        const action = hideUpLoader()
        const newState = uploadReducer(state, action)
        expect(newState.isVisible).toBe(false)
        expect(newState.isVisible).not.toBe(true)
        expect(newState.isVisible).not.toBe(undefined)
    })

    test('add uploaded file', () => {
        const action = addUploadFile({ id: 4, name: 'Grisha' })
        const newState = uploadReducer(state, action)
        expect(newState.files.length).toBe(4)
        expect(newState.files[3].name).toBe('Grisha')
        expect(newState.files[3]).not.toBe(undefined)
    })

    test('remove uploaded file', () => {
        const action = removeUploadFile(2)
        const newState = uploadReducer(state, action)
        expect(newState.files.length).toBe(2)
        expect(newState.files.length).not.toBe(3)
        expect(newState.files[2]).toBe(undefined)
        expect(newState.files[1].id).toBe(3)
    })

    test('file upload changes or progress', () => {
        const action = changeUploadFile({ id: 3, name: 'Dasha', progress: 100 })
        const newState = uploadReducer(state, action)
        expect(newState.files.length).toBe(3)
        expect(newState.files[2].progress).toBe(100)
        expect(newState.files[2].progress).not.toBe(75)
    })

})
