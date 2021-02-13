import react,{useState} from 'react'

import LoginForm from './components/loginForm/LoginForm'
import RegisterForm from './components/registerForm/RegisterForm'

function App() {

  const [current, setcurrent] = useState(<LoginForm/>)

function loghandler(){
  setcurrent(<LoginForm/>)
}

function registerhandler(){
  setcurrent(<RegisterForm/>)
}
  return (
    <div className="App">
      {current}
      <br/>
      <button onClick={() => loghandler()}>log</button>
      <button onClick={() => registerhandler()}>register</button>
    </div>
  );
}

export default App;
