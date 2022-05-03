import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RSMobileMenu = ({ setMenuOpen, menuOpen, parentMenu, secondParentMenu, headerFullWidth }) => {

	const location = useLocation();

	const [home, setHome] = useState(false)
	const [about, setAbout] = useState(false)
	const [course, setCourse] = useState(false)
	const [pages, setPages] = useState(false)
	const [team, setTeam] = useState(false)
	const [event, setEvent] = useState(false)
	const [gallery, setGallery] = useState(false)
	const [shop, setShop] = useState(false)
	const [otherPages, setOtherPages] = useState(false)
	const [blog, setBlog] = useState(false)
	const [blogSidebar, setBlogSidebar] = useState(false)
	const [blogSingle, setBlogSingle] = useState(false)
	const [contact, setContact] = useState(false)

	const openMobileMenu = menu => {

		if (menu === 'home') {
			setHome(!home)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'about') {
			setHome(false)
			setAbout(!about)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'course') {
			setHome(false)
			setAbout(false)
			setCourse(!course)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'pages') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(!pages)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'team') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(!team)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'event') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(!event)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'gallery') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(false)
			setGallery(!gallery)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'shop') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(!shop)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'otherPages') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(true)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(!otherPages)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'blog') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(!blog)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'blogSidebar') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(true)
			setBlogSidebar(!blogSidebar)
			setBlogSingle(false)
			setContact(false)
		}
		else if (menu === 'blogSingle') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(true)
			setBlogSidebar(false)
			setBlogSingle(!blogSingle)
			setContact(false)
		}
		else if (menu === 'contact') {
			setHome(false)
			setAbout(false)
			setCourse(false)
			setPages(false)
			setTeam(false)
			setEvent(false)
			setGallery(false)
			setShop(false)
			setOtherPages(false)
			setBlog(false)
			setBlogSidebar(false)
			setBlogSingle(false)
			setContact(!contact)
		}
	};

	return (
		<div className={headerFullWidth ? "container-fluid relative" : "container relative"}>
			<div className={menuOpen ? "mobile-menu-part open" : "mobile-menu-part"}>
				<div className="mobile-menu">
					<ul className="nav-menu">
						<li className={home ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('home'); }} className={parentMenu === 'home' ? 'active-menu' : ''}>Home</Link>
							<ul className={home ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link to="/" className={location.pathname === "/" ? "active-menu" : ""}>Main Demo</Link>
								</li>
								<li>
									<Link to="/home-2" className={location.pathname === "/home-2" ? "active-menu" : ""}>Online Course</Link>
								</li>
								<li>
									<Link to="/home-3" className={location.pathname === "/home-3" ? "active-menu" : ""}>University 01</Link>
								</li>
								<li>
									<Link to="/home-4" className={location.pathname === "/home-4" ? "active-menu" : ""}>E-Learning</Link>
								</li>
								<li>
									<Link to="/home-5" className={location.pathname === "/home-5" ? "active-menu" : ""}>Distance Learning</Link>
								</li>
								<li>
									<Link to="/home-6" className={location.pathname === "/home-6" ? "active-menu" : ""}>Personal Demo</Link>
								</li>
								<li>
									<Link to="/home-7" className={location.pathname === "/home-7" ? "active-menu" : ""}>Online Training</Link>
								</li>
								<li>
									<Link to="/home-8" className={location.pathname === "/home-8" ? "active-menu" : ""}>Online Learning</Link>
								</li>
								<li>
									<Link to="/home-10" className={location.pathname === "/home-10" ? "active-menu" : ""}>University 02</Link>
								</li>
								<li>
									<Link to="/home-12" className={location.pathname === "/home-12" ? "active-menu" : ""}>Freelancing Course</Link>
								</li>
								<li>
									<Link to="/home-14" className={location.pathname === "/home-14" ? "active-menu" : ""}>Courses Archive</Link>
								</li>
								<li>
									<Link to="/home-9" className={location.pathname === "/home-9" ? "active-menu" : ""}>Coming Soon</Link>
								</li>
								<li>
									<Link to="/home-11" className={location.pathname === "/home-11" ? "active-menu" : ""}>Coming Soon</Link>
								</li>
								<li>
									<Link to="/home-13" className={location.pathname === "/home-13" ? "active-menu" : ""}>Coming Soon</Link>
								</li>
								<li>
									<Link to="/home-15" className={location.pathname === "/home-15" ? "active-menu" : ""}>Coming Soon</Link>
								</li>
							</ul>
						</li>
						<li className={about ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('about'); }} className={parentMenu === 'about' ? 'active-menu' : ''}>About</Link>
							<ul className={about ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link to="/about" className={location.pathname === "/about" ? "active-menu" : ""}>About One</Link>
								</li>
								<li>
									<Link to="/about-2" className={location.pathname === "/about-2" ? "active-menu" : ""}>About Two</Link>
								</li>
							</ul>
						</li>
						<li className={course ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('course'); }} className={parentMenu === 'course' ? 'active-menu' : ''}>Course</Link>
							<ul className={course ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link to="/course" className={location.pathname === "/course" ? "active-menu" : ""}>Courses One</Link>
								</li>
								<li>
									<Link to="/course-2" className={location.pathname === "/course-2" ? "active-menu" : ""}>Courses Two</Link>
								</li>
								<li>
									<Link to="/course-3" className={location.pathname === "/course-3" ? "active-menu" : ""}>Courses Three</Link>
								</li>
								<li>
									<Link to="/course-4" className={location.pathname === "/course-4" ? "active-menu" : ""}>Courses Four</Link>
								</li>
								<li>
									<Link to="/course-5" className={location.pathname === "/course-5" ? "active-menu" : ""}>Courses Five</Link>
								</li>
								<li>
									<Link to="/course-6" className={location.pathname === "/course-6" ? "active-menu" : ""}>Courses Six</Link>
								</li>
								<li>
									<Link to="/course/course-single" className={location.pathname === "/course/course-single" ? "active-menu" : ""}>Courses Single</Link>
								</li>
							</ul>
						</li>
						<li className={pages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('pages'); }} className={parentMenu === 'pages' ? 'active-menu' : ''}>Pages</Link>
							<ul className={pages ? "sub-menu current-menu" : "sub-menu"}>
								<li className={team ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('team'); }} className={secondParentMenu === 'team' ? 'active-menu' : ''}>Team</Link>
									<ul className={team ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/team" className={location.pathname === "/team" ? "active-menu" : ""}>Team One</Link>
										</li>
										<li>
											<Link to="/team-2" className={location.pathname === "/team-2" ? "active-menu" : ""}>Team Two</Link>
										</li>
										<li>
											<Link to="/team/team-single" className={location.pathname === "/team/team-single" ? "active-menu" : ""}>Team Single</Link>
										</li>
									</ul>
								</li>
								<li className={event ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('event'); }} className={secondParentMenu === 'event' ? 'active-menu' : ''}>Event</Link>
									<ul className={event ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/event" className={location.pathname === "/event" ? "active-menu" : ""}>Event One</Link>
										</li>
										<li>
											<Link to="/event-2" className={location.pathname === "/event-2" ? "active-menu" : ""}>Event Two</Link>
										</li>
										<li>
											<Link to="/event-3" className={location.pathname === "/event-3" ? "active-menu" : ""}>Event Three</Link>
										</li>
									</ul>
								</li>
								<li className={gallery ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('gallery'); }} className={secondParentMenu === 'gallery' ? 'active-menu' : ''}>Gallery</Link>
									<ul className={gallery ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/gallery" className={location.pathname === "/gallery" ? "active-menu" : ""}>Gallery One</Link>
										</li>
										<li>
											<Link to="/gallery-2" className={location.pathname === "/gallery-2" ? "active-menu" : ""}>Gallery Two</Link>
										</li>
										<li>
											<Link to="/gallery-3" className={location.pathname === "/gallery-3" ? "active-menu" : ""}>Gallery Three</Link>
										</li>
									</ul>
								</li>
								<li className={shop ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('shop'); }} className={secondParentMenu === 'shop' ? 'active-menu' : ''}>Shop</Link>
									<ul className={shop ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/shop" className={location.pathname === "/shop" ? "active-menu" : ""}>Shop</Link>
										</li>
										<li>
											<Link to="/shop/shop-single" className={location.pathname === "/shop/shop-single" ? "active-menu" : ""}>Shop Single</Link>
										</li>
										<li>
											<Link to="/shop/cart" className={location.pathname === "/shop/cart" ? "active-menu" : ""}>Cart</Link>
										</li>
										<li>
											<Link to="/shop/checkout" className={location.pathname === "/shop/checkout" ? "active-menu" : ""}>Checkout</Link>
										</li>
									</ul>
								</li>
								<li className={otherPages ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('otherPages'); }} className={secondParentMenu === 'others' ? 'active-menu' : ''}>Others</Link>
									<ul className={otherPages ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/faq" className={location.pathname === "/faq" ? "active-menu" : ""}>FAQ</Link>
										</li>
										<li>
											<Link to="/error" className={location.pathname === "/error" ? "active-menu" : ""}>404 Page</Link>
										</li>
										<li>
											<Link to="/login" className={location.pathname === "/login" ? "active-menu" : ""}>Login</Link>
										</li>
										<li>
											<Link to="/register" className={location.pathname === "/register" ? "active-menu" : ""}>Register</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li className={blog ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('blog'); }} className={parentMenu === 'blog' ? 'active-menu' : ''}>Blog</Link>
							<ul className={blog ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link to="/blog" className={location.pathname === "/blog" ? "active-menu" : ""}>Blog</Link>
								</li>
								<li className={blogSidebar ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('blogSidebar'); }} className={secondParentMenu === 'blogSidebar' ? 'active-menu' : ''}>Blog Sidebar</Link>
									<ul className={blogSidebar ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/blog/blog-left-sidebar" className={location.pathname === "/blog/blog-left-sidebar" ? "active-menu" : ""}>Blog Left Sidebar</Link>
										</li>
										<li>
											<Link to="/blog/blog-right-sidebar" className={location.pathname === "/blog/blog-right-sidebar" ? "active-menu" : ""}>Blog Right Sidebar</Link>
										</li>
									</ul>
								</li>
								<li className={blogSingle ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
									<Link to="#" onClick={() => { openMobileMenu('blogSingle'); }} className={secondParentMenu === 'blogSingle' ? 'active-menu' : ''}>Blog Single</Link>
									<ul className={blogSingle ? "sub-menu current-menu" : "sub-menu"}>
										<li>
											<Link to="/blog/blog-post-sidebar" className={location.pathname === "/blog/post-left-sidebar" ? "active-menu" : ""}>Post Left Sidebar</Link>
										</li>
										<li>
											<Link to="/blog/post-right-sidebar" className={location.pathname === "/blog/post-right-sidebar" ? "active-menu" : ""}>Post Right Sidebar</Link>
										</li>
										<li>
											<Link to="/blog/post-full-width" className={location.pathname === "/blog/post-full-width" ? "active-menu" : ""}>Full Width Post</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li className={contact ? "menu-item-has-children current-menu-item" : "menu-item-has-children"}>
							<Link to="#" onClick={() => { openMobileMenu('contact'); }} className={parentMenu === 'contact' ? 'active-menu' : ''}>Contact</Link>
							<ul className={contact ? "sub-menu current-menu" : "sub-menu"}>
								<li>
									<Link to="/contact" className={location.pathname === "/contact" ? "active-menu" : ""}>Contact One</Link>
								</li>
								<li>
									<Link to="/contact-2" className={location.pathname === "/contact-2" ? "active-menu" : ""}>Contact Two</Link>
								</li>
								<li>
									<Link to="/contact-3" className={location.pathname === "/contact-3" ? "active-menu" : ""}>Contact Three</Link>
								</li>
								<li>
									<Link to="/contact-4" className={location.pathname === "/contact-4" ? "active-menu" : ""}>Contact Four</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RSMobileMenu;