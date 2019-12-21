import React from 'react';
import Community from '../community/community';
import CommunityCss from '../communityList/community.css';

const CommunityList = (props) => {
    return (
        <section className="community-section">
            <h1 className="text-center heading">{props.sectionData.heading}</h1>
            <p className="text-center sub-heading">{props.sectionData.subHeading}</p>
            <div className="container">
                <div className="row">
                    {props.sectionData.communites.map((element, index) => {
                        return <Community
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
            </div>
        </section>
    );
}

export default CommunityList;