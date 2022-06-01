import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Tilty from "react-tilty";
import AOS from "aos";

import wave from "../../assets/img/banner/banner-line.png";
import circle from "../../assets/img/banner/banner-circle.png";
import dots from "../../assets/img/banner/banner-dots.png";
import bgImg from "../../assets/img/bg/home4.jpg";
import Login from "../../pages/login";
const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    "background-size": "cover",
    "background-position": "center",
    height: "100vh",
    display: "grid",
    "align-items": "center",
};

const BannerStyleFour = ({ onGoogleLogin }) => {
    useEffect(() => {
        AOS.init();
    });
    const clientId = "485474785684-amktf48tlk2utjc83ttboi2dlftm1280.apps.googleusercontent.com";

    const onSuccess = async (response) => {
        console.log(response);

        const {
            googleId,
            profileObj: { email, name },
        } = response;

        await onGoogleLogin({
            socialId: googleId,
            socialType: "google",
            email,
            nickname: name,
        });
    };

    const onFailure = (error) => {
        console.log(error);
    };

    return (
        <React.Fragment>
            {/* <!-- banner section start --> */}
            <div id="rs-banner" className="rs-banner style4" style={bgStyle}>
                <div className="container relative">
                    <div className="row relative">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="banner-line-shape">
                                <Tilty perspective={100}>
                                    <img src={wave} alt="" data-aos="flip-left" data-aos-duration="3000" />
                                </Tilty>
                            </div>
                            <div className="banner-content pb-14">
                                <h1 className="banner-title white-color" data-aos="fade-left" data-aos-duration="1000">
                                    LearnTube
                                </h1>
                                <h2 className=" white-color" data-aos="fade-left" data-aos-duration="1000">
                                    YouTube 영상을 활용한 학습 지원 서비스
                                </h2>
                                <div className="desc white-color mb-40" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                                    YouTube에서 원하는 영상을 검색하고, 선택하여 학습 컨텐츠를 생성해보세요. <br /> 여러 강의실을 구경하고 수강신청하세요.
                                </div>
                                <div className="banner-btn z-index-1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                                    {/* <Link className="readon2 banner-style" to="/learntube/login"> */}
                                    {/* <button className="readon2 banner-style"> */}
                                    {/* <Login /> */}
                                    {/* Sign In */}
                                    {/* </button> */}
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div className="banner-circle-shape">
                                <Tilty>
                                    <img className="rotateme" src={circle} alt="" />
                                </Tilty>
                            </div>
                        </div>
                    </div>
                    <div className="banner-dots-shape">
                        <Tilty>
                            <img src={dots} alt="" />
                        </Tilty>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
        </React.Fragment>
    );
};

export default BannerStyleFour;
