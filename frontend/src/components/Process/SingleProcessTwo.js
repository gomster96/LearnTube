import Link from 'react-router-dom';

const SingleProcessTwo = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="number-text">
                <div className={props.prefixClass}>{props.prefix}</div>
                <div className="number-title">
                    <h3 className={props.titleClass}>{props.Title}</h3>
                </div>
                <p className={props.descClass}>{props.Description}</p>
            </div>
        </div>
	)
}

export default SingleProcessTwo