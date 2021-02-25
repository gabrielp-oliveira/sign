import React, { useContext, useRef } from 'react'
import './Sign.css'

import api from '../../api/api'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../../context/userContext'

function Sign({ name, sun, queryId, RenderSign, setResult }) {
    const { qeryContext } = useContext(UserContext)
        
    function getSign() {
        qeryContext.querys.forEach(element => {
            if (element.queryId === queryId) {
                RenderSign(element)
            }
        });
    }


    function YesdeleteSign(params) {

        api.get(`/delete/query/`, {
            params: {
                token: `Bearer ${localStorage.Token}`,
                User_ID: localStorage.User_id,
                query_ID: params
            }
        })
            .then((data) => {
                if(data.data.ok){
                    document.location.reload();
                }
            })
    }

    function NodeleteSign(e) {
        e.target.closest('.row').children[0].style.display = 'flex'
        e.target.closest('.row').children[1].style.display = 'flex'
        e.target.closest('.row').children[2].style.display = 'none'
    }

    function deleteSign(e) {
        e.target.closest('.row').children[0].style.display = 'none'
        e.target.closest('.row').children[1].style.display = 'none'
        e.target.closest('.row').children[2].style.display = 'flex'
    }

    return (
        <div className="row">
            <div onClick={() => getSign()} className="personSign">
                <span className="personname">{name}</span>
                <span className="sun">{sun}</span>
            </div>
            <span className="delete"
                onClick={(e) => deleteSign(e)}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
            <span className="delete-message">
                <span>want to delete this sign?</span>
                <span>
                    <span onClick={() => YesdeleteSign(queryId)}>Yes</span>
                    <span onClick={(e) => NodeleteSign(e)}>No</span>
                </span>
            </span>
        </div>
    )
}
export default Sign
