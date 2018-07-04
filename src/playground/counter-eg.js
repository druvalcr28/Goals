
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {                      //state object.
            count: 0 
        };
    }
    handleAddOne(){
        this.setState((preState) => {
            return{                         //returning an object.
                count: preState.count + 1   //specify only that element which is to be changed.
            };
        });
    }
    handleMinusOne(){}
    handleReset(){
        this.setState((preState) => {
            return{                          
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />,document.getElementById("app"));