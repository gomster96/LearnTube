import React from 'react';
import CourseDetailsPart from './CourseDetailsPart';
import ScrollToTop from '../../../components/Common/ScrollTop';

const CourseDetailsMain = () => {

    return (
        <React.Fragment>
            
            {/* CourseDetails Start */}
            <CourseDetailsPart />
            {/* CourseDetails End */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default CourseDetailsMain;