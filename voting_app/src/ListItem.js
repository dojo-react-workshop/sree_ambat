import React, { Component } from 'react';

class ListItem extends Component {
    
    render(){
        return (<li className='listItem'>
            <span className='voteCount'>{this.props.data.votes}</span>
            {this.props.data.name}
            <span className='plusVote' onClick={()=>{this.props.HandleClick(this.props.data.name)}}>+</span>
        </li>)
    }
}

export default ListItem;