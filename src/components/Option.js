import React from 'react'; //Because all of the jsx element gets converted into React.createElement().

const Option = (props) => {
    return (
        <div>
            <li>{props.title}</li>
            <button onClick={() => props.handleRemoveItem(props.title)}>Remove Item</button>
        </div>  
    );
}

export {Option as default}; //Not an object.