import { ClickedContext } from "../App";

const Counter2 = (props) => {
    return (
        <div style={{border: '1px solid #ccc', width: 200, margin: '0 auto'}}>
            <h3>Clicker Context</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}

export default Counter2;