import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { Helmet } from 'react-helmet';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
import OffWrap from '../../../components/Layout/Header/OffWrap';
import SearchModal from '../../../components/Layout/Header/SearchModal';
import ContentWidget from '../../../components/Widget/ContentWidget';
import favIcon from '../../../assets/img/fav-orange.png';
import Logo from '../../../assets/img/logo/Learntube-logos_transparent.png';
import footerLogo from '../../../assets/img/logo/lite-logo.png';

const Content = (props) => {
    
    const [classRoomData, setClassRoomData] = useState();
    const initCreatePlaylist = {
        title: "",
        description: "",
        tag: "",
    };


    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);
    const [createPlaylist, setCreatePlaylist] = useState(initCreatePlaylist);
    const [createResponse, setCreateResponse] = useState();

    const handleChange = (e) => {
        setCreatePlaylist({
            ...createPlaylist,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = async () => {
        console.log(JSON.stringify(createPlaylist));
    }
    const {state} = useLocation();
    const cid = state.classId;
    console.log(cid);
    useEffect(() => {
        console.log(cid);
        const fetchClassRoom = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8080/api/classroom?userId=1&classId={$cid}`
            );
            console.log(response.data);
            setClassRoomData(response.data);
          } catch (err) {
            console.log("err >> ", err);
          }
        };
        fetchClassRoom();
      }, []);

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='learntube'
                secondParentMenu='event'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
            />


            <div className="rs-event orange-style pb-100 md-pb-80">
                <div className="container">

                    <div class="container text-center dashboard-tabs">
                        <div className="intro-info-tabs border-none row">
                            <div className="col-lg-12 col-md-12">
                                <div className="widget-area">
                                    <ContentWidget className={classRoomData.className} lectureNum={1} content={classRoomData.lectures[0].contents}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            <SearchModal />
        </React.Fragment>
    );
}

export default Content