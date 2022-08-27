import React from 'react';
import userReducer, { logout, setUser } from '../../../store/reducers/userReducer';

const state = {
    currentUser: {},
    isAuth: false
}

describe('userReducer tests', () => {

    test('set user', () => {
       const action = setUser({ email: 'test6@mail.ru', password: 'test6@mail.ru' })
       const newState = userReducer(state, action)
       expect(newState.currentUser).not.toStrictEqual({})
       expect(newState.isAuth).toBe(true)
       expect(newState.isAuth).not.toBe(false)
       expect(newState.isAuth).not.toBe(undefined)
    })

    test('logout', () => {
        const action = logout()
        const newState = userReducer(state, action)
        expect(newState.currentUser).toStrictEqual({})
        expect(newState.currentUser).not.toBe({ id: 1, name: 'Vasya' })
        expect(newState.currentUser).not.toBe(null)
        expect(newState.isAuth).toBe(false)
        expect(newState.isAuth).not.toBe(true)
        expect(newState.isAuth).not.toBe(undefined)
    })

})
