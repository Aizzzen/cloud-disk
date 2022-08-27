import {fireEvent, render, screen} from "@testing-library/react";
import Login from "../../../components/registration/Login";
import {Provider} from "react-redux";
import {store} from "../../../store/store";

describe('Login component tests',  () => {
    test('Main tests', () => {
        render(
            <Provider store={store}>
                <Login/>
            </Provider>
        )
        const containerDiv = screen.getByTestId('login-page')
        const headerDiv = screen.getByText(/authorization/i)
        const emailInput = screen.getByPlaceholderText(/Enter your email/i)
        const passInput = screen.getByPlaceholderText(/Enter your password/i)
        const btn = screen.getByRole('button')

        expect(containerDiv).toBeInTheDocument()
        expect(headerDiv).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(passInput).toBeInTheDocument()
        expect(btn).toBeInTheDocument()

        expect(btn).toMatchSnapshot()
        expect(headerDiv).toMatchSnapshot()
        expect(emailInput).toMatchSnapshot()
        expect(passInput).toMatchSnapshot()
        expect(btn).toMatchSnapshot()
    })

    test('Login events', () => {
        render(
            <Provider store={store}>
                <Login/>
            </Provider>
        )
        const input = screen.getByPlaceholderText(/Enter your email/i)
        expect(input).toContainHTML('')
        fireEvent.input(input, {
            target: {value: 'user@mail.ru'}
        })
        expect(input).toContainHTML('user@mail.ru')

        const passInput = screen.getByPlaceholderText(/Enter your password/i)
        expect(passInput).toContainHTML('')
        fireEvent.input(passInput, {
            target: {value: '123456'}
        })
        expect(passInput).toContainHTML('123456')
    })

});
