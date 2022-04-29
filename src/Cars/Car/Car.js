import React, { Component } from "react";
import "./Car.scss";
import PropTypes from "prop-types";
class Car extends Component {
    
    render() {
        
        const inputClasses = ['input'];

        this.props.name !== '' ? inputClasses.push('green') : inputClasses.push('red');
        this.props.name.length > 4 && inputClasses.push('bold');

        return (
            <div className="Car">
                <h3>Car name: { this.props.name }</h3>
                <p>Year: <strong>{ this.props.year }</strong></p>
                <input 
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}/>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default Car;