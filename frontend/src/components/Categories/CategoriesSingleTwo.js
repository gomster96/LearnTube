import React from 'react';
import { Link } from 'react-router-dom'

const CategoriesSingleTwo = (props) => {
    const { categoriesClass, iconImg, catLink, title, courseQuantity } = props;

    return (
        <Link className={categoriesClass ? categoriesClass : 'categories-item'} to={catLink ? catLink : '/course-categories'}>
            <div className="icon-part">
                <img
                    src={iconImg}
                    alt={title}
                />
            </div>
            <div className="content-part">
                <h4 className="title">{title ? title : 'General Education'}</h4>
                <span className="courses">{courseQuantity ? courseQuantity : '05'} Courses</span>
            </div>
        </Link>
    )
}

export default CategoriesSingleTwo