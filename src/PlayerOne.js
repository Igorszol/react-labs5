import React from 'react'
import { render } from 'react-dom'

class PlayerOne extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style= {{border:"2px solid black"}}>
                
            <h1>I'm PlayerOne</h1>
            <p>
                <label>Name: {this.props.name}</label>
            </p>

            <p>
            <label>Played number of times:</label>

            </p>
            <button>Play</button>
        </div>
        );
    }
}
export default PlayerOne