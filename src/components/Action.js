import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button onClick={props.getRandItem}>What to Do?</button>
        </div> 
    );
}

export {Action as default};