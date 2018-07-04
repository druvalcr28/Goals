class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggle(){
        this.setState((preState) => {
            return {
                visibility: !(preState.visibility)
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility? "Hide Details":"Show Details"}</button>
                {
                    this.state.visibility && <p>This is some text</p>
                }
            </div>
        );
    }
}
ReactDOM.render(<Visibility />,document.getElementById("app"));