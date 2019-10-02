import React from 'react';
import './App.css';

let menuItems = [{title:"Home", url:"#home"}, {title:"Work", url:"#work"}, {title:"Articles", url:"#articles"}];
const headerStyle = { };
const navStyle = { };
const menuStyle = { width:'100%',display:'flex',flexWrap:'wrap', float:'left'};

const Menu = () => ( 
			menuItems.map(
				(item) => {return (<a href={item.url}>{item.title}</a>)}
						)
					)
const App = () => ( 
	<header style={headerStyle}>
		<nav style={navStyle}>
		    <div style={menuStyle}>
			   <Menu />
			</div>
		</nav>
	</header>
);
export default App;
