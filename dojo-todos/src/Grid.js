import React, { Component } from 'react';

class Grid extends Component {

    constructor(){
        super();
        this.state={
            filter:'All',
            btnAll:'active',
            btnActive:'',
            btnComp:'',
            
        }
        this.count=0
    }



    todoList = () => {
        let arr=[];
        this.count = 0;
        arr=this.props.todoList.list.map((item)=>{

            if((item.status === this.state.filter) || (this.state.filter === 'All')) {
                this.count++
                return (
                    <div className="row margin-top-small todos" key={item.uuid}>
                        <div className="small-1 columns">
                            <input type="checkbox" id={item.uuid}/>
                        </div>
                        <div className="small-10 columns" onClick={(e)=>e.target.contentEditable=true} onKeyPress={(e)=>{this.editItem(e, item.uuid)}}>
                            {item.todo}
                        </div>
                        <div className="small-1 columns">
                            <span className ="icon icon-remove margin-right-tiny text-alert-mute" onClick={()=>{this.handleDelete(item.uuid)}}/>
                        </div>
                    </div>
                )
            }
        })

        return arr;
    }

    editItem=(e,id)=>{
       // console.log(e.key);
        if(e.key==='Enter') {
            e.preventDefault();
            this.props.edit(id, e.target.innerText)
            e.target.contentEditable=false;
        }
    }

    handleFilter=(type)=>{

        this.setState({filter:type})
        if(type === 'Active') {
            this.setState({btnActive:'active', btnAll:'', btnComp:''})
        } else if (type==='All') {
            this.setState({btnActive:'', btnAll:'active', btnComp:''})
        } else {
            this.setState({btnActive:'', btnAll:'', btnComp:'active'})
        }
    }

    handleDelete=(id)=>{
        this.props.deleteItem(id)
    }

    toggleSelectAll=()=>{
        let inputs = document.getElementsByTagName('input');
        if (inputs.length === 1) return;
        for(let i=1; i<inputs.length; i++){
            if(inputs[i].type === 'checkbox') {
               inputs[i].checked = inputs[i].checked ? false : true
            }            
        }

    }

    markAs=()=>{
        let inputs = document.getElementsByTagName('input');
        let newStatus = document.getElementsByTagName('select')
        let arr=[]
        if (inputs.length === 1) return;
        for(let i=1; i<inputs.length; i++){
            if(inputs[i].type === 'checkbox') {
                if(inputs[i].checked) {
                    arr.push(inputs[i].id)
                }
            }            
        }
        this.props.changeStatus(arr, newStatus[0].value)
    }

    render() {
         return ( <div>
        <div className="row">
          <div className="small-3 columns">
            <button className="button tertiary medium" onClick={this.toggleSelectAll}><span className ="icon icon-check margin-right-tiny"></span></button>
          </div>

          <div className="small-9 columns text-dark-grey">
            <select className="small-12 columns" onChange={this.markAs}>
                <option value="0">
                    Mark as...
                </option>
                <option value="Active">
                    Active
                </option>
                <option value="Completed">
                    Completed
                </option>
            </select>
          </div>          
        </div>   

        {this.todoList()}

        <div className="row"><div className="small-12 columns text-dark-grey">{this.count} items</div></div>
        <div className="row"><div className="small-12 columns">&nbsp;</div></div>
        <div className="row">
          <div className="small-12 columns">
            <ul className ="button-group tertiary tiny even-3">
                <li><button className={this.state.btnAll} onClick={()=>this.handleFilter('All')}>All</button></li>
                <li><button className={this.state.btnActive} onClick={()=>this.handleFilter('Active')}>Active</button></li>
                <li><button className={this.state.btnComp} onClick={()=>this.handleFilter('Completed')}>Completed</button></li>
           </ul>
          </div>
     
        </div>
</div>
        ); 
        }
    }
export default Grid;
