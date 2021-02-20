import React, { useState } from 'react'
import SelectTimezone from '../selectTimezone/SelectTimezone'
import './horoscopoForm.css'
import axios from 'axios'

export default function HoroscopoForm({ cb }) {
    const [select, SetSelect] = useState('')

    function HandlehoroscopoForm(e) {
        e.preventDefault()

        const name = document.getElementsByName('person')[0]
        const city = document.getElementsByName('city')[0]
        const dateOfBirth = document.getElementsByName('dateOfBirth')[0]



        axios.post('http://localhost:8080/query', {
            person: name.value,
            city: city.value,
            dateOfBirth: dateOfBirth.value,
            Timezone: select,
            id: localStorage.User_id,
            queryId: Date.now()
        }).then((resp) => cb(resp.data))
    }

    return (
        <form className="horoscopoForm">
            <input type="text" name="person" placeholder='person name' className="input" />
            <input type="text" name="city" placeholder='city of birth' className="input" />
            <input type="date" name="dateOfBirth" placeholder="date of birth" className="input-date" />
            <SelectTimezone state={SetSelect}></SelectTimezone>
            <button type="submit" onClick={(e) => HandlehoroscopoForm(e)} className="search">Search</button>
            <div className="error-Message"></div>
        </form>
    )
}

