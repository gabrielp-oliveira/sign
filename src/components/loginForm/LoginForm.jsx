import React from 'react'
const axios = require('axios')

function LoginForm() {


    function loginHandler(e) {
        e.preventDefault()
        const email = document.getElementsByName('email')[0]
        const password = document.getElementsByName('password')[0]


        axios.post("http://localhost:8080/auth/authenticate", {
            email: email.value,
            password: password.value
        })
            .then((resp) => {
                console.log(resp.data)
     
            })

    }
    return (
        <div>
            <form >
                <input type="email" name="email" placeholder="Email"  />
                <input type="password" name="password" placeholder="password"  />
            </form>
            <button type="submit" onClick={(e) => loginHandler(e)} >Login</button>
        </div>
    )
}

export default LoginForm
