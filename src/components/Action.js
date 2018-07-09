import React from 'react';

const Action = (props) => (
    <div>
        <button className="big-button" disabled={props.length === 0} onClick={props.getRandItem}>What Should I Do?</button>
    </div> 
);




export {Action as default};