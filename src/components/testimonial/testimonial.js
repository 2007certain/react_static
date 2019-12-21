import React from 'react';
import testimonialCss from '../testimonial/testimonial.css';

import Image from '../image/image'

const testimonial = (props) => {
    return (
        <aside className="testimonial">
            <div>
                <Image src={props.image} cssClass={''} />
                <h4>{props.name}</h4>
                <p className="designation">{props.designation}</p>
                <p>{props.content}</p>
                <Image src={props.quoteIcon} cssClass={'quote-icon'} />
            </div>
        </aside>
    );
}

export default testimonial;