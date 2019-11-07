import React from 'react'
import { render } from 'react-dom'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'


class GameAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state={firstname:"",secondname:"",firstnumber:1,secondnumber:0,firstbutton:true,secondbutton:false};
        this.FirstNameHandler=this.FirstNameHandler.bind(this);
        this.SecondNameHandler=this.SecondNameHandler.bind(this);
        this.FirstButtonHandler=this.FirstButtonHandler.bind(this);
        this.SecondButtonHandler=this.SecondButtonHandler.bind(this);
    }

FirstNameHandler(event){
    this.setState({firstname: event.target.value});
}

SecondNameHandler(event){
    this.setState({secondname: event.target.value});
}

FirstButtonHandler(event){
this.setState({
    firstnumber:this.state.firstnumber+1,
     firstbutton: true,
     secondbutton: false
    })
}

SecondButtonHandler(event){
    this.setState({
    secondnumber: this.state.secondnumber+1,
    secondbutton: true,
    firstbutton: false
    })
}


    render() {
        return (
            <div >
                <div>
                <PlayerOne name={this.state.firstname} number={this.state.firstnumber} click={this.FirstButtonHandler} button={this.state.firstbutton}/>
                <PlayerTwo name={this.state.secondname} number={this.state.secondnumber} click={this.SecondButtonHandler} button={this.state.secondbutton}/>
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