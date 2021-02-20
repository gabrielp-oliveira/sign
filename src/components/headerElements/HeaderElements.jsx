import React from 'react'
import './HeaderElements.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderElements({item, icon, cb}) {


    let style =  item+ ' button-header'
    return (
        <div className={style} onClick={() => cb()}>
        <FontAwesomeIcon  icon={icon}/>
        
        </div>
    )
}

export default HeaderElements
