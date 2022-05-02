import React from 'react';
import { Link } from 'react-router-dom';

import postImage from '../../assets/img/blog/inner/1.jpg';
import innerImage from '../../assets/img/blog/inner/2.jpg';

const PostContent = ({ }) => {
    return (
        <div className="blog-deatails">
            <div className="bs-img">
                <img
                    src={postImage}
                    alt="Post Image"
                />
            </div>
            <div className="blog-full">
                <ul className="single-post-meta">
                    <li>
                        <span className="p-date"> <i className="fa fa-calendar-check-o"></i> April 6, 2022 </span>
                    </li>
                    <li>
                        <span className="p-date"> <i className="fa fa-user-o"></i> Admin </span>
                    </li>
                    <li className="Post-cate">
                        <div className="tag-line">
                            <i className="fa fa-book"></i>
                            <Link to="/blog">Strategy</Link>
                        </div>
                    </li>
                    <li className="post-comment"> <i className="fa fa-comments-o"></i> 0</li>
                </ul>
                <div className="blog-desc">
                    <p>
                        We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                    </p>
                </div>
                <blockquote><p>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.</p></blockquote>
                <div className="blog-desc mb-40">
                    <p>
                        Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets. Globally incubate standards compliant channels before scalable benefits.
                    </p>
                </div>
                <h2 className="title mb-40">Economy may face double recession</h2>
                <div className="blog-desc mb-34">
                    <p>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                    </p>
                </div>
                <div className="blog-img mb-40">
                    <img
                        src={innerImage}
                        alt=""
                    />
                </div>
                <div className="blog-desc mb-40">
                    <p>
                        Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric “outside the box” thinking. Completely pursue scalable customer service through sustainable potentialities. Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.
                    </p>
                </div>
                <ul className="unorder-list mb-20">
                    <li>New Construction Benefit of Service</li>
                    <li>Renovations Benefit of Service</li>
                    <li>Historic Renovations and Restorations</li>
                    <li>Additions Benefit of Service</li>
                    <li>Rebuilding from fire or water damage</li>
                </ul>
                <h2 className="title">Experts Always Ready to Maximizing Products</h2>
                <div className="blog-desc">
                    <p>
                        Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                    </p>
                </div>
                <h4 className="sm-title">Experts Always Ready to Maximizing Products</h4>
                <div className="blog-desc">
                    <p>
                        Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets. Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostContent;