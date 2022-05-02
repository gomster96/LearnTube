import React from 'react';
import { Link } from 'react-router-dom';

const TopHeaderTwo = (props) => {
	const { topBarClass, emailAddress, phoneNumber, Location } = props;

    return (
        <div className={topBarClass ? topBarClass : "topbar-area home8-topbar hidden-md"}>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-md-5">
                        <ul className="topbar-contact">
                            {emailAddress ? 
                                <li>
                                    <i className="flaticon-email"></i>
                                    <a href={'mailto:' + emailAddress}>{emailAddress}</a>
                                </li> : ""
                            }
                            {phoneNumber ? 
                                <li>
                                    <i className="flaticon-call"></i>
                                    <a href={'tel:+' + phoneNumber}>{phoneNumber}</a>
                                </li> : ""
                            }                            
                        </ul>
                    </div>
                    <div className="col-md-7 text-end">
                        <div className="toolbar-sl-share">
                            <ul>
                                {Location ? 
                                    <li className="opening"> <em>
                                        <i className="flaticon-location"></i></em>
                                        {Location}
                                    </li> : ""
                                }
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeaderTwo;