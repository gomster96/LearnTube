

const SingleTestimonialFour = (props) => {
    const { itemClass, Title, Designation, Description } = props;
    return (

        <div className={itemClass ? itemClass : 'testi-item'}>
            <div className="item-content">
                <p>{Description ? Description : 'Education is the passport to the future for tomorrow belongs to those who pre pare for it today. Sed ut perspiciatis unde omnis iste natus error sit vo luptatem. Education is the passport to the future for tomorrow belongs'}</p>
                <div className="testi-information">
                    <div className="name">{Title ? Title : 'Mahadi Mansura'}</div>
                    <span className="designation">{Designation ? Designation : 'CSE Student'}</span>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialFour