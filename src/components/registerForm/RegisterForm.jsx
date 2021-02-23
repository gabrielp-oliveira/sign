import React from 'react';
import axios from 'axios'
import history from '../../history/history'

function Register() {


    function handlerRegister(e) {
        e.preventDefault()
        const ErrorMessage = document.querySelector('.error-Message')


        const name = document.getElementsByName('name')[0]
        const email = document.getElementsByName('email')[0]
        const password = document.getElementsByName('password')[0]

        const resetInput = () => {
            email.value = ''
            name.value = ''
            password.value = ''
        }
        if(!email.checkValidity()){
            resetInput()
            return ErrorMessage.innerHTML = 'Email invalid'
        }

        axios.post('http://localhost:8080/auth/register', {
            name: name.value,
            email: email.value,
            password: password.value}
        )
            .then((data) => {
                if (!data.data.error) {
                    localStorage.setItem('Token', data.data.token)
                    localStorage.setItem('User_id', data.data.userInfo._id)
                    history.push('/')
                    document.location.reload();
                    ErrorMessage.style.display = 'none'
                }else{
                    resetInput()
                    ErrorMessage.style.display = 'flex'
                    ErrorMessage.innerHTML = data.data.error                    
                }

            })
            .catch((err) => {
                resetInput()
                ErrorMessage.innerHTML = 'Ops, something wrong'

            })
    }

    return (
        <div className="reg-form">
            
            <div className="error-Message"></div>
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

