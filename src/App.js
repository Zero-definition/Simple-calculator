import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();
 
        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "^"){
            this.square()
        }
        else if(button === "s")
        {
          this.squareroot()
        }
        else if(button === "G")
        {
          this.sign()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    sign =() =>{
      this.setState({
        result: (eval(-this.state.result) || "" ) + ""
    })
    }
    square =() =>{
      this.setState({
        result: (eval(this.state.result * this.state.result) || "" ) + ""
    })
    }
    squareroot =() =>{
      this.setState({
        result: (eval(Math.sqrt(this.state.result)) || "" ) + ""
    })
    }
    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--'))
        {
            checkResult = this.state.result.replace('--','+')
        }
        else 
        {
            checkResult = this.state.result
        }
        try {
          this.setState({
              result: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
    };
    reset = () => 
    {
        this.setState(
        {
            result: ""
        })
    };
    render() 
    {
      return (
          <div>
              <div className="calculator-body">
                <br></br>
                  <ResultComponent result={this.state.result}/>
                  <KeyPadComponent onClick={this.onClick}/>
             </div>
            </div>
        );
    }
}

export default App;
