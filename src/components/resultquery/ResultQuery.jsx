import React, { useEffect, useState } from 'react'
import SignsLogo from './SignsLogo'
import './ResultQuery.css'


function ResultQuery({ query }) {
    
    const [map, setMap] = useState([])
    
    useEffect(() => {
        let keys = Object.keys(query)
        setMap([])

        keys.forEach((element) => {
            if (element !== 'id' && element !== 'person' && element !== 'queryId' && element !== 'dateOfBirth') {
                
                if(query.error){
                    setMap(<div className="error-Message">{query[element]}</div>)
                    setInterval(() => {
                        
                        return document.querySelector('.error-Message').style.display = 'flex'
                    }, 100)
                }else{

                    setMap(oldArray => [...oldArray,
                        
                        <div className="planet" key={query[element].position}>
                    <h3>{query[element].planet}</h3>
                    <strong>{query[element].sign}</strong>
                    <span className="sign-logo"><SignsLogo name={query[element].sign}/></span>
                </div>
                ])
            }   
            }
        })
    }, [query])
    return (
        <div className="map">
            <h4>{query.person}</h4>
            <h5>{query.dateOfBirth}</h5>
            <div className="result">{map}</div>
        </div>
    )
}

export default ResultQuery
