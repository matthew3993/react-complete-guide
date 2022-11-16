import React from 'react';

import './Card.css';

const Card = (props) => { // card 'container - it is a shell around other components, it's a reusable wrapper around other components
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;