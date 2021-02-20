import './App.css';

import Login from './pages/login/login.jsx'
import Dashboard from './pages/dashboard/dashboard'

import { Route, Redirect } from 'react-router-dom'


function App() {



  return (
    <div className="App">
        <Route path="/" exact component={Dashboard}/>
        <Route exact path="/">{localStorage.Token ? <Redirect to="/" /> : <Redirect to="login"/>}</Route>
        <Route exact path="/login">{!localStorage.Token ? <Redirect to="/login" /> : <Redirect to="/"/>}</Route>
        <Route path="/login" component={Login} />

      
    </div>
  );
}

export default App;
