import React from 'react'
import axios from 'axios'
import history from '../../history/history';

function LoginForm() {


    function loginHandler(e) {
        e.preventDefault()
        const email = document.getElementsByName('email')[0]
        const password = document.getElementsByName('password')[0]
        const ErrorMessage = document.querySelector('.error-Message')


        const resetInput = () => {
            email.value = ''.trim()
            password.value = ''.trim()
        }
        axios.post("http://localhost:8080/auth/authenticate", {
            email: email.value,
            password: password.value
        })
        .then((resp) => {
            if (!resp.data.error) {
                localStorage.setItem('Token', resp.data.token)
                localStorage.setItem('User_id', resp.data.userInfo._id)
            }return resp
        })
        .then((data) => {
            if (!data.data.error) {
                history.push('/')
                document.location.reload();
                console.log('1')
            } else {
                console.log('2')
                resetInput()
                ErrorMessage.style.display = 'flex'
                ErrorMessage.innerHTML = data.data.error
                console.log(email.value.trim())
            }
        }).catch((error) => {
            console.log('error')
            resetInput()
            console.log(error)
            ErrorMessage.innerHTML = 'Ops, something wrong'

        })

    }
    return (
        <div className="log-form">
            <div className="error-Message"></div>

            <form className="form">
                <input type="email" name="email" placeholder="Email" className="input" />
                <input type="password" name="password" placeholder="password" className="input" />
            {/* <span className="forgot">Forgot Password?</span> */}

            </form>
            <button type="submit" onClick={(e) => loginHandler(e)} className="button">Log</button>

        </div>
    )
}

export default LoginForm
