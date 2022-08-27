import {render, screen} from "@testing-library/react";
import Registration from "../../../components/registration/Registration";
import userEvent from "@testing-library/user-event";

describe('Registration component tests',  () => {

    test('Main tests', () => {
        render(<Registration/>)
        const containerDiv = screen.getByTestId('register-page')
        const headerDiv = screen.getByText(/registration/i)
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

    test('Registration events', () => {
        render(<Registration/>)
        const input = screen.getByPlaceholderText(/Enter your email/i)
        expect(input).toContainHTML('')
        userEvent.type(input, 'user@mail.ru')
        expect(input).toContainHTML('user@mail.ru')

        const passInput = screen.getByPlaceholderText(/Enter your password/i)
        expect(passInput).toContainHTML('')
        userEvent.type(passInput, '123456')
        expect(passInput).toContainHTML('123456')
    })

});
