import { Link } from "react-router-dom";

const SingleTeam = (props) => {
    const { teamClass, Image, Title, Designation } = props;
    return (
        <div className={teamClass ? teamClass : "team-item"}>
            <img src={Image} alt={Title} />
            <div className="content-part">
                <h4 className="name">
                    <Link to="/learntube/team/team-single">{Title ? Title : "Jhon Pedrocas"}</Link>
                </h4>
                <span className="designation">{Designation ? Designation : "Professor"}</span>
                <ul className="social-links">
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
    );
};

export default SingleTeam;
