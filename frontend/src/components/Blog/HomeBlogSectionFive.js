import React from 'react';
import Slider from "react-slick";
import SinglePostThree from './SinglePostThree';

import blogImg1 from '../../assets/img/blog/style2/1.jpg';
import blogImg2 from '../../assets/img/blog/style2/2.jpg';
import blogImg3 from '../../assets/img/blog/style2/3.jpg';
import blogImg4 from '../../assets/img/blog/style2/4.jpg';

const BlogPartFive = () => {


    const blogSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
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
                <SinglePostThree
                    blogClass='blog-item'
                    contentClass="blog-content primary-border new-style2"
                    blogImage={blogImg1}
                    blogTitle='High School Program Starting Soon 2021'
                    blogDesc='the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling'
                    blogPublishedDate='June 15, 2019'
                    cmtQnty="15"
                />
                <SinglePostThree
                    blogClass='blog-item'
                    contentClass="blog-content primary-border new-style2"
                    blogImage={blogImg2}
                    blogTitle='University While The Lovely Valley Team Work'
                    blogDesc='the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling'
                    blogPublishedDate='22 May 2020'
                    cmtQnty="20"
                />
                <SinglePostThree
                    blogClass='blog-item'
                    contentClass="blog-content primary-border new-style2"
                    blogImage={blogImg3}
                    blogTitle='Modern School The Lovely Valley Team Work'
                    blogDesc='the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling'
                    blogPublishedDate='26 October 2020'
                    cmtQnty="29"
                />
                <SinglePostThree
                    blogClass='blog-item'
                    contentClass="blog-content primary-border new-style2"
                    blogImage={blogImg4}
                    blogTitle='Modern School The Lovely Valley Team Work'
                    blogDesc='the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling'
                    blogPublishedDate='28 July 2020'
                    cmtQnty="22"
                />
            </Slider>
        </React.Fragment>
    );

}

export default BlogPartFive;