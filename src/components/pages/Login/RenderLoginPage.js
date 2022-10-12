import React, { useState } from 'react';
import lakePortrait from '../../../images/lakePortrait.jpg';

const intialFormValues = {
    username: '',
    password: '',
}

function RenderLoginPage(props) {
    const [ values, setValues ] = useState(intialFormValues);

    const { login } = props;

    const onChange = evt => {
        const { id, value } = evt.target
        setValues({...values, [id]: value});
    }

    const onSubmit = evt => {
        evt.preventDefault()
        login(values)
    }

    const isDisabled = () => {
        if (values.username.trim().length >= 3 && values.password.trim().length >= 8) {
            return false
        } else {
            return true;
        }
    }
  
    return (
        <div className='login-wrapper'>
            <img className='login-background' src={lakePortrait} alt="login background" />
            <form className='login-form' id='loginForm' onSubmit={onSubmit}>
                <h2>LOGIN</h2>
                <input 
                    maxLength={20}
                    value={values.username}
                    onChange={onChange}
                    placeholder="Username"
                    id="username"
                />
                <input 
                    maxLength={28}
                    value={values.password}
                    onChange={onChange}
                    placeholder="Password"
                    id="password"
                />
                <button disabled={isDisabled()} id="submit" className='submit-btn'>Submit</button>
            </form>
        </div>
    );
}

export default RenderLoginPage;