import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div id="rs-page-error" className="rs-page-error coming-soon">
            <div className="error-text">
                <h1 className="error-code">Coming Soon</h1>
                <h3 className="error-message">Stay Connected</h3>
                <Link className="readon orange-btn" to="/" title="HOME">Back to Homepage</Link>
            </div>
        </div>
    );
}

export default ComingSoon;