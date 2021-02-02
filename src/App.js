import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="container">

        {
          props.location.pathname === '/' ?
            null :
            <Header />
        }
        
        <HomeMenu />
      </div>
    </div>
  );
}

export default withRouter(App);
