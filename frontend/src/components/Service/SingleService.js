import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { itemClass, Icon, Title, Desc, btnText } = props;
    return (
        <div className={itemClass ? itemClass : 'service-item'}>
            <div className="content-part">
                <span className="icon-part"><i className={Icon ? Icon : 'flaticon-analysis'}></i></span>
                <h4 className="title">
                    <Link to='/course-categories'>
                        {Title ? Title : 'Online Coaching'}
                    </Link>
                </h4>
                <p className="desc">{Desc ? Desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna'}</p>
                <Link to='/course-categories' className='service-btn'>
                    {btnText ? btnText : 'Read More'} <i className="fa fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default SingleService