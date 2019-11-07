import React from 'react'
import { render } from 'react-dom'

class PlayerTwo extends React.Component {
    constructor(props){
        super(props);
    }

    changetext(button)
    {
        if(button)
        return "This user is playing now";
        else
        return "Play";
    }

    render() {
        return (
            <div style= {{border:"2px solid black"}}>
                
            <h1>I'm PlayerTwo</h1>

            <p>
            <label>Name: {this.props.name}</label>
            </p>

            <p>
            <label>Played number of times: {this.props.number}</label>
            </p>
            
            <button style={{position:"relative", left:"10px", bottom:"10px"}} disabled={this.props.button} onClick={this.props.click} >{this.changetext(this.props.button)}</button>

        </div>
        );
    }
}
export default PlayerTwo