import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={props.length === 0} onClick={props.getRandItem}>What to Do?</button>
    </div> 
);




export {Action as default};