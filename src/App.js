import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Scrollbars } from 'react-custom-scrollbars'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Skills from './components/pages/Skills/Skills'
import Projects from './components/pages/Projects/Projects'
import Contact from './components/pages/Contact/Contact'

import './App.scss'

function App() {
    const history = createBrowserHistory();
    
    history.listen(location => {
        ReactGA.initialize('UA-180826242-1');
        ReactGA.set({ page: location.pathname }); 
        ReactGA.pageview(location.pathname); 
    });

    return (
        <Router history={ history }>
            <Navbar />
            <main className="main" role="main">                
                <Scrollbars autoHide>
                    <Switch>
                        <Route path='/' exact component={ Home } />
                        <Route path='/about' exact component={ About } />
                        <Route path='/skills' exact component={ Skills } />
                        <Route path='/projects' exact component={ Projects } />
                        <Route path='/contact' exact component={ Contact } />
                    </Switch>
                </Scrollbars>
            </main>
            <Footer />
        </Router>
    )
}

export default App
