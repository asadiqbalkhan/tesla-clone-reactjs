import React, {useState} from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import HeaderBlock from './HeaderBlock'
import Login from './Login'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function App() {
    const user = useSelector(selectUser)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Router >
        <div className='App'>
            <Switch>
                <Route exact path='/'>
                    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                    {isMenuOpen && <Menu/>}
                    <HeaderBlock/>
                 </Route>
                 <Router exact path='/login'>
                    {user ? <Redirect to='/teslaaccount' /> : <Login /> }
                    <Login />
                 </Router>
            </Switch>
        </div>
        </Router>
    )
}

export default App