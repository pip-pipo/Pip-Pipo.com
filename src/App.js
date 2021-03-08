import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/pages/Home'
import PageNotFound from './Components/pages/pageNotFound/PageNotFound'

const App = () => {
    return (
        <Router>
            <Navbar/>
           <Switch>
           <Route exact path="/" component={Home}/> 
           <Route  component={PageNotFound} />
           </Switch> 
        </Router>
    )
}

export default App
