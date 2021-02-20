import React from 'react'
import axios from 'axios'
import history from '../../history/history';

function LoginForm() {


    function loginHandler(e) {
        e.preventDefault()
        const email = document.getElementsByName('email')[0]
        const password = document.getElementsByName('password')[0]

        const resetInput = () => {
            email.value = ''.trim()
            password.value = ''.trim()
        }
        axios.post("http://localhost:8080/auth/authenticate", {
            email: email.value,
            password: password.value
        })
        .then((resp) => {
                localStorage.setItem('Token', resp.data.token)
                localStorage.setItem('User_id', resp.data.userInfo._id)
        })
        .then(() => {
                history.push('/')
                document.location.reload();
                console.log('1')
        }).catch((error) => {
            console.log('error')
            resetInput()
            console.log(error)

        })

    }
    return (
        <div className="log-form">
            <form className="form">
                <input type="email" name="email" placeholder="Email" className="input" />
                <input type="password" name="password" placeholder="password" className="input" />
            </form>
            <button type="submit" onClick={(e) => loginHandler(e)} className="button">Log</button>

        </div>
    )
}

export default LoginForm
