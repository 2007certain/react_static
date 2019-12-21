import React from 'react';
import FeatureCss from '../feature/feature.css';

const feature = (props) => {
    return (
        <aside className="feature">
            <div>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <img src={props.image} />
            </div>
        </aside>
    );
}

export default feature;