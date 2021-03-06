import React, { Component } from 'react';
import ListItem from './ListItem'
import AddLib from './AddLib'
class List extends Component{

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    name: 'ReactJS',
                    votes: 10
                },
                {
                    name: 'Angular',
                    votes: 1
                },
                {
                    name: 'Vue',
                    votes: 5
                },
                {
                    name: 'Ember',
                    votes: 11
                },
                {
                    name: 'jQuery',
                    votes: 1
                }    

             ]
        }
    }//constructor

    

    HandleListItemClick = (val) => {
        
        const newData = this.state.data.map((el)=>{
            if(el.name === val) {
 
                let votes = el.votes+1
                return (
                    {...el, votes}
                )
            }
            else {
                return el
            }
        })
        this.setState({data:newData})
        
    } //HandleListItemClick


    getItems = () => {

        //Sort by votes
        this.state.data.sort((a, b)=>{
            let diff = b.votes-a.votes
            console.log(diff);
           return diff
        })

        var items = this.state.data.map((item, idx)=>{
            return(<ListItem data={item} key={item.name+idx} HandleClick={this.HandleListItemClick}/>)
        })
        return items
    } //getItems

    addNewItem(val) {
        var stateData = this.state.data;
        this.setState({data:stateData.concat([{name:val, votes:0} ])});
    }


    render() {
        
        return(
        <ul><AddLib HandleFormSubmit={this.addNewItem.bind(this)} />{this.getItems()}</ul>)
    }
}

export default List;