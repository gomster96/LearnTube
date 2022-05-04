import React from 'react';
import Tilty from 'react-tilty';
import BlogPartFive from '../../components/Blog/HomeBlogSectionFive';
import SectionTitle from '../../components/Common/SectionTitle';
import NewsletterTwo from '../../components/Common/Newsletter/NewsletterTwo';

import shapeImg from '../../assets/img/shape/radius-circle-shape.png';

const Blog = () => {
    return (
        <React.Fragment>
            <div id="rs-blog" className="rs-blog style2 pb-100 md-pb-70">
                <div className="container relative">
                    <div className="right-top-shape">
                        <Tilty perspective="800" reverse={true}>
                            <img
                                src={shapeImg}
                                alt="Shape Image"
                            />
                        </Tilty>
                    </div>
                    <SectionTitle
                        sectionClass="sec-title mb-60 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle="News Update"
                        titleClass="title mb-0"
                        title="Latest News & events"
                    />
                    <BlogPartFive />
                </div>
            </div>
            <NewsletterTwo />
        </React.Fragment>
    );

}

export default Blog;