import React from 'react';
import './App.css';
import {FaHome} from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import {FaFile} from "react-icons/fa";


let menuItems = [
			{title:"Home", 
			url:"#home", 
			icon:<FaHome/> },

			{title:"Work", 
			url:"#work",
			icon:<FaPencilAlt/>}, 

			{title:"Articles",
			url:"#articles",
			icon:<FaFile />
			}
		];

const headerStyle = { };

const Menu = () => ( 
		menuItems.map(
				(item,i) => {return (
				<a href={item.url} key={i} align="center">
						<span className="hide-desk">
							{item.icon}
							</span>
							<span className="hide-mob">
							{item.title}
						</span> 
				</a>)}
						) 
					)
const MobileMenu = () => ( 	
						<div className="menuStyle menuFooter hide-desk">
						<Menu />
						</div>
						)
					
const App = () => (
<div className="generalDiv">
	<header style={headerStyle}>
		<nav className="navStyle">
		    <div className="menuStyle hide-mob">
			   <Menu />
			</div>
		</nav>
	</header>
	<MobileMenu />
</div>
);
export default App;
