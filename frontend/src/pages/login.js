import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Newsletter from "../components/Common/Newsletter";
import ScrollToTop from "../components/Common/ScrollTop";
import OffWrap from "../components/Layout/Header/OffWrap";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import SearchModal from "../components/Layout/Header/SearchModal";

// Image
import favIcon from "../assets/img/fav-orange.png";
import Logo from "../assets/img/logo/dark-logo.png";
import footerLogo from "../assets/img/logo/lite-logo.png";

import bannerbg from "../assets/img/breadcrumbs/inner7.jpg";

export default function Login() {
  const history = useHistory();
  const [g_data, g_setData] = useState(null);
  const [userData, setUserData] = useState({ userId: "", name: "", email: "" });
  const [userId, setUserId] = useState(null);

  // const google = <FontAwesomeIcon icon={faGoogle} size="10x" />;

  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_ID}&
response_type=token&
redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&
scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  };

  const logout = () => {
    setUserId(null);
    window.sessionStorage.clear();
    window.sessionStorage.removeItem("userId");
    window.location.assign("/learntube");
  };

  useEffect(async () => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (hash) {
      const accessToken = hash.split("=")[1].split("&")[0];
      await axios
        .get(
          "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
            accessToken,
          {
            headers: {
              authorization: `token ${accessToken}`,
              accept: "application/json",
            },
          }
        )
        .then((data) => {
          console.log(data);
          g_setData(data.data);
          // console.log(g_data);
          // console.log(g_data.name);
          // console.log(g_data.email);
          let body = {
            name: data.data.name,
            email: data.data.email,
          };

          axios
            .post(
              `${process.env.REACT_APP_SERVER_URL}/api/login`,
              JSON.stringify(body),
              {
                headers: {
                  "Content-Type": `application/json`,
                },
              }
            )
            .then((res) => {
              // console.log(res);
              console.log("post", res.data);
              setUserData(res.data);
              // console.log("userData", userData);
            });
        })
        .catch((e) => console.log("oAuth token expired"));
    }
  }, []);

  useEffect(() => {
    if (userData.userId) {
      window.sessionStorage.setItem("userId", userData.userId);
      setUserId(window.sessionStorage.getItem("userId"));
      console.log("local userid ", userId);
    }
  }, [userData]);

  useEffect(() => {
    if (userData.userId) {
      history.push({
        pathname: "/learntube/dashboard",
        state: { userId: userData.userId },
      });
    }
  }, [userData.userId]);

  return (
    <>
      {window.sessionStorage.getItem("userId") === null ? (
        <button
          id="oAuthBtn"
          onClick={oAuthHandler}
          className="readon2 banner-style mr-2"
        >
          Sign In
        </button>
      ) : (
        <button
          id="logoutBtn"
          onClick={logout}
          className="readon2 banner-style mr-2"
        >
          Logout
        </button>
      )}
    </>
  );
  // return (
  //     <React.Fragment>
  //         <Helmet>
  //             <link rel="icon" href={favIcon} />
  //         </Helmet>
  //         <OffWrap />
  //         <Header
  //             parentMenu='pages'
  //             secondParentMenu='others'
  //             headerNormalLogo={Logo}
  //             headerStickyLogo={Logo}
  //             CanvasLogo={Logo}
  //             mobileNormalLogo={Logo}
  //             CanvasClass="right_menu_togle hidden-md"
  //             headerClass="full-width-header header-style1 home8-style4"
  //             TopBar='enable'
  //             TopBarClass="topbar-area home8-topbar"
  //             emailAddress='support@website.com'
  //             Location='374 William S Canning Blvd, MA 2721, USA '
  //         />

  //         {/* breadcrumb-area-start */}
  //         <SiteBreadcrumb
  //             pageTitle="Login"
  //             pageName="Login"
  //             breadcrumbsImg={bannerbg}
  //         />
  //         {/* breadcrumb-area-End */}

  //         {/* Login Part Start */}
  //         <div className="rs-login pt-100 pb-100 md-pt-80 md-pb-80">
  //             <div className="container">
  //                 <div className="noticed">
  //                     <div className="main-part">
  //                         <div className="method-account">
  //                             <h2 className="login">Login</h2>
  //                             <form>
  //                                 <input type="email" name="E-mail" placeholder="E-mail" required />
  //                                 <input type="text" name="text" placeholder="Password" required />
  //                                 <button type="submit" className="readon submit-btn">login</button>
  //                                 <div className="last-password">
  //                                     <p>Not registered? <Link to="/learntube/register">Create an account</Link></p>
  //                                 </div>
  //                             </form>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //         {/* Login Part End */}

  //         <Newsletter
  //             sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
  //             titleClass="title mb-0 white-color"
  //         />

  //         <Footer
  //             footerClass="rs-footer home9-style main-home"
  //             footerLogo={footerLogo}
  //         />

  //         {/* scrolltop-start */}
  //         <ScrollToTop
  //             scrollClassName="scrollup orange-color"
  //         />
  //         {/* scrolltop-end */}

  //         <SearchModal />
  //     </React.Fragment>

  // );
}
