import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        
        const item = e.target.elements.presentItem.value.trim();
        const error = this.props.handleAddOption(item);
        e.target.elements.presentItem.value = "";   

        this.setState(() => ({ error: error }));
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="presentItem"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}