import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class TodoApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
    getRandItem = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({ selectedOption: this.state.options[randNum] }));
    }
    clearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    }
    handleRemoveItem = (title) => {
        const index = this.state.options.indexOf(title);
        this.state.options.splice(index,1);
        this.setState(() => ({ options: this.state.options }));
    }
    handleAddOption = (item) => {
        if(!item){
            return "Specify a Task";    
        }
        else if(this.state.options.indexOf(item) > -1){
            return "This Task already exists";
        }
        this.setState((preState) => ({ options:preState.options.concat(item) }));
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
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <Action length={this.state.options.length} getRandItem={this.getRandItem}/>
                    <div className="widget">
                        <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveItem={this.handleRemoveItem}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption} />
            </div>
        );
    }
}
