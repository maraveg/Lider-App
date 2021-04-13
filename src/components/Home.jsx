import {Link} from "react-router-dom";
import React from 'react';
import './Home.css'; 
import Gif from './ProductosPasando.gif'
const Home = () =>{
	return (
		<section id="background">
			<div id="banner-container">
				<div id="image-container">
					<img id="gif-img" src={Gif} alt="g"/>
				</div>
				<div id="text-button">
					<p>Juana, encuentra tus favoritos a un solo click</p>
					<Link to="#"><button id="enter-btn">Click</button></Link>
				</div>
			</div>
		</section>
	);
  }
  
export default Home;