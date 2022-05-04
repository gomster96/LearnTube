import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { itemClass, serviceImage, Title, Desc } = props;
    return (
        <div className={itemClass ? itemClass : 'services-wrap bg1'}>
            <div className="services-item">
                <div className="services-icon">
                    <img
                        src={serviceImage}
                        alt={Title}
                    />
                </div>
                <div className="services-desc">
                    <h3 className="title">
                        <Link to='/course-categories'>
                            {Title ? Title : 'Web Development'}
                        </Link>
                    </h3>
                    <p>
                        {Desc ? Desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleService