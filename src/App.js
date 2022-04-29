import React, { Component } from 'react';
import classes from './App.module.scss';
import Car from './Car/Car';
import Counter from './Counter/Counter';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      cars: [
        {
          name: 'Ford',
          year: 2018
        },
        {
          name: 'Audi',
          year: 2016
        },
        {
          name: 'Mazda',
          year: 2010
        }
      ],
      pageTitle: 'React Components',
      showCars: false
    }
  }

  onChangeName(name, i) {
    const cars = [...this.state.cars];
    cars[i].name = name;

    this.setState({cars});
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler = (i) => {
    const cars = [...this.state.cars];
    cars.splice(i, 1);

    this.setState({cars});
  }

  // componentWillMount() {
  //   console.log('App componentWillMount');
  // }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('App render');
    
    const cars = this.state.cars;

    return (
      <div className={classes.App}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <br/>

        <button style={{marginTop: 20}} onClick={this.toggleCarsHandler}>Toggle cars</button>

        <button onClick={() => {this.setState({clicked: true})}}>Change clicked</button>
  
        { this.state.showCars && <div style={{width: 400, margin: 'auto', paddingTop: 20}}> {cars.map((car, i) =>
            <ErrorBoundary key={i}>
              <Car 
                name={car.name}
                year={car.year} 
                index={i}
                onChangeName={event => {this.onChangeName(event.target.value, i)}}
                onDelete={this.deleteHandler.bind(this, i)}
              />
            </ErrorBoundary>
          )} </div>
        }
      </div>
    );
  }
}

export default App;
