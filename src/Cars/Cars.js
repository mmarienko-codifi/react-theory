import React from "react";
import Car from "./Car/Car";

class Cars extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
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

    render() {
        const cars = this.state.cars;

        return (
            <div style={{width: 400, margin: 'auto', paddingTop: 20}}> {cars.map((car, i) =>
                <Car
                key={i}
                name={car.name}
                year={car.year} 
                index={i}
                onChangeName={event => {this.onChangeName(event.target.value, i)}}
                onDelete={this.deleteHandler.bind(this, i)}
                />
            )} </div>
        )
    }
} 

export default Cars;