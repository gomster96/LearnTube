import {Link} from 'react-router-dom';

const SingleProjectTwo = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="project-img">
                <Link to='/case-study/style-1'>
                    <img 
                        src={props.projectImage} 
                        alt={props.Title}
                    />
                </Link>                
            </div>
            <div className="project-content">
                <div className="portfolio-inner">
                    <h3 className="title">
                        <Link to='/case-study/style-1'>
                            {props.Title}
                        </Link>
                    </h3>
                    <span className="category">                        
                        <Link to='#'>
                            {props.Category}
                        </Link>
                    </span>
                </div>
            </div>
        </div>
	)
}

export default SingleProjectTwo