import './App.css';
import React, { Component } from 'react'
import Counter from './components/Counter'

export class App extends Component {
  state={
    isShow:false
  }
 toggle = () => {
   this.setState({isShow:!this.state.isShow})
 }
  render() {
    return (
      <div>

        <button onClick={this.toggle}>{this.state.isShow ? "click" : "click"}</button>
        {
          
          this.state.isShow === true ? <Counter/> : "click the button to show the counter"
        }
      </div>
    )
  }
}

export default App
