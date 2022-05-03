const SingleServiceFour = (props) => {
	return(
        <div className="services-item">
            <div className="services-wrap">
                <div className="services-icon">
                    <img 
                        src={props.serviceIcon} 
                        alt={props.Title}
                    />
                </div>
                <div className="services-text">
                    <h3 className="title">{props.Title}</h3>
                </div>
            </div>
        </div>
	)
}

export default SingleServiceFour