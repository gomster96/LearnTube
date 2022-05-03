import React from 'react';
import CoursePart from './CourseSection';
import ScrollToTop from '../../components/Common/ScrollTop';


const CourseMain = () => {

    return (
        <React.Fragment>

            {/* CoursePart Start */}
            <CoursePart />
            {/* CoursePart End */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default CourseMain;