import React, { Component } from "react";
import Radium from "radium";
import './Car.scss';

class Car extends Component {
    render() {
        const inputClasses = ['input'];

        this.props.name !== '' ? inputClasses.push('green') : inputClasses.push('red');
        this.props.name.length > 4 && inputClasses.push('bold');

        const style = {
            border: '2px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '2px solid #aaa',
                boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .44)',
            }
        }

        return (
            <div className="Car" style={style}>
                <h3>Car name: { this.props.name }</h3>
                <p>Year: <strong>{ this.props.year }</strong></p>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name} className={inputClasses.join(' ')}/>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Radium(Car);