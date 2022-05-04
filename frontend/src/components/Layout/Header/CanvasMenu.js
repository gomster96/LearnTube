import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import galleryLogo1 from '../../../assets/img/gallery/1.jpg';
import galleryLogo2 from '../../../assets/img/gallery/2.jpg';
import galleryLogo3 from '../../../assets/img/gallery/3.jpg';
import galleryLogo4 from '../../../assets/img/gallery/4.jpg';
import galleryLogo5 from '../../../assets/img/gallery/5.jpg';
import galleryLogo6 from '../../../assets/img/gallery/6.jpg';
import mapImg from '../../../assets/img/map.jpg';

const photos = [
    {
        src: galleryLogo1,
        width: 1,
        height: 1
    },
    {
        src: galleryLogo2,
        width: 1,
        height: 1
    },
    {
        src: galleryLogo3,
        width: 1,
        height: 1
    },
    {
        src: galleryLogo4,
        width: 1,
        height: 1
    },
    {
        src: galleryLogo5,
        width: 1,
        height: 1
    },
    {
        src: galleryLogo6,
        width: 1,
        height: 1
    }
];

const CanvasMenu = (props) => {
    const { canvasClass, canvasLogo } = props;

    const canvasMenuRemove = () => {
        document.body.classList.remove('nav-expanded');
    };


    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <React.Fragment>
            <nav className={canvasClass}>
                <div className="close-btn">
                    <div onClick={canvasMenuRemove} id="nav-close">
                        <div className="line">
                            <span className="line1"></span><span className="line2"></span>
                        </div>
                    </div>
                </div>
                <div className="canvas-logo">
                    <Link to="/"><img src={canvasLogo} alt="logo" /></Link>
                </div>
                <div className="offcanvas-text">
                    <p>We denounce with righteous indige nationality and dislike men who are so beguiled and demo  by the charms of pleasure of the moment data com so blinded by desire.</p>
                </div>
                <div className="offcanvas-gallery">
                    <Gallery
                        photos={photos}
                        onClick={openLightbox}

                    />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
                <div className="map-img">
                    <img src={mapImg} alt="" />
                </div>
                <div className="canvas-contact">
                    <ul className="social">
                        <li>
                            <a href="#"><i className="fa fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default CanvasMenu;