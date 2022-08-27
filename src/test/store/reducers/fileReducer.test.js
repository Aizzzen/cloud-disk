import React from 'react';
import fileReducer, {
    addFile,
    deleteFileAction,
    pushToStack,
    setCurrentDir,
    setFiles, setFileView,
    setPopupDisplay
} from '../../../store/reducers/fileReducer';

const state = {
    files: [
        { _id: 1, name: 'Sasha' },
        { _id: 2, name: 'Masha' },
        { _id: 3, name: 'Dasha' }
    ],
    currentDir: null,
    popupDisplay: 'none',
    dirStack: [34, 54, 21, 38],
    view: 'list'
}

describe('fileReducer tests', () => {

    test('set files from server', () => {
        const newFiles = [
            { _id: 1, name: 'Sasha' },
            { _id: 2, name: 'Masha' },
            { _id: 3, name: 'Dasha' }
        ]
        const action = setFiles(newFiles)
        const newState = fileReducer(state, action)
        expect(newState.files[0]).toStrictEqual({ _id: 1, name: 'Sasha' })
        expect(newState.files[2].name).toStrictEqual('Dasha')
    })

    test('set current directory', () => {
        const action = setCurrentDir(25)
        const newState = fileReducer(state, action)
        expect(newState.currentDir).toBe(25)
        expect(newState.currentDir).not.toBe(null)
    })

    test('add file to app state', () => {
        const action = addFile({ _id: 4, name: 'Grisha' })
        const newState = fileReducer(state, action)
        expect(newState.files[3]).toStrictEqual({ _id: 4, name: 'Grisha' })
        expect(newState.files[3]._id).not.toBe(3)
    })

    test('set popup on display', () => {
        const action = setPopupDisplay('flex')
        const newState = fileReducer(state, action)
        expect(newState.popupDisplay).toBe('flex')
        expect(newState.popupDisplay).not.toBe('none')
    })

    test('push changed dir to stack', () => {
        const action = pushToStack(25)
        const newState = fileReducer(state, action)
        expect(newState.dirStack[4]).toBe(25)
        expect(newState.dirStack.length).toBe(5)
        expect(newState.dirStack[6]).toBe(undefined)
    })

    test('deletefile from disk', () => {
        const action = deleteFileAction(2)
        const newState = fileReducer(state, action)
        expect(newState.files.length).toBe(2)
        expect(newState.files[1].name).toBe('Dasha')
        expect(newState.files[1]._id).not.toBe(2)
    })

    test('change files view', () => {
        const action = setFileView('plate')
        const newState = fileReducer(state, action)
        expect(newState.view).toBe('plate')
        expect(newState.view).not.toBe('list')
    })

})
