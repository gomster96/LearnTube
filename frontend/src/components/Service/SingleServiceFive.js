import React from 'react';
import { Link } from 'react-router-dom';

const SingleServiceFive = (props) => {
    const { itemClass, btnClass } = props;
    return (
        <div className={itemClass ? itemClass : 'services-item'}>
            <div className="services-icon">
                <div className="image-part">
                    <img
                        className="main-img"
                        src={props.MainImg}
                        alt={props.Title}
                    />
                    <img
                        className="hover-img"
                        src={props.HoverImg}
                        alt={props.Title}
                    />
                </div>
            </div>
            <div className="services-content">
                <div className="services-text">
                    <h3 className="title">
                        <Link to='/course-categories'>
                            {props.Title}
                        </Link>
                    </h3>
                </div>
                <div className="services-desc">
                    <p>{props.Text}</p>
                </div>
                <div className={btnClass ? btnClass : 'services-button'}>
                    <Link to='/course-categories'>
                        {props.serviceBtn}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleServiceFive