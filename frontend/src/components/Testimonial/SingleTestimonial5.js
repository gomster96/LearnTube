import {Link} from 'react-router-dom';

const SingleTestimonial5 = (props) => {
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
                    <div className="testi-name">
                        <Link href='#' className="name">{props.Title}</Link>
                    </div>
                    <span className="testi-title">
                        {props.Designation}
                    </span>
                    <div className="rating">
                        <img
                            src={props.ratingImage}
                            alt={props.Title}
                        />
                    </div>
                </div>
            </div>
            <div className="item-content-basic">
                <div className="desc">
                    {props.Description}
                    <span>
                        <img 
                            src={props.quoteImage} 
                            alt={props.Title}
                            className="quote" 
                        />
                    </span>                    
                </div>
            </div>
        </div>
	)
}

export default SingleTestimonial5