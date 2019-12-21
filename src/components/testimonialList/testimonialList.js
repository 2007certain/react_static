import React from 'react';
import Testimonial from '../testimonial/testimonial';

const TestimonialList = (props) => {
    return (
        <section className="testimonial-section">
            <div className="testimonialBG">
                <h1 className="text-center heading">{props.sectionData.heading}</h1>
                <p className="text-center sub-heading">{props.sectionData.subHeading}</p>
                <div className="testimonial-list">
                    {props.sectionData.users.map((element, index) => {
                        return <Testimonial
                            image={element.image}
                            name={element.name}
                            designation={element.designation}
                            content={element.content}
                            quoteIcon={element.quoteIcon}
                            key={index}
                        />
                    })}
                </div>
            </div>
        </section>
    );
}

export default TestimonialList;