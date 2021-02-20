import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faFish, faStrikethrough, faPastafarianism, faBalanceScale, faHorse, faSignature, faPaw } from '@fortawesome/free-solid-svg-icons'

const sign = {
    Aries: <FontAwesomeIcon icon={faPastafarianism} />,
    Taurus: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Taurus.svg" alt="" />,
    Gemini: <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Gemini.svg" alt="" />,
    Cancer: <FontAwesomeIcon icon={faStrikethrough} />,
    Leo: <FontAwesomeIcon icon={faPaw} />,
    Virgo: <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Virgo.svg" alt="" />,
    Libra: <FontAwesomeIcon icon={faBalanceScale} />,
    Scorpio: <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Scorpio.svg" alt="" />,
    Sagittarius: <FontAwesomeIcon icon={faHorse} />,
    Capricorn: <FontAwesomeIcon icon={faSignature} />,
    Aquarius: <FontAwesomeIcon icon={faWater} />,
    Pisces: <FontAwesomeIcon icon={faFish} />,
}

function SignsLogo({ name }) {

    return (
        <>
            {sign[name]}
        </>
    )
}
export default SignsLogo
