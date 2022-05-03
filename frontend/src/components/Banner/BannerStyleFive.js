import React from 'react';
import { Link } from 'react-router-dom';

import bannerImg from '../../assets/img/banner/home7/img-1.png';
import bgImg from '../../assets/img/banner/home7/banner-bg.jpg';
import shapeIcon1 from '../../assets/img/banner/home7/icon/1.png';
import shapeIcon2 from '../../assets/img/banner/home7/icon/2.png';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-size': 'cover',
    'background-position': 'center',
    'position': 'relative'
}



const BannerStyleFive = () => {
    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style7" style={bgStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 relative">
                            <div className="banner-content">
                                <h1 className="banner-title white-color">Develop a Passion For Learning</h1>
                                <div className="desc white-color mb-50">
                                    Every act of conscious learning requires the willingness to suffer an injury 
                                    to one’s self-esteem. That is why young children 
                                </div>
                                <div className="btn-part">
                                    <Link className="readon border-less" to="/about">Get Started Now</Link>
                                </div>
                            </div>
                            <div className="icons one up-down">
                                <img src={shapeIcon2} alt="Images" />
                            </div> 
                            <div className="icons two left-right">
                                <img src={shapeIcon1} alt="Images" />
                            </div> 
                            <div className="icons three left-right">
                                <img src={shapeIcon1} alt="Images" />
                            </div> 
                            <div className="icons four up-down">
                                <img src={shapeIcon2} alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-part">
                   <img src={bannerImg} alt="Banner Image" />
               </div>
            </div>         
            {/* <!-- banner section end --> */}            
        </React.Fragment>
    );
}

export default BannerStyleFive;