import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Positions from './components/Positions'
import Companys from './components/Companys'
import AllClient from './components/AllClient'
import CompanyShow from './components/CompanyShow';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import styled from 'styled-components'




class App extends Component {

  render() {
    return (
      <Router>
        <div>
          
          {/* <NavBar /> */}
          <Switch>
            <Route exact path="/companys" component={Companys}/>
            <Route exact path="/companys/:companyId/positions/:positionId" component={Positions}/>
            <Route exact path="/companys/:companyId" component={CompanyShow}/>
            <Route exact path="/allClients/:allClientsId" component={AllClient}/>
            <Route exact path="/companys/:companyId/profile" component={Profile}/>
            <Route exact path="/signup" component={SignUp}/>
      
            <Route path="/" component={Home}/>

          </Switch>
          
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
