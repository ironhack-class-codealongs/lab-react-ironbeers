import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import './App.css';
import AllBeers from './components/AllBeers';
import Beer from './components/Beer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        beers: []
    }
  }

  componentDidMount() {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            return response.json()
        })
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    beers: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
  }

  handleErrorAndLoading = () => {
    if(this.state.error) {
      return <div>Error: {this.state.error.message}</div>
    } else if(!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return <AllBeers beers={this.state.beers} />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {
            this.props.location.pathname === '/' ? null : <Header />
          }
          <Switch>
            <Route exact path='/'>
              <HomeMenu />
            </Route>
            <Route exact path='/beers'>
              {this.handleErrorAndLoading}
            </Route>
            <Route path='/beers/:beerId' render={(props) => {
              return this.state.beers.length ? <Beer {...props} beers={this.state.beers} />
              : 'Beer loading...'
              }}
            />
            <Route path='/random-beer' render={(props) => {
              return <RandomBeer {...props} />
            }}
            />
            <Route path='/new-beer' render={(props) => {
              return <NewBeer {...props} />
            }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
