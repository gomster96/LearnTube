import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSingleFour = (props) => {
    const { categoriesClass, categoriesImg, catLink, categoriesIcon, categoriesTitle, categoriesDesc, btnText } = props;

    return (
        <div className={categoriesClass ? categoriesClass : 'categories-items'}>
            <div className="categories-items">
                <div className="images-part">
                    <Link to={catLink ? catLink : '/course-categories'}>
                        <img src={categoriesImg} alt="" />
                    </Link>
                </div>
                <div className="image-content">
                    <div className="effect-icon">
                        <i className={categoriesIcon ? categoriesIcon : 'fa fa-paperclip'}></i>
                    </div>
                    <div className="title">
                        <Link to={catLink ? catLink : '/course-categories'}>{categoriesTitle ? categoriesTitle : 'Undergraduate Programs'}</Link>
                    </div>
                    <div className="description">
                        <p>{categoriesDesc ? categoriesDesc : 'Arts, business, health, science and more, begin your journey with a program educavo.'}</p>
                    </div>
                    <div className="button-bottom">
                        <div className="button-effect">
                            <Link to={catLink ? catLink : '/course-categories'}>{btnText ? btnText : 'Join Program'}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesSingleFour