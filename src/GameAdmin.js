import React from 'react'
import { render } from 'react-dom'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'


class GameAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state={firstname:"",secondname:""}
        
    }

FirstNameHandler=(event)=>{
    this.setState({firstname: event.target.value});
}

SecondNameHandler=(event)=>{
    this.setState({secondname: event.target.value});
}
    render() {
        return (
            <div >
                <div>
                <PlayerOne name={this.state.firstname}/>
                <PlayerTwo name={this.state.secondname}/>
                </div>
                <div>
                <p> 
                    <label>Set Name of Player One: </label>
                   <input onChange={this.FirstNameHandler}/>
                </p>
                <p>
                    <label>Set Name of Player Two: </label>
                    <input onChange={this.SecondNameHandler}/>
                </p>
                </div>
            </div>
        );
    }
}
export default GameAdmin