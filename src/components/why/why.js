import React from 'react';
import whyCss from '../why/why.css';

const why = (props) => {
    return (
        <aside className="why">
            <div>
                <img src={props.image} />
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </aside>
    );
}

export default why;