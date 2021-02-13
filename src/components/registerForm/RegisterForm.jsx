import React, { useRef } from 'react';
import axios from 'axios'

function Register() {


    function handlerRegister(e) {
        e.preventDefault()


        const email = document.getElementsByName('email')[0]
        const password = document.getElementsByName('password')[0]


        axios.post('http://localhost:8080/auth/register',{
                email: email.value,
                password: password.value}
                )
            .then((data) => {
                console.log(data.data)
               
            })
    }

    return (
        <div>

            <form >

                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />


            </form>
            <button onClick={e => handlerRegister(e)} className="button">Register</button>

        </div>

    );
}



export default Register;

