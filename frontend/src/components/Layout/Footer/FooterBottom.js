import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-10">
                        <div className="copyright md-mb-0">
                            <p>
                                © 2022 All Rights Reserved. Designed By{" "}
                                <a href="#" target="_blank">
                                    WALAB
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end md-text-left">
                        <ul className="copy-right-menu">
                            <li>
                                <Link to="/learntube/event" as="/learntube/event">
                                    Event
                                </Link>
                            </li>
                            <li>
                                <Link to="/learntube/blog" as="/learntube/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/learntube/contact" as="/learntube/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
