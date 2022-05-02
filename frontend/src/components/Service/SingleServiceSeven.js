import { Link } from 'react-router-dom';

const SingleServiceFour = (props) => {
    const { serviceClass, serviceImg, serviceTitle, serviceDesc, catLink } = props
    return (
        <div className={serviceClass ? serviceClass : 'services-item'}>
            <div className="services-image">
                <div className="services-icons">
                    <img
                        src={serviceImg}
                        alt={serviceTitle}
                    />
                </div>
                <div className="services-text">
                    <div className="services-title">
                        <h2 className="title">
                            <Link to={catLink ? catLink : '/course-categories'}>{serviceTitle ? serviceTitle : 'Web Development'}</Link>
                        </h2>
                    </div>
                    <p className="text">{serviceDesc ? serviceDesc : 'Lorem ipsum dolor sit amet, conseced tetur adipiscing elit, sed do eiusmod tempor dolore magna mere jan '}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleServiceFour