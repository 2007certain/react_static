import React from 'react';

const image = (props) => {
    return (
        <img src={props.src} className={props.cssClass} />
    )
}

export default image;