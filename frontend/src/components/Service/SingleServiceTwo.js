import { Link } from 'react-router-dom';

const SingleServiceTwo = (props) => {
    return (
        <div className={props.itemClass}>
            <div className="services-icon">
                <img
                    className="main-img"
                    src={props.mainImage}
                    alt={props.Title}
                />
            </div>
            <div className="content-part">
                <img
                    className="icon-img"
                    src={props.iconImage}
                    alt="Icon Image"

                />
                <h4 className="title">
                    <Link to='/about-2'>
                        {props.Title}
                    </Link>
                </h4>
            </div>
        </div>
    )
}

export default SingleServiceTwo