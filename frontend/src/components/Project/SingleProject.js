import {Link} from 'react-router-dom';

const SingleProject = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="project-img">
                <Link href={'/case-study/style-1'}>
                    <a>
                        <img 
                            src={props.projectImage} 
                            alt={props.Title}
                        />
                    </a>
                </Link>
            </div>
            <div className="project-content">
                <h3 className="title">
                    <Link href={'/case-study/style-1'}>
                        <a>{props.Title}</a>
                    </Link>
                </h3>
                <span className="category">                    
                    <Link href='#'>
                        <a>{props.Category}</a>
                    </Link>
                </span>
            </div>
        </div>
	)
}

export default SingleProject