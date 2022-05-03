const SingleTestimonial7 = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="testi-content">
                <div className="item-content-basic">
                    <span>
                        <img
                            src={props.ratingImage}
                            alt={props.Title}
                        />
                    </span>
                    <p>{props.Description}</p>
                </div>
                <div className="testi-information">
                    <div className="img-part">
                        <img
                            src={props.authorImage}
                            alt={props.Title}
                        />
                    </div>
                    <div className="testi-content">
                        <div className="testi-name">{props.Title}</div>
                        <span className="testi-title">{props.Designation}</span>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default SingleTestimonial7