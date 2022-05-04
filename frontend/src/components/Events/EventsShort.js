import React from 'react';
import { Link } from 'react-router-dom';

const EventsShort = (props) => {
    const { eventsClass, dateboxClass, catLink1, catLink2, titleClass, titleLink, animateName, animateDelay } = props;
    return (
        <div className={eventsClass ? eventsClass : 'events-short mb-30'} data-aos={animateName ? animateName : 'fade-up'} data-aos-delay={animateDelay ? animateDelay : ''}>
            <div className={dateboxClass ? dateboxClass : 'date-part bgc1'}>
                <span className="month">{props.month}</span>
                <div className="date">{props.date}</div>
            </div>
            <div className="content-part">
                <div className="categorie">
                    <Link to={catLink1 ? catLink1 : '/event/style-1'}>{props.cat1}</Link> & <Link to={catLink2 ? catLink2 : '/event/style-1'}>{props.cat2}</Link>
                </div>
                <h4 className={titleClass ? titleClass : 'title mb-0'}>
                    <a href={titleLink ? titleLink : '/event/style-1'}>{props.title}</a>
                </h4>
            </div>
        </div>
    )
}

export default EventsShort