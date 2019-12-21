import React from 'react';
import CommunityCss from '../community/community.css';

const community = (props) => {
    return (
        <aside className="col-md-4">
            <div style={{ backgroundImage: 'url(' + props.image + ')' }} className="community">
                <span className="highlights">{props.highlights}</span>
                <h4>{props.name}</h4>
                <span className="border"></span>
                <div className="hidden-section">
                    <p>{props.description}</p>
                    <span className="border"></span>
                    <p>{props.date}</p>
                    <p>{props.location}</p>
                </div>
            </div>
        </aside>
    );
}

export default community;