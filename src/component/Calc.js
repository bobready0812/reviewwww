import React, {Component} from 'react';
import {Fragment} from 'react';

class Calc extends Component {

    state = {
        num1: 0,
        num2: 0,
        result: 0
    } 


    handleOnChange = (e) => {
      if (e.key === 'Enter') {
        this.setState({num1: e.target.value})
    } 
    }

    handleOnChange2 = (e) => {
       
        if (e.key === 'Enter') {
            this.setState({num2: e.target.value} )
        } 

        
    }

    handleClick = () => {
        this.setState({
            result: Number(this.state.num1) ** Number(this.state.num2)

        })

    }

    render() {

        return (
            <Fragment>
                <input type="text" onKeyPress={this.handleOnChange}></input>
                <h1>
                    {this.state.num1}
                </h1>
                <input type="text" onKeyPress={this.handleOnChange2}></input>
                <h1>
                    {this.state.num2}
                </h1>
                <button onClick={this.handleClick}>계산</button>
                <h1>
                    Result:{this.state.result}
                </h1>
            </Fragment>
        )
    }

}

export default Calc