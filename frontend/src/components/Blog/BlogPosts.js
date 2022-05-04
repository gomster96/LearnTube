import React from 'react';
import Slider from "react-slick";
import SingleBlog from './SingleBlog';
import posts from '../../sample-data/blog-posts/posts.json';

import blogImg1 from '../../assets/img/blog/style2/1.jpg';
import blogImg2 from '../../assets/img/blog/style2/2.jpg';
import blogImg3 from '../../assets/img/blog/style2/3.jpg';
import blogImg4 from '../../assets/img/blog/style2/4.jpg';

const BlogPosts = () => {

    const blogSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
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
                {posts && posts.map((post, i) => (
                    <div key={i}>
                        <SingleBlog post={post} />
                    </div>
                ))}
            </Slider>
        </React.Fragment>
    );

}

export default BlogPosts;