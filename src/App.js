import React from 'react';
import { Switch, withRouter, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import HomeMenu from './components/HomeMenu';
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <div className="container">
          {
            this.props.location.pathname === '/' ? null : <Link to='/' ><Header /></Link>
          }
          
          <Switch>
            <Route exact path='/'>
              <HomeMenu />
            </Route>
            <Route exact path='/beers'>
              <AllBeers updateBeers={this.updateBeers} /> 
            </Route>
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route  path="/:id"  component={BeerDetails} />
          </Switch>
        
        </div>
      </div>
    )
  }
}

export default withRouter(App);
