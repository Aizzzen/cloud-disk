import React, {useState} from 'react';
import './Authorization.scss';
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div data-testid='register-page' className='authorization'>
            <div className="authorization__header">Registration</div>
            <Input value={email} setValue={setEmail} type='text' placeholder='Enter your email' />
            <Input value={password} setValue={setPassword} type='password' placeholder='Enter your password' />
            <button className="authorization__btn" onClick={() => registration(email, password)}>Register</button>
        </div>
    );
};

export default Registration;
