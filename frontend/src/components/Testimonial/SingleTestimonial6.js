import Link from 'react-router-dom';

const SingleTestimonial6 = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="testi-content">
                <div className="images-wrap">
                    <img
                        src={props.authorImage}
                        alt={props.Title}
                    />
                </div>
                <div className="testi-information">
                    <p>{props.Description}</p>
                    <div className="testi-name">
                        {props.Title}
                    </div>
                    <span className="testi-title">
                        {props.Designation}
                    </span>
                </div>
            </div>
        </div>
	)
}

export default SingleTestimonial6