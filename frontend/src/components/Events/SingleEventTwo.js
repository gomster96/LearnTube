import React from 'react';
import { Link } from 'react-router-dom';

const SingleEventTwo = (props) => {
    const { eventClass, eventImg, eventLocation, eventDate, eventSchedule, eventTitle, eventDesc } = props;
    return (
        <div className={eventClass ? eventClass : 'event-item'}>
            <div className="event-item">
                <div className="event-short">
                    <div className="featured-img">
                        <img src={eventImg} alt="Image" />
                        <div className="dates">
                            {eventDate ? eventDate : 'July 24, 2020'}
                        </div>
                    </div>
                    <div className="content-part">
                        <h4 className="title"><Link to="/event/style-1">{eventTitle ? eventTitle : 'Educational Technology and Mobile Learning'}</Link></h4>{
                            eventDesc ?
                                <p className="text">
                                    {eventDesc}
                                </p> :
                                ''
                        }
                        <div className="time-sec">
                            {eventSchedule ?
                                <div className="timesec">
                                    <i className="fa fa-clock-o"></i>
                                    {eventSchedule}
                                </div> :
                                ''
                            }

                            <div className="address"><i className="fa fa-map-o"></i> {eventLocation ? eventLocation : 'New Margania'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEventTwo