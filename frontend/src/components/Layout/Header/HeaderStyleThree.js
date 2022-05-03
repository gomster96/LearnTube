import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import RSMobileMenu from './RSMobileMenu';
import CanvasMenu from './CanvasMenu';
import TopHeader from './TopBar';

import darkLogo from '../../../assets/img/logo/dark-logo.png';
import normalLogo from '../../../assets/img/logo/logo-dark.png';
import responsiveLogo from '../../../assets/img/logo/logo-dark2.png'

import productImg1 from '../../../assets/img/shop/1.jpg';
import productImg2 from '../../../assets/img/shop/2.jpg';


const HeaderStyleThree = (props) => {
	const { headerClass, parentMenu, secondParentMenu, activeMenu, headerNormalLogo, headerStickyLogo, mobileNormalLogo, TopBar, TopBarClass, CanvasLogo, CanvasClass } = props;
	const [menuOpen, setMenuOpen] = useState(false)

	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const searchModalAdd = () => {
		document.body.classList.add('modal-open');
	};

	const canvasMenuAdd = () => {
		document.body.classList.add('nav-expanded');
	};

	// categories btn
	const catBtn = () => {
		document.body.classList.toggle('catBtnEnable');
	};

	return (
		<React.Fragment>
			<div className={headerClass ? headerClass : 'full-width-header header-style3 modify'}>
				<header id="rs-header" className='rs-header'>
					{
						TopBar ? <TopHeader topBarClass={TopBarClass} /> : ""
					}

					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="logo-part hidden-md">
							<Link to="/">
								<a className="light-logo">
									<img src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" />
								</a>
							</Link>
							<Link to="/">
								<a className="small-logo">
									<img src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" />
								</a>
							</Link>
						</div>
						<div className="container">
							<div className="logo-cat-wrap">
								<div className="categories-btn">
									<button onClick={catBtn} type="button" className="cat-btn"><i className="fa fa-th"></i>Categories</button>
									<div className="cat-menu-inner">
										<ul id="cat-menu">
											<li><Link to="/course-categories">Category 1</Link></li>
											<li><Link to="/course-categories">Category 2</Link></li>
											<li><Link to="/course-categories">Category 3</Link></li>
											<li><Link to="/course-categories">Category 4</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="rs-menu-area">
								<div className="main-menu">
									<div className="mobile-menu md-display-block">
										<Link to="/" className="mobile-normal-logo">
											<img className="normal-logo" src={mobileNormalLogo ? mobileNormalLogo : normalLogo} alt="" />
										</Link>
										<Link to="/" className="mobile-sticky-logo">
											<img src={darkLogo} alt="logo" />
										</Link>
										<a href="#" className="rs-menu-toggle" onClick={() => {
											setMenuOpen(!menuOpen)
										}}>
											<i className="fa fa-bars"></i>
										</a>
									</div>
									<nav className="rs-menu hidden-md">
										<ul className="nav-menu">
											<MenuItems
												parentMenu={parentMenu}
												secondParentMenu={secondParentMenu}
												activeMenu={activeMenu}
											/>
										</ul>
									</nav>
								</div>
								<div className="expand-btn-inner">
									<ul className="expand-items">
										<li className="icon-bar cart-inner mini-cart-active">
											<a className="cart-icons" href="#"><i className="fa fa-shopping-bag"></i></a>
											<div className="woocommerce-mini-cart text-start">
												<div className="cart-bottom-part">
													<ul className="cart-icon-product-list">
														<li className="display-flex">
															<div className="icon-cart">
																<Link to="#"><i className="fa fa-times"></i></Link>
															</div>
															<div className="product-info">
																<Link to="/shop/cart">Law Book</Link><br />
																<span className="quantity">1 × $30.00</span>
															</div>
															<div className="product-image">
																<Link to="/shop/cart"><img src={productImg1} alt="Product Image" /></Link>
															</div>
														</li>
														<li className="display-flex">
															<div className="icon-cart">
																<Link to="#"><i className="fa fa-times"></i></Link>
															</div>
															<div className="product-info">
																<Link to="/shop/cart">Spirit Level</Link><br />
																<span className="quantity">1 × $30.00</span>
															</div>
															<div className="product-image">
																<Link to="/shop/cart"><img src={productImg2} alt="Product Image" /></Link>
															</div>
														</li>
													</ul>

													<div className="total-price text-center">
														<span className="subtotal">Subtotal:</span>
														<span className="current-price">$85.00</span>
													</div>

													<div className="cart-btn text-center">
														<Link className="crt-btn btn1" to="/shop/cart">View Cart</Link>
														<Link className="crt-btn btn2" to="/shop/checkout">Check Out</Link>
													</div>
												</div>
											</div>
										</li>
										<li className="sidebarmenu-search">
											<a onClick={searchModalAdd} className="rs-search" href="#">
												<i className="flaticon-search"></i>
											</a>
										</li>
										<li>
											<Link className="apply-btn" to="/contact">Apply Now</Link>
										</li>
									</ul>
									<span>
										<a onClick={canvasMenuAdd} id="nav-expander" className="nav-expander style5" href="#">
											<span className="bar">
												<span className="dot1"></span>
												<span className="dot2"></span>
												<span className="dot3"></span>
											</span>
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
						parentMenu={parentMenu}
						secondParentMenu={secondParentMenu}
					/>
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
				</header>
				<CanvasMenu
					canvasClass={CanvasClass ? CanvasClass : "right_menu_togle orange_color hidden-md"}
					canvasLogo={CanvasLogo ? CanvasLogo : darkLogo}
				/>
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleThree;