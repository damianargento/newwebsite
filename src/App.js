import React from 'react';
import './App.css';

const alturasArray = [1,100,200,300,400];

const liStyle = { fontSize: '10px',
				listStyleType:'none',
				color:'#bebebe',
				fontFamily:'Arial, sans-serif',}

const divStyle= { display:'inline-flex', justifyContent:'space-around', alignSelf:'center', flexWrap:'wrap'}

const alturas = alturasArray.map((altura,i) => <p key={i}>{altura}</p>);

const Street = ({name,alturas}) => {return (<div><h1>{name}</h1><div style={liStyle}>{alturas}</div></div>)};

const App = () => ( 
	<div style={divStyle}>
	<Street name="Congreso" alturas={alturas} />
	<Street name="Arribe&ntilde;os" alturas={alturas} />
	<Street name="Libertador"  alturas={alturas} />
	<Street name="Cabildo" alturas={alturas} />
	</div>
);
export default App;
