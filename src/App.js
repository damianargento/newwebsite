import React from 'react';
import './App.css';
import {FaHome} from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import {FaFile} from "react-icons/fa";

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {menuItems: [
			{title:"Home", 
			url:"#home", 
			icon:<FaHome/> },
		] }
	}
	render() {
		return(
		this.state.menuItems.map(
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
			}
		}
const MobileMenu = () => ( 	
						<div className="menuStyle menuFooter hide-desk">
						<Menu />
						</div>
						)

	const API = "http://api.weatherstack.com/current?access_key=e85eaaed9d20b339b2db9017665a8ff9&query="

class TimeApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			current: {},
			ubicacion: {},
			isLoading:false,
			userQuery: "Buenos Aires"
			}
		}

    componentDidMount() {
		this.setState({isLoading:true})
		fetch(API + this.state.userQuery)
		.then(response => response.json())
		.then(data => this.setState({ current: data.current, ubicacion: data.location, isLoading: false, }))
}
search = event => {
	this.componentDidMount();
}
handleChange = event => {
	this.setState({ userQuery: event.target.value });
  };

	render() {
		const { current } = this.state;
		const { ubicacion } = this.state;
		const { isLoading } = this.state;
		return (
				isLoading ? <div>Cargando...</div> : 
				<div>
					
				<div><img src={current.weather_icons} alt=""/></div>
				<div>{ubicacion.name}</div>
				<div>{current.temperature} °C</div>
				<input value={this.state.userQuery} onChange={this.handleChange}></input>
				<button onClick={this.search}>Search</button>
				</div>
			)
		}
	}
const App = () => (
<div className="generalDiv">
	<header className="headerStyle">
		<nav className="navStyle">
		    <div className="menuStyle hide-mob">
			   <Menu />
			</div>
		</nav>
	</header>
	<section className="App">
		<TimeApp/>
	</section>
	<MobileMenu />
</div>
);
export default App;
