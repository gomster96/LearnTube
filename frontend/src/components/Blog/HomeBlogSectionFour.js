import React from 'react';
import Slider from "react-slick";
import SinglePostFour from './SinglePostFour';

import blogImg1 from '../../assets/img/blog/style2/1.jpg';
import blogImg2 from '../../assets/img/blog/style2/2.jpg';
import blogImg3 from '../../assets/img/blog/style2/3.jpg';
import blogImg4 from '../../assets/img/blog/style2/4.jpg';

const BlogPartFour = () => {


    const blogSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <Slider {...blogSettings}>
                <SinglePostFour
                    blogImage={blogImg1}
                    blogAuthor="admin"
                    categoryClass="categories uppercase color-bg3"
                    blogCategory='University'
                    blogPublishedDate='June 15, 2019'
                    blogTitle='Open Source Job Report Show More Openings Fewer'
                />
                <SinglePostFour
                    blogImage={blogImg2}
                    blogAuthor="admin"
                    categoryClass="categories uppercase color-bg1"
                    blogCategory='Primary'
                    blogPublishedDate='August 12, 2021'
                    blogTitle='Modern School The Lovely Valley Team Work'
                />
                <SinglePostFour
                    blogImage={blogImg3}
                    blogAuthor="admin"
                    blogCategory='Primary'
                    blogPublishedDate='May 5, 2020'
                    categoryClass="categories uppercase color-bg1"
                    blogTitle='High School Program Starting Soon 2021'
                />
                <SinglePostFour
                    blogImage={blogImg4}
                    blogAuthor="admin"
                    categoryClass="categories uppercase color-bg2"
                    blogCategory='High School'
                    blogPublishedDate='March 23, 2020'
                    blogTitle='While The Lovely Valley Team Work'
                />
            </Slider>
        </React.Fragment>
    );

}

export default BlogPartFour;