import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{                    
        this.setState({
            count:this.state.count+1
        })
    }

    handleDecrement=()=>{
      if(this.state.count>0){
        this.setState({
            count:this.state.count-1
        })
    }else{
        alert('we get negative values')
    }
    }
    handleReset=()=>{
        this.setState({
            count:0
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
