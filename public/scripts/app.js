"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveItem = _this.handleRemoveItem.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(TodoApp, [{
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
            /*this.setState(() => {
                return {
                    options: []
                };
            });*/
        }
    }, {
        key: "handleRemoveItem",
        value: function handleRemoveItem(index) {
            var _this2 = this;

            this.state.options.splice(index, 1);
            this.setState(function () {
                return { options: _this2.state.options };
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(item) {
            if (!item) {
                return "Specify a Task";
            } else if (this.state.options.indexOf(item) > -1) {
                return "This Task already exists";
            }
            this.setState(function (preState) {
                return { options: preState.options.concat(item) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, { options: this.state.options }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll, handleRemoveItem: this.handleRemoveItem }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return TodoApp;
}(React.Component);

TodoApp.defaultProps = { //it should be after TodoApp definition
    options: ["One", "Two"]
};

var Header = function Header() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Goals"
        ),
        React.createElement(
            "h2",
            null,
            "Let's start it!"
        )
    );
};
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

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.getRandItem = _this3.getRandItem.bind(_this3);
        return _this3;
    }

    _createClass(Action, [{
        key: "getRandItem",
        value: function getRandItem() {
            var randNum = Math.floor(Math.random() * this.props.options.length);
            alert(this.props.options[randNum]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.getRandItem },
                    "What to Do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);
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


var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.handleRemoveItem_getIndex = _this4.handleRemoveItem_getIndex.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: "handleRemoveItem_getIndex",
        value: function handleRemoveItem_getIndex(title) {
            var index = this.props.options.indexOf(title);
            this.props.handleRemoveItem(index);
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "No.of Options : ",
                    this.props.options.length
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.handleRemoveAll },
                    "Remove All"
                ),
                React.createElement(
                    "ol",
                    null,
                    this.props.options.map(function (item, index) {
                        return React.createElement(Option, { key: item, title: item, handleRemoveItem_getIndex: _this5.handleRemoveItem_getIndex });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "li",
            null,
            props.title
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return props.handleRemoveItem_getIndex(props.title);
                } },
            "Remove Item"
        )
    );
};
/*class Option extends React.Component{
    render(){
        return(
            <div>
                <li>{this.props.title}</li>
            </div>
        );
    }
}*/

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();

            var item = e.target.elements.presentItem.value.trim();
            var error = this.props.handleAddOption(item);
            e.target.elements.presentItem.value = "";

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "presentItem" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById("app"));
