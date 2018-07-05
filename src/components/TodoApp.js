import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.getRandItem = this.getRandItem.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount(){
        console.log("Mount");
        try{
            const json = localStorage.getItem('options');
            if(json === null){
                this.setState(() => ({ options: [] }));
            }
            else{
                const options = JSON.parse(json);
                this.setState(() => ({ options: options }));
            }
        }
        catch(e){}
    }
    componentDidUpdate(preProps,preState){
        console.log("Update");
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
    }
    getRandItem(){
        const randNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randNum]);
    }
    handleRemoveAll(){
        this.setState(() => ({ options: [] }));
    }
    handleRemoveItem(title){
        const index = this.state.options.indexOf(title);
        this.state.options.splice(index,1);
        this.setState(() => ({ options: this.state.options }));
    }
    handleAddOption(item){
        if(!item){
            return "Specify a Task";    
        }
        else if(this.state.options.indexOf(item) > -1){
            return "This Task already exists";
        }
        this.setState((preState) => ({ options:preState.options.concat(item) }));
    }
    render(){
        return(
            <div>
                <Header />
                <Action getRandItem={this.getRandItem}/>
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveItem={this.handleRemoveItem}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
