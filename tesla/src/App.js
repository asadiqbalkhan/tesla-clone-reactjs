import React, {useState} from 'react'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import HeaderBlock from './HeaderBlock'

function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Router >
        <div className='App'>
            <Switch>
            <Router path='/'></Router>
            
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <HeaderBlock/>
            </Switch>
        </div>
        </Router>
    )
}

export default App