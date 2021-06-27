import React from 'react'
import './App.css'
import Header from './Header'
import Main from './Main'
import Container from './Container'
import Main2 from './Main2'
import Footer from './Footer'
import Login from './Login'
import {BrowserRouter as Router , Link , Switch , Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
    <div className='app'>
      <Route exact path='/'>
        <Header />
           <Main />
           <Container />
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
          

           <Main2 />
           <Footer />
           </Route>
           <Route exact path='/login'>
       
             <Login />
           </Route>
    </div>
    </Switch>
    </Router>
  )
}

export default App
