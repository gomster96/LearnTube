import React from 'react';
import { Link } from 'react-router-dom';

const DegreeSingle = (props) => {
    const { itemClass, titleClass, titleClass2, descClass, btnText } = props;

    return (
        <div className={itemClass ? itemClass : 'degree-wrap'}>
            <img
                src={props.itemImage}
                alt={props.title}
            />
            <div className="title-part">
                <h4 className={titleClass ? titleClass : 'title'}>{props.title}</h4>
            </div>
            <div className="content-part">
                <h4 className={titleClass2 ? titleClass2 : 'title'}><Link to="/course/course-single">{props.title}</Link></h4>
                <p className={descClass ? descClass : 'desc'}>{props.desc}</p>
                <div className="btn-part">
                    <Link to="/course/course-single">{btnText ? btnText : 'Read More'}</Link>
                </div>
            </div>
        </div>
    )
}

export default DegreeSingle