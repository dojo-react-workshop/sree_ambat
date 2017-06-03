import React, { Component } from 'react';
const uuidV4 = require('uuid/v4');
// uuidV4()



class Add extends Component {

constructor(props) {
    super(props)
    this.state ={
        newToDo:''
    }
}

    handleChange=(e)=>{
        this.setState({newToDo:e.target.value})
    }

    handleEnter = (e)=>{
        if(e.key === "Enter") {
            let obj={todo: this.state.newToDo, status:'Active', uuid:uuidV4()}
            this.props.addNewItem(obj)
            this.setState({newToDo:''})
        } 
    }

    render() {
         return ( 
        <div className="row collapse">
            <div className="small-2 columns">
                <span className="prefix">Todo</span>
            </div>
            <div className="small-10 columns">
                <input className="with-prefix" type="text" value={this.state.newToDo} placeholder="Enter your to do..." onChange={this.handleChange} onKeyPress={this.handleEnter}/>
            </div>
        </div>
        ); 
        }
    }
export default Add;