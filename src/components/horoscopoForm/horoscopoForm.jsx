import React, { useState } from 'react'
import SelectTimezone from '../selectTimezone/SelectTimezone'
import './horoscopoForm.css'
import axios from 'axios'

import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HoroscopoForm({ cb }) {
    const [select, SetSelect] = useState('')

    function HandlehoroscopoForm(e) {
        e.preventDefault()

        const name = document.getElementsByName('person')[0]
        const city = document.getElementsByName('city')[0]
        const dateOfBirth = document.getElementsByName('dateOfBirth')[0]

        const form = document.querySelector('.horoscopoForm')
        const loading = document.querySelector('.loading')
        const errorMessage = document.querySelector('.error-Message')

         const resetInput = () => {
            name.value = ''
            city.value = ''
            dateOfBirth.value = ''
         }
         
        if (name.value.trim() == '' || city.value.trim() == '' || dateOfBirth.value.trim() == '' || select.trim() == '') {
            errorMessage.innerHTML = 'Error, some fields are empty.'
            errorMessage.style.display = 'block'
            resetInput()
            return
        }
        if (name.value.length <= 3 || name.value.length >= 15) {
            errorMessage.innerHTML = 'Name must be between 3 and 15 letters.'
            errorMessage.style.display = 'block'
            resetInput()
            return
        }

        form.style.display = 'none'
        loading.style.display = 'block'


        axios.post('http://localhost:8080/query', {
            person: name.value,
            city: city.value,
            dateOfBirth: dateOfBirth.value,
            Timezone: select,
            id: localStorage.User_id,
            queryId: Date.now()
        }).then((resp) => {
            if(!resp.data.error){
                console.log(resp)
                cb(resp.data)
            }else{
                console.log(resp)
                errorMessage.innerHTML = resp.data.error
                errorMessage.style.display = 'block'
                loading.style.display = 'none'

            }
        })
    }

    return (
        <>
            <form className="horoscopoForm">
                <input type="text" name="person" placeholder='person name' className="input" />
                <input type="text" name="city" placeholder='city of birth' className="input" />
                <input type="date" name="dateOfBirth" placeholder="date of birth" className="input-date" />
                <SelectTimezone state={SetSelect}></SelectTimezone>
                <button type="submit" onClick={(e) => HandlehoroscopoForm(e)} className="search">Search</button>
            </form>
            <div className="error-Message"></div>
            <div className="loading" ><FontAwesomeIcon icon={faSpinner} /></div>
        </>
    )
}

