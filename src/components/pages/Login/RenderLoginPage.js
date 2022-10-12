import React, { useState } from 'react';
import fallColors from '../../../images/fallColors.jpg';

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

    // const buttonIsDown = () => {
    //     document.getElementById("submit").className = 'submit-btn-down';
    // }

    // const buttonIsUp = () => {
    //     document.getElementById("submit").className = 'submit-btn';
    // }

    return (
        <div className='login-wrapper'>
            <img className='login-background' src={fallColors} alt="login background" />
            <form className='login-form' id='loginForm' onSubmit={onSubmit}>
                <div className='input-form'>
                    <h2>Login Here</h2>
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
                    <button 
                        className='submit-btn'
                        type='submit' 
                        disabled={isDisabled()} 
                        id="submit">
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RenderLoginPage;