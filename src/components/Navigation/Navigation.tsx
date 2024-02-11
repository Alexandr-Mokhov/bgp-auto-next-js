"use client"
// import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
// import { resetScroll } from '../../utils/resetScroll';
import './Navigation.css';

export default function Navigation() {
	// const [navMenu, setNavMenu] = useState(false);
	const pathname = usePathname();
	const navMenu = false;

	// useEffect(() => {
	// 	if (!navMenu) return;
	// function handleClickOverlay(evt: MouseEvent) {
	// 	if (evt.target.className.indexOf('navigation__overlay') === 0) {
	// 		setNavMenu(!navMenu);
	// 	}
	// }
	// document.addEventListener('mousedown', handleClickOverlay);
	// return () => {
	// 	document.removeEventListener('mousedown', handleClickOverlay);
	// }
	// }, [navMenu])

	// useEffect(() => {
	// 	setNavMenu(false);
	// }, [pathname]);

	return (
		<div className="navigation">
			<button className={
				`navigation__button-menu
          ${navMenu ? "navigation__button-menu_close" : "navigation__button-menu_open"}
          `} />
			<nav className={`navigation__container ${!navMenu && "navigation__container_hide"}`}>
				<ul className="navigation__links">
					<li>
						<Link href="/about-as"
							className={`navigation__link ${pathname === "/about-as" && "navigation__link_active"}`}
						>О НАС</Link>
					</li>
					<li>
						<Link href="/services"
							className={`navigation__link ${pathname === "/services" && "navigation__link_active"}`}
						>УСЛУГИ</Link>
					</li>
					<li>
						<Link href="/prices"
							className={`navigation__link ${pathname === "/prices" && "navigation__link_active"}`}
						>ПРАЙС</Link>
					</li>
					<li>
						<Link href="/promotions"
							className={`navigation__link ${pathname === "/promotions" && "navigation__link_active"}`}
						>АКЦИИ</Link>
					</li>
					<li>
						<Link href="/blog"
							className={`navigation__link ${pathname === "/blog" && "navigation__link_active"}`}
						>БЛОГ</Link>
					</li>
					<li>
						<Link href="/contacts"
							className={`navigation__link ${pathname === "/contacts" && "navigation__link_active"}`}
						>КОНТАКТЫ</Link>
					</li>
					{navMenu &&
						<li>
							<Link href="/address"
								className={`navigation__link ${pathname === "/address" && "navigation__link_active"}`}
							>АДРЕС</Link>
						</li>}
				</ul>
			</nav>
			<div className={`${navMenu && "navigation__overlay"}`} />
		</div>
	)
}