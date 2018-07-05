class TodoApp extends React.Component{
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
const Header = () => {
    return (
        <div>
            <h1>Goals</h1>
            <h2>Lets start it!</h2>
        </div> 
    );
}
const Action = (props) => {
    return (
        <div>
            <button onClick={props.getRandItem}>What to Do?</button>
        </div> 
    );
}
const Options = (props) => {
    return (
        <div>
            <p>No.of Options : {props.options.length}</p>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            <ol>
                {
                    props.options.map( (item,index) => <Option key={item} title={item} handleRemoveItem={props.handleRemoveItem} /> )
                }
            </ol>
        </div>
    );
}
const Option = (props) => {
    return (
        <div>
            <li>{props.title}</li>
            <button onClick={() => props.handleRemoveItem(props.title)}>Remove Item</button>
        </div>  
    );
}
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
