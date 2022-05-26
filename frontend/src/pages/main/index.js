import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import OffWrap from "../../components/Layout/Header/OffWrap";
import SearchModal from "../../components/Layout/Header/SearchModal";
//import HeaderStyleThree from '../../components/Layout/Header/HeaderStyleThree';
import Header from "../../components/Layout/Header/Header";
import FooterStyleTwo from "../../components/Layout/Footer/FooterStyleTwo";
import HomeFiveMain from "./HomeFiveMain";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import favIcon from "../../assets/img/fav.png";
//import Logo from '../../assets/img/logo/logo3.png';
import Logo from "../../assets/img/logo/Learntube-logos_transparent.png";
import stickyLogo from "../../assets/img/logo/logo.png";
import darkLogo from "../../assets/img/logo/logo-dark.png";
import smallDeviceLogo from "../../assets/img/logo/logo-dark2.png";

function HomeFive(props) {
    const location = useLocation();

    const [userId, SetUserId] = useState("");

    useEffect(() => {
        const uid = 0;
        if (location.state) {
            const uid = location.state.userId;
            console.log("uid", uid);
            SetUserId(uid);
            console.log("userId", userId);
        }
    }, [userId]);
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                userId={userId}
                parentMenu="main"
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                // headerNormalLogo={Logo}
                // headerStickyLogo={stickyLogo}
                // CanvasLogo={darkLogo}
                // responsiveLogo={smallDeviceLogo}
                // CanvasClass="right_menu_togle hidden-md"
                // headerClass="full-width-header header-style3 modify"
                // TopBarClass="topbar-area dark-parimary-bg"
                // mobileNormalLogo={Logo}
            />
            <HomeFiveMain userId={userId} />
            <FooterStyleTwo />
            <SearchModal />
        </React.Fragment>
    );
}

export default HomeFive;
