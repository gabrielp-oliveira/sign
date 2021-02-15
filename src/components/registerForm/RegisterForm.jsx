import React from 'react';
import axios from 'axios'

function Register() {


    function handlerRegister(e) {
        e.preventDefault()


        const name = document.getElementsByName('name')[0]
        const email = document.getElementsByName('email')[0]
        const password = document.getElementsByName('password')[0]


        axios.post('http://localhost:8080/auth/register', {
            name: name.value,
            email: email.value,
            password: password.value}
        )
            .then((data) => {
                console.log('teste')
                console.log(data.data)

            })
            .catch(() => {
                console.log('error')

            })
    }

    return (
        <div className="reg-form">

            <form className="form">
                <input type="text" name="name" className="input" placeholder="Name" />
                <input type="email" name="email" className="input" placeholder="Email" />
                <input type="password" name="password" className="input" placeholder="Password" />


            </form>
            <button onClick={e => handlerRegister(e)} className="button">Register</button>

        </div>

    );
}



export default Register;

