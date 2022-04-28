import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  state = {
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

  render() {
    const divStyle = {
      textAlign: 'center'
    };

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
  
        { this.state.showCars && cars.map((car, i) => 
            <Car 
             name={car.name}
             year={car.year} 
             key={i} 
             onChangeName={event => {this.onChangeName(event.target.value, i)}}
             onDelete={this.deleteHandler.bind(this, i)}
            />
          )
        }
      </div>
    );
  }
}

export default App;
