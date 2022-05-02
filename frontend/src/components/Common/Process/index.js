const SingleProcess = (props) => {
	return(
        <div className="rs-addon-number">
            <div className="number-text">
                <div className="number-area">
                    {props.processNumber}.
                </div>
                <div className="number-title">
                    <h3 className="title">{props.processTitle}</h3>
                </div>
                <p className="number-txt">{props.processText}</p>
            </div>
        </div>
	)
}

export default SingleProcess