import Link from 'react-router-dom';

const SingleProcess = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="process-img">
                <img
                    src={props.processImage}
                    alt={props.Title}
                />
            </div>
            <div className="process-text">
                <h3 className={props.titleClass}>{props.Title}</h3>
            </div>
        </div>
	)
}

export default SingleProcess