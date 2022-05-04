import React from 'react';
import CoursePartClosed from './CourseSectionClosed';
import ScrollToTop from '../../components/Common/ScrollTop';


const CourseMainClosed = () => {

    return (
        <React.Fragment>

            {/* CoursePart Start */}
            <CoursePartClosed />
            {/* CoursePart End */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default CourseMainClosed;