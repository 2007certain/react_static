import React from 'react';
import Why from '../why/why';

const WhyList = (props) => {
    return (
        <section className="why-section">
            <h1 className="text-center heading">{props.sectionData.heading}</h1>
            <p className="text-center sub-heading">{props.sectionData.subHeading}</p>
            <div className="why-list">
                {props.sectionData.whyData.map((element, index) => {
                    return <Why
                        image={element.image}
                        name={element.name}
                        description={element.description}
                        date={element.date}
                        location={element.location}
                        highlights={element.highlights}
                        key={index}
                    />
                })}
            </div>
        </section>
    );
}

export default WhyList;