import Link from 'react-router-dom';

const SingleTestimonial8 = (props) => {
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
                    <div className="testi-name">{props.Title}</div>
                    <span className="testi-title">{props.Designation}</span>
                    <div className="ratings">                        
                        <img
                            src={props.ratingImage}
                            alt={props.Title}
                        />
                    </div>
                </div>
            </div>
            <div className="item-content">
                <p>{props.Description}</p>
            </div>
        </div>
	)
}

export default SingleTestimonial8