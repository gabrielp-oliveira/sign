import React from 'react'

function dashboard() {
    return (
        <div>
            {localStorage.getItem('Token')}
            <h1>LOGADO</h1>
        </div>
    )
}

export default dashboard
