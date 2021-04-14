import {Link} from "react-router-dom";
import React from 'react';
import './Home.css'; 
import Gif from '../img/productosPasando2.gif'


const Home = () =>{
	return (
		<section id="background">
			<div id="banner-divcontainer">

			<div id="banner-container">
				<div id="image-container">
					<img id="gif-img" src={Gif} alt="g"/>
				</div>
				<div id="text-button">
					<p>Juana, encuentra tus favoritos a un solo click</p>
					<Link to="/madeForYou"><button id="enter-btn">Ver más</button></Link>
				</div>
			</div>
			</div>
		</section>
	);
  }
  
export default Home;
