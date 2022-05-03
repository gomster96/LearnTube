import { useEffect, useState } from "react";

const ScrollToTop = (props) => {
	const { scrollClassName } = props;
	
  	const [isVisible, setIsVisible] = useState(false);

  	// Top: 0 takes us all the way back to the top of the page
  	// Behavior: smooth keeps it smooth!
  	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
  	};

  	useEffect(() => {
    	// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

  	return (
		<div className={ scrollClassName ? scrollClassName : 'scrollup'}>
			{isVisible && (
				<div onClick={scrollToTop}>
					<i className="fa fa-angle-up"></i>
				</div>
			)}
		</div>
  	);
}

export default ScrollToTop