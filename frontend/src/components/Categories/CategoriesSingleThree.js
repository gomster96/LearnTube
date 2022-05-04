import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSingleThree = (props) => {
    const { categoriesClass, iconImg, title, catLink, courseQuantity } = props;

    return (
        <div className={categoriesClass ? categoriesClass : 'subject-wrap bgc1'}>
            <img
                src={iconImg}
                alt={title}
            />
            <div className="content-part">
                <h4 className="title">
                    <Link to={catLink ? catLink : '/course-categories'}>
                        {title ? title : 'General Education'}
                    </Link>
                </h4>
                <span className="course-qnty">{courseQuantity ? courseQuantity : '05'} Courses</span>
            </div>
        </div>
    )
}

export default CategoriesSingleThree