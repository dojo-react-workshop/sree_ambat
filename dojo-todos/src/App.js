import React, { Component } from 'react';
import './App.css'
import Add from './Add'
import Grid from './Grid'

class App extends Component {

constructor() {
  super();
  this.state={
    list:[],
  }
}

Header =()=> {
  return (
      <div className="row collapse">
          <div className="small-12 columns margin-bottom-small text-center">
              <h1 className="text-alert-mute">todos</h1>
          </div>
      </div>
  )
}


addNewToDo = (todo)=>{
  let tempTodoList = this.state.list;
  tempTodoList.push(todo);
  this.setState({list:tempTodoList})
}

delete=(id)=>{
  let tempTodoList = this.state.list;
  let idx=tempTodoList.findIndex((todo)=>{
      return (todo.uuid === id)
  })
  tempTodoList.splice(idx, 1)
  this.setState({list:tempTodoList})
}

statusUpdate=(arr, newStatus)=>{
  let idStr = arr.join('|');
  let tempTodoList=this.state.list.map((todo)=>{
      if(idStr.indexOf(todo.uuid)>=0){
        todo.status = newStatus
      } 
      return todo      
  })
  this.setState({list:tempTodoList})  
}
updateTodo=(id, val)=>{
  
  let tempTodoList=this.state.list.map((todo)=>{
      if(todo.uuid===id){
        todo.todo = val
      } 
      return todo      
  })
  this.setState({list:tempTodoList})  
  
}
  render() {
    return (
      <div className="todoapp">
          {this.Header()}
          <Add addNewItem={this.addNewToDo}/>
          <Grid todoList={this.state} deleteItem={this.delete} changeStatus={this.statusUpdate} edit={this.updateTodo}/>

      </div>
    );
  }
}

export default App;
