import React from 'react';
import Slider from "react-slick";
import SinglePost from './SinglePost';

import blogImg1 from '../../assets/img/blog/style2/1.jpg';
import blogImg2 from '../../assets/img/blog/style2/2.jpg';
import blogImg3 from '../../assets/img/blog/style2/3.jpg';
import blogImg4 from '../../assets/img/blog/style2/4.jpg';

const BlogPart = () => {

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
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg1}
                    blogCategory= 'University'
                    blogTitle = 'Majority of students dissatisfied for world coronavirus support'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogPublishedDate = '20 December 2020'
                />
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg2}
                    blogCategory= 'School'
                    blogTitle = 'University class starting soon while the lovely valley team'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogPublishedDate = '22 December 2020'
                />
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg3}
                    blogCategory= 'Primary'
                    blogTitle = 'How universities can nurture for the world climate crisis'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogPublishedDate = '26 December 2020'
                />
                <SinglePost 
                    blogClass = 'blog-item'
                    blogImage = {blogImg4}
                    blogCategory= 'College'
                    blogTitle = 'Oxford vaccine trial resumes in UK after being halted'
                    blogDesc = 'We denounce with righteous indige nation and dislike men who are so beguiled...'
                    blogPublishedDate = '28 December 2020'
                />
            </Slider>
        </React.Fragment>
    );

}

export default BlogPart;