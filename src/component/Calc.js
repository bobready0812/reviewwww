import React, { Component } from 'react';
import { Fragment } from 'react';

class Calc extends Component {

state = {
    num1: 0,
    num2: 0
}   

handleOnChange = (e) => {
   this.setState( {
   num1: e.target.value

   } )
}

handleOnChange2 = (e) => {
    this.setState( {
    num2: e.target.value
 
    } )
 }

render() {


    return(
        <Fragment>
        <input type="text" onChange={this.handleOnChange}></input>
        <h1> {this.state.num1} </h1>
        <input type="text"  onChange={this.handleOnChange2}></input>
        <h1> {this.state.num2} </h1>
        </Fragment>
    )
}




 


}

export default Calc