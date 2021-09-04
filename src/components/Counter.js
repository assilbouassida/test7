import './Counter.css';
import React, { Component } from 'react'
import assil from "./assil.jpg"
export class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             memory:null
        }
        console.log("constructor()")
    }
    increment = () => {
        this.setState({ count:this.state.count+1  });
    }
    decrement = () => {
       if(this.state.count>0){
        this.setState({ count:this.state.count-1  });
       }
       else {
           alert("STOP")
       }
    }
    componentDidMount = () => {
        console.log("componentDidMount()")
       this.setState({ memory:  setInterval(() => {
        this.setState({ count: this.state.count+1 });
    }, 1000) });

    }

    componentDidUpdate = () => {
        console.log("componentDidUpdate()")
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount()")
        clearInterval(this.state.memory)
    }
    render() {
        console.log("render()")
        return (
            <div>
                <h1>Bouassida Assil</h1>
                <br></br>
                <img src={assil} alt="pic"/>
                <h2>sfax rte saltnia</h2>
                <br></br>
                <h2>étudiant de lycée sadak feki </h2>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
            </div>
            
        )
    }
}

export default Counter
