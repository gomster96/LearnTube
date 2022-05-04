import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/bg/home1.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`
}

const BannerDefault = () => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style1" style={bgStyle}>
                <div className="container">
                    <div className="banner-content text-center">
                        <h1 className="banner-title capitalize">Education during COVID-19 moving towards e-learning</h1>
                        <div className="desc mb-34">Every act of conscious learning requires the willingness to <br />suffer an injury to one’s self-esteem during COVID-19.</div>
                        <div className="banner-btn">
                            <Link className="readon banner-style" to="/about">Get Started Now</Link>
                        </div>
                    </div>
                </div>
            </div>            
            {/* <!-- banner section end --> */}            
        </React.Fragment>
    );
}

export default BannerDefault;