import React, { Component } from 'react';
import classes from './App.module.scss';
import Cars from './Cars/Cars';
import About from './About/About';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: 'React Components',
    }
  }
  render() {
    return (
      <div className={classes.App}>
        <nav>
          <ul style={{listStyle: 'none', display: 'inline-flex', paddingLeft: 0}}>
            <li style={{margin: '10px'}}>
              <a href="/">Home</a>
            </li>
            <li style={{margin: '10px'}}>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
        <h1>{this.state.pageTitle}</h1>
  
        <About/>
        <Cars/>
      </div>
    );
  }
}

export default App;
