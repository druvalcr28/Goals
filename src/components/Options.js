import React from 'react';
import Option from './Option';

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

export {Options as default};