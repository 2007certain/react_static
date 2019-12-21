import React from 'react';
import Feature from '../feature/feature';

const FeatureList = (props) => {
    return (
        <section className="feature-section">
            <h1 className="text-center heading">{props.sectionData.heading}</h1>
            <p className="text-center sub-heading">{props.sectionData.subHeading}</p>
            <div className="feature-list">
                {props.sectionData.features.map((element, index) => {
                    return <Feature
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

export default FeatureList;