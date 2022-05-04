import {Link} from 'react-router-dom';

const SingleProjectThree = (props) => {
    return (
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
                <p className="category">
                    <Link to='#'>
                        {props.Category}
                    </Link>
                </p>
                <h3 className="title mb-0">
                    <Link to='/case-study/style-1'>
                        {props.Title}
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default SingleProjectThree