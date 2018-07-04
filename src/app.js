class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.state = {
            options: props.options
        };
    }
    handleRemoveAll(){
        this.setState(() => ({ options: [] }));
        /*this.setState(() => {
            return {
                options: []
            };
        });*/
    }
    handleRemoveItem(index){
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
                <Action options={this.state.options}/>
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveItem={this.handleRemoveItem}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
TodoApp.defaultProps = {    //it should be after TodoApp definition
    options: ["One","Two"]
};

const Header = () => {
    return (
        <div>
            <h1>Goals</h1>
            <h2>Let's start it!</h2>
        </div> 
    );
}
/*class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Goals</h1>
                <h2>Let's start it!</h2>
            </div>
        );
    }
}*/
class Action extends React.Component{
    constructor(props){
        super(props);
        this.getRandItem = this.getRandItem.bind(this);
    }
    getRandItem(){
        const randNum = Math.floor(Math.random() * this.props.options.length);
        alert(this.props.options[randNum]);
    }
    render(){
        return(
            <div>
                <button onClick={this.getRandItem}>What to Do?</button>
            </div>
        );
    }
}
/*const Options = (props) => {
    return (
        <div>
            <p>No.of Options : {props.options.length}</p>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            <ol>
                {
                    props.options.map( (item,index) => <Option key={item} title={item} /> )
                }
            </ol>
        </div>
    );
}*/
class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveItem_getIndex = this.handleRemoveItem_getIndex.bind(this);
    }
    handleRemoveItem_getIndex(title){
        const index = this.props.options.indexOf(title);
        this.props.handleRemoveItem(index);
    }
    render(){
        return(
            <div>
                <p>No.of Options : {this.props.options.length}</p>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                <ol>
                    {
                        this.props.options.map( (item,index) => <Option key={item} title={item} handleRemoveItem_getIndex={this.handleRemoveItem_getIndex}/> )
                    }
                </ol>
            </div>
        );
    }
}
const Option = (props) => {
    return (
        <div>
            <li>{props.title}</li>
            <button onClick={() => props.handleRemoveItem_getIndex(props.title)}>Remove Item</button>
        </div>  
    );
}
/*class Option extends React.Component{
    render(){
        return(
            <div>
                <li>{this.props.title}</li>
            </div>
        );
    }
}*/
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
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
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TodoApp />,document.getElementById("app"));
