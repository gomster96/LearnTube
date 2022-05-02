import { Link } from 'react-router-dom';

const SingleServiceThree = (props) => {
    const { serviceClass, serviceImg, serviceIcon, Title, Desc } = props;
    return (
        <div className={serviceClass ? serviceClass : 'services-item'}>
            <div className="img-part">
                <img src={serviceImg} alt="images" />
            </div>
            <div className="content-part">
                <div className="icon-part mb-30 md-mb-15">
                    <img src={serviceIcon} alt="images" />
                </div>
                <h4 className="title">
                    <Link to='/course-categories'>
                        {Title ? Title : 'Kindergarten'}
                    </Link>
                </h4>
                <p className="desc">{Desc ? Desc : 'Lorem ipsum dolor sit amet,consectetur adipisic ing elit, sed eius .incididunt'}</p>
            </div>
        </div>
    )
}

export default SingleServiceThree