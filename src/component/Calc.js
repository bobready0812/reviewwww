import React, { Component } from 'react';
import { Fragment } from 'react';

class Calc extends Component {

state = {
    num1: 0,
    num2: 0
}   

handleOnChange = (e) => {
    console.log(e.target.value);
}

render() {


    return(
        <Fragment>
        <input type="text" onChange={this.handleOnChange}></input>
        <h1> {this.state.num1} </h1>
        <input type="text"></input>
        </Fragment>
    )
}




 


}

export default Calc