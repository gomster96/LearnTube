import React from 'react';
import CoursePartAdmin from './CourseSectionAdmin';
import ScrollToTop from '../../components/Common/ScrollTop';


const CourseMainAdmin = () => {

    return (
        <React.Fragment>

            {/* CoursePart Start */}
            <CoursePartAdmin />
            {/* CoursePart End */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default CourseMainAdmin;