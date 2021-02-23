import React from 'react'
import './GetInformation.css'

function GetInformation() {
    return (
        <div className="information">

            <div className="inf">
                <h4 className="inf">About</h4>
                <span className="inf">"Use my knowledge to improve and test my skills as a programmer".🚀</span>
                <p className="inf">This project is part of my portfolio, so feel free to get in touch for feedback on the code, structure or other reason that will help me become a better programmer!</p>
            </div>


            <div className="inf">
                    <h4 className="inf">Functionalities</h4>
                <div className="Functionalities">
                    <li className="inf">Saved all the Signs in a database</li>
                    <li className="inf">Register and login a personal account.</li>
                    <li className="inf">Get signs of the planets with a specific date</li>
                </div>
            </div>


            <div className="inf">
                <h4 className="inf">Observations</h4>
                <p className="inf">It was utilized the Astrosoft API to get truthful astrology, you can check the api <a href="http://docs.innovativeastrosolutions.com/" target="_blank">here</a>.</p>
                <p className="inf">Also it was utilized a api to convert places and addresses and get the latitude and longitude, click <a href="https://positionstack.com/documentation" target="_blank">here</a> to read more.</p>
                <p>Because of the api's request limit, it is only possible to perform 5 sign searches, however it is possible to delete some old ones and perform another if necessary.</p>
            </div>


        </div>
    )
}

export default GetInformation
