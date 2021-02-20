import React, { useState, useEffect } from 'react'
import LoginForm from '../../components/loginForm/LoginForm'
import RegisterForm from '../../components/registerForm/RegisterForm'
import Footer from '../../components/footer/footer'

import './login.css'

function Login() {
    const [option, setOption] = useState({ opt: 'login', page: <LoginForm /> })


    useEffect(() => {
        const loginButton = document.querySelector('#button-log')
        const registerButton = document.querySelector('#button-register')

        const regForm = document.querySelector('.reg-form')
        const logForm = document.querySelector('.log-form')

        if (option.opt == 'login') {
            loginButton.className = 'active'
            registerButton.className = 'stand'

            logForm.style.opacity = '1'
        } if (option.opt == 'register') {
            registerButton.className = 'active'
            loginButton.className = 'stand'

            regForm.style.opacity = '1'
        }

    }, [option])

    function callLogin() {
        if (option.opt === 'register') {

            const regForm = document.querySelector('.reg-form')
            regForm.style.opacity = '0'

            setTimeout(() => {
                setOption({ opt: 'login', page: <LoginForm /> })
            }, 200);
        } else return

    }

    function callRegister() {
        if (option.opt === 'login') {
            const logForm = document.querySelector('.log-form')
            logForm.style.opacity = '0'

            setTimeout(() => {
                setOption({ opt: 'register', page: <RegisterForm /> })
            }, 200);
        } else {
            return
        }
    }

    return (
        <div className="login-body">

            <div id="log-Page">
                <div className="buttons-options">
                    <div id="button-log"
                        onClick={() => callLogin()}>Login</div>
                    <div id="button-register"
                        onClick={() => callRegister()}>Register</div>
                </div>

                {option.page}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Login