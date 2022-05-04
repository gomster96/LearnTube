import React, { Component } from 'react';
import SliderDefault from '../../components/Slider/SliderDefault';
import Categories from './CategoriesSection';
import Courses from './CoursesSection';
import Cta from './CtaSection';
import FaqSection from './FaqSection';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import ScrollToTop from '../../components/Common/ScrollTop';

class HomeMain extends Component {

	render() {

		return (
			<React.Fragment>
				{/* SliderDefault-start */}
				<SliderDefault />
				{/* SliderDefault-start */}

				{/* Categories-area-start */}
				<Categories />
				{/* Categories-area-end */}

				{/* Courses-area-start */}
				<Courses />
				{/* Courses-area-end */}

				{/* Cta-area-start */}
				<Cta />
				{/* Cta-area-end */}

				{/* FaqSection-area-start */}
				<FaqSection />
				{/* FaqSection-area-end */}

				{/* testmonial-area-start */}
				<Testimonial />
				{/* testmonial-area-end */}

				{/* blog-area-start */}
				<Blog />
				{/* blog-area-end */}

				{/* scrolltop-start */}
				<ScrollToTop
					scrollClassName="scrollup orange-color"
				/>
				{/* scrolltop-end */}

			</React.Fragment>
		);
	}
}

export default HomeMain;