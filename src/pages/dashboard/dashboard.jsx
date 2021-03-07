import React, {useState, useEffect, useContext} from 'react'
import './dashboard.css'
import api from '../../api/api'
import Toggle from '../../utils/Toggle.js'

import history from '../../history/history'
import HeaderElement from '../../components/headerElements/HeaderElements'
import Information from '../../components/getInformation/GetInformation'
import HoroscopoForm from '../../components/horoscopoForm/horoscopoForm'
import Footer from '../../components/footer/footer'
import Sign from '../../components/sign/Sign'
import ResultQuery from '../../components/resultquery/ResultQuery'
import { UserContext } from '../../context/userContext'



import { faSignOutAlt, faQuestionCircle, faQuran, faHome, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Dashboard() {
    const [UserInfo, setUserInfo] = useState('usuario')
    const [Body, setBody] = useState('')
    const [columnSign, setColumnSign] = useState([])
    const { SetQueryContext } = useContext(UserContext)
    const [result, setResult] = useState()


    useEffect(() => {


        api.get('/',{
            params: {
                token: `Bearer ${localStorage.Token}`,
                id: localStorage.User_id
            }
        })
            .then((data) => {
                if(data.data.error){
                    HandleLogOut()
                }
                setColumnSign([])
                GoHome(data.data.name)
                SetQueryContext(data.data)
                setUserInfo(data.data)

                return data.data.querys
            })
            .then((signs) => {
                signs.forEach(element => {

                    setColumnSign(oldArray => [...oldArray,
                    <span key={element.queryId}>
                        <Sign name={element.person} sun={element.Sun.sign}
                            queryId={element.queryId} RenderSign={RenderSign} setResult={setResult} />
                    </span>
                    ])
                });

            })


    }, [result])



    function GoHome(value) {
        if (!value) {
            setBody(<h3><span>Welcome, {UserInfo.name} !</span></h3>)
        } else
            setBody(<>
                <h3><span>Welcome,  {value} !</span></h3>
                <ResultQuery query={result ? result : ''} />
            </>)
    }


const RenderSign = (a) => setBody(<ResultQuery query={a ? a : ''} />)
const GetInformation = () => setBody(<Information />)
const GoToQuery = () => setBody(<HoroscopoForm cb={setResult} />)
function HandleLogOut() {
    localStorage.removeItem('Token')
    localStorage.removeItem('User_id')
    document.location.reload();
    history.push(process.env.PUBLIC_URL+'/login')
}


    window.addEventListener("click", (e) => Toggle.windowClick(e))
    window.addEventListener("resize", () => Toggle.windowResize())

    return (
        <div id="Dashboard">
            <header className="header">
                <HeaderElement item="Home" icon={faHome} cb={GoHome}></HeaderElement>
                <HeaderElement item="Query" icon={faQuran} cb={GoToQuery}></HeaderElement>
                <HeaderElement item="Info" icon={faQuestionCircle} cb={GetInformation}></HeaderElement>
                <HeaderElement item="LogOut" icon={faSignOutAlt} cb={HandleLogOut}></HeaderElement>

                <span className="hamburguer-column" onClick={Toggle.ShowColumn}><FontAwesomeIcon icon={faBars} /></span>
                <span className="hamburguer-menu" onClick={Toggle.ShowHeaders}><FontAwesomeIcon icon={faBars} /></span>

                <div className="menu">
                    <span href="#" onClick={() => setBody(<h3>
                        <span>Welcome, {UserInfo.name} !</span>
                    </h3>)}>Home</span>
                    <span href="#" onClick={GoToQuery}>query</span>
                    <span href="#" onClick={GetInformation}>info</span>
                    <span href="#" onClick={HandleLogOut}>Logout</span>
                </div>
            </header>
            <main className="main">
                <div className="column">{columnSign}</div>
                <div id="body">{Body}</div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard
