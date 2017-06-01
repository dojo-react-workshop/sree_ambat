import React, { Component } from 'react';

class Counter extends Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            key: props.data
        }
        
    }

    changeVal = (val) => {
        this.setState({count:this.state.count+val})
    }

    render() {
        
        return(
            <div className='counterBox' id={this.state.key}>
                <h1 className='counter'>{this.state.count}</h1>
                <button onClick={()=>this.changeVal(1)}>Increment</button><button onClick={()=>this.changeVal(-1)}>Decrement</button>
            </div>
        )
    }
}

export default Counter;