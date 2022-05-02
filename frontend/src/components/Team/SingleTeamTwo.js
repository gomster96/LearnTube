import { Link } from 'react-router-dom';

const SingleTeamTwo = (props) => {
	return(
        <div className={props.itemClass}>
            <div className="images-part">
                <img 
                    src={props.teamImage} 
                    alt={props.Title}
                />
                <div className="social-icon">
                    <ul>
                        <li>
                            <Link to="#">
                                <i className="fa fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fa fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fa fa-pinterest"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fa fa-instagram"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="team-content text-center">
                <h4 className="person-name">
                    <Link to='/team/team-single'>
                        {props.Title}
                    </Link>
                </h4>
                <span className="designation">{props.Designation}</span>                
            </div>
        </div>
	)
}

export default SingleTeamTwo