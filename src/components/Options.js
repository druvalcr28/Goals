import React from 'react';
import Option from './Option';

/*const Options = (props) => {
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
}*/
//Both notations can be used in case of stateless functional components
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget-message">Please add an option to continue!</p>}
        <ol>
            {
                props.options.map( (item,index) => <Option key={item} title={item} handleRemoveItem={props.handleRemoveItem} /> )
            }
        </ol>
    </div>
);

export {Options as default};