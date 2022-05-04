import React from 'react';
import { Link } from 'react-router-dom';

import topImg from '../../assets/img/banner/bnr3-top.png';
import bgImg from '../../assets/img/bg/home3.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover',
    'background-position': 'center',
    'height': '100vh',
    'display': 'grid',
    'align-items': 'center',
}



const BannerStyleTwo = () => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style3" style={bgStyle}>
                <div className="container pt-90 md-pt-50">
                    <div className="banner-content pb-12">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1 className="banner-title white-color">People Expect to be Bored eLearning.</h1>
                                <div className="banner-desc white-color">Every act of conscious learning requires the willingness to suffer an  injury to one’s self-esteem.</div>
                                <ul className="banner-btn">
                                    <li><Link className="readon3" to="/about">Get Started</Link></li>
                                    <li><Link className="readon3 active" to="/about">Read More</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner-image hidden-md">
                            <div id="stuff">
                                <div data-depth="0.3">
                                    <img src={topImg} alt="Top Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
            {/* <!-- banner section end --> */}            
        </React.Fragment>
    );
}

export default BannerStyleTwo;