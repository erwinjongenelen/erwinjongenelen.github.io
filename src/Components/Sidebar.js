import {useEffect} from "react";
import logo from '../Assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faBook, faComments, faFileLines, faHouseChimney, faUser } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {

	useEffect(() => {
		const menuItems = document.querySelectorAll('.menu-item');
		
		window.addEventListener('scroll', (e) => {
			const scrollPosition = document.documentElement.scrollTop;
		
			menuItems.forEach( (item) => {
				const id = item.getAttribute('href').slice(1);
				const section = document.getElementById(id);
		
				if( section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition ) {
					item.classList.add('active');
				} else {
					item.classList.remove('active');
				}
			} );
		});
	});

	// Toggle sidebar
	const toggleSidebar = () => {
		const sidebar = document.getElementById('sidebar');
		const toggleButton = document.getElementById('menu-toggle-button');
		const toggleButtonIcons = toggleButton.querySelectorAll('svg');

		sidebar.classList.toggle('right-[-100px]');
		sidebar.classList.toggle('right-0');
		toggleButton.classList.toggle('right-[110px]');
		toggleButton.classList.toggle('right-[10px]');
		toggleButtonIcons.forEach( (icon) => icon.classList.toggle('hidden') );
	}

	// Close sidebar
	const closeSidebar = () => {
		const sidebar = document.getElementById('sidebar');
		const toggleButton = document.getElementById('menu-toggle-button');
		const toggleButtonIconBars = document.getElementById('menu-bars');
		const toggleButtonIconClose = document.getElementById('menu-close');

		sidebar.classList.add('right-[-100px]');
		sidebar.classList.remove('right-0');
		toggleButton.classList.remove('right-[110px]');
		toggleButton.classList.add('right-[10px]');
		toggleButtonIconBars.classList.remove('hidden');
		toggleButtonIconClose.classList.add('hidden');
	}

	return (
		<>
			<button id="menu-toggle-button" className="text-white text-2xl w-[40px] h-[50px] fixed right-[10px] top-[5px] lg:top-[10px] transition-all z-sidebar lg:hidden" onClick={toggleSidebar}>
				<FontAwesomeIcon id="menu-bars" icon={faBars} />
				<FontAwesomeIcon id="menu-close" className="hidden" icon={faXmark} />
			</button>
			<div id="topbar" className="topbar-gradient fixed top-0 left-0 h-[70px] w-full transition-all z-topbar"></div>
			<div id="sidebar" className="sidebar fixed top-0 bottom-0 w-[100px] bg-white transition-all z-sidebar right-[-100px] lg:right-0">
				<div className="inner-sidebar absolute top-0 left-0 w-full h-full flex flex-col justify-between">
					<a href="#home" className="block pt-4 px-9 pt-3 lg:pt-7 lg:px-7" onClick={closeSidebar}>
						<img className="w-full" src={logo} alt="Erwin Jongenelen" />
					</a>
					<ul className="text-center text-2xl">
						<li><a href="#home" className="menu-item block py-3 transition-all active" onClick={closeSidebar}><FontAwesomeIcon icon={faHouseChimney} /></a></li>
						<li><a href="#profile" className="menu-item block py-3 transition-all" onClick={closeSidebar}><FontAwesomeIcon icon={faUser} /></a></li>
						<li><a href="#resume" className="menu-item block py-3 transition-all" onClick={closeSidebar}><FontAwesomeIcon icon={faFileLines} /></a></li>
						<li><a href="#skills" className="menu-item block py-3 transition-all" onClick={closeSidebar}><FontAwesomeIcon icon={faBook} /></a></li>
						<li><a href="#contact" className="menu-item block py-3 transition-all" onClick={closeSidebar}><FontAwesomeIcon icon={faComments} /></a></li>
					</ul>
					<p id="copyright" className="mb-3 text-xs text-gray-500 text-center">© {new Date().getFullYear()}</p>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
