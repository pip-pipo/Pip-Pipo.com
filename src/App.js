import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
const App = () => {
    return (
        <Router>
            <Navbar/>
           <Switch>
           <Route exact path="/" component={Home}/> 
           </Switch> 
        </Router>
    )
}

export default App
