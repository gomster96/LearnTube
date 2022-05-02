import { Link } from 'react-router-dom';

const SingleServiceFlipTwo = (props) => {
    return (
        <div className={props.itemClass}>
            <div className="flip-box-wrap">
                <div className="front-part">
                    <div className="front-content-part">
                        <div className="front-icon-part">
                            <div className="icon-part">
                                <img
                                    src={props.serviceImage}
                                    alt={props.Title}
                                />
                            </div>
                        </div>
                        <div className="front-title-part">
                            <h3 className="title">{props.Title}</h3>
                        </div>
                        <div className="front-desc-part">
                            <p>
                                {props.TextDesc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="back-front">
                    <div className="back-front-content">
                        <div className="back-title-part">
                            <h3 className="back-title">
                                <Link to='/course-categories'>
                                    {props.Title}
                                </Link>
                            </h3>
                        </div>
                        <div className="back-desc-part">
                            <p className="back-desc">
                                {props.TextDesc}
                            </p>
                        </div>
                        <div className="back-btn-part">
                            <Link to='/course-categories' className={props.ButtonClass}> {props.ButtonText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleServiceFlipTwo