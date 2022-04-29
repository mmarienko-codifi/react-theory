import React from "react";
import Auxilinary from "../hoc/Auxilinary";
import ClickerContext from "../ClickerContext/ClickerContext";

export default class Counter extends React.Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <Auxilinary>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                <hr />
                <ClickerContext />
                <hr />
            </Auxilinary>
        )

        // return [
        //     <h2 key="1">Counter {this.state.counter}</h2>,
        //     <button key="2" onClick={this.addCounter}>+</button>,
        //     <button key="3" onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>,
        // ]
    }
}