import React from 'react'

const sign = {
    Aries: <span> &#9800;</span>,
    Taurus: <span>&#9801;</span>,
    Gemini: <span>&#9802;</span>,
    Cancer: <span>&#9803;</span>,
    Leo: <span>&#9804;</span>,
    Virgo: <span>&#9805;</span>,
    Libra: <span>&#9806;</span>,
    Scorpio: <span>&#9807;</span>,
    Sagittarius: <span>&#9808;</span>,
    Capricorn: <span>&#9809;</span>,
    Aquarius: <span>&#9810;</span>,
    Pisces: <span>&#9811;</span>,
}
function SignsLogo({ name }) {

    return (
        <>
            {sign[name]}
        </>
    )
}
export default SignsLogo
