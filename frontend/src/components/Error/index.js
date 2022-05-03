import { Link } from 'react-router-dom';

const ErrorContent = () => {
    return (
        <div id="rs-page-error" className="rs-page-error">
            <div className="error-text">
                <h1 className="error-code">404</h1>
                <h3 className="error-message">Page Not Found</h3>
                <form>
                    <input type="search" placeholder="Search..." name="s" className="search-input" value="" />
                    <button type="submit" value="Search"><i className="fa fa-search"></i></button>
                </form>
                <Link className="readon orange-btn" to="/" title="HOME">Back to Homepage</Link>
            </div>
        </div>
    );
}

export default ErrorContent;