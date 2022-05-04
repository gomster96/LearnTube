import React from 'react';
import { Link } from 'react-router-dom';

const SingleEventThree = (props) => {
    const { eventClass, eventImg, eventLocation, eventDate, eventSchedule, eventTitle, eventDesc } = props;
    return (
        <div className={eventClass ? eventClass : 'event-item'}>
            <div className="event-short">
                <div className="featured-img">
                    <img src={eventImg} alt="Image" />
                </div>
                <div className="content-part">
                    <h4 className="title"><Link to="/event/style-1">{eventTitle ? eventTitle : 'Educational Technology and Mobile Learning'}</Link></h4>
                    {eventDesc ?
                        <p className="text">
                            {eventDesc}
                        </p> : ''
                    }
                    <div className="address"><i className="fa fa-map-o"></i> {eventLocation ? eventLocation : 'New Margania'}</div>
                    {
                        eventDate ?
                            <div className="date-part">
                                <div className="date">
                                    <i className="fa fa-calendar-check-o"></i>
                                    {eventDate}
                                </div>
                            </div> : ''
                    }

                    {eventSchedule ?
                        <div className="time">
                            <i className="fa fa-clock-o"></i>
                            {eventSchedule}
                        </div> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleEventThree