import React from 'react';
import { BrowserRouter as Router, Switch, withRouter, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import HomeMenu from './components/HomeMenu';
import './App.css';


function App(props) {
  return (
    <div className="App">
      <div className="container">
        {
          props.location.pathname === '/' ? null : <Link to='/' ><Header /></Link>
        }
        
        <Switch>
          <Route exact path='/'>
            <HomeMenu />
          </Route>
          <Route path='/beers'>
            <AllBeers /> 
          </Route>
          <Route path="/:id">
            <BeerDetails />
          </Route>
        </Switch>
       
      </div>
    </div>
  );
}

export default withRouter(App);
