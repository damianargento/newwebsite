import React from 'react';
import './App.css';

let menuItems = [{title:"Home", url:"#home"}, {title:"Work", url:"#work"}, {title:"Articles", url:"#articles"}];
const headerStyle = { };
const navStyle = { };

const Menu = () => ( 
			menuItems.map(
				(item,i) => {return (<a href={item.url} key={i}>{item.title}</a>)}
						)
					)
const App = () => ( 
	<header style={headerStyle}>
		<nav style={navStyle}>
		    <div className="menuStyle">
			   <Menu />
			</div>
		</nav>
	</header>
);
export default App;
