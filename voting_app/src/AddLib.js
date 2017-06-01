import React, { Component } from 'react';

class AddLib extends Component {
    
    handleSubmit(e) {
        e.preventDefault();
        if(this.refs.libName.value === ''){
            alert('Lib Name is required');
        }
        else {
            this.props.HandleFormSubmit(this.refs.libName.value);
            this.refs.libName.value = ""
        }
        
    }

    render(){
        return (<li className='listItem'>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type='text' ref='libName' placeholder='Lib Name' />
                        <input type='submit' value='Add' />
                    </form>
                </li>);
}
}
export default AddLib;