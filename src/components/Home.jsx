import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react'
import './Home.css'; 
import Gif from './productosPasando.gif'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const Home = () =>{
	const [modalIsOpen, setModalIsOpen] = useState(false)
	useEffect(()=> {
		setTimeout(function(){setModalIsOpen(true)}, 2000)

	}, [])
	return (
		<section id="background">
			<div id="banner-divcontainer">
				<div id="banner-container">
					<div id="image-container">
						<img id="gif-img" src={Gif} alt="g"/>
					</div>
					<div id="text-button">
						<p>Juana, encuentra tus favoritos a un solo click</p>
						<Link to="/madeForYou"><button id="enter-btn">Click</button></Link>
					</div>
				</div>
			</div>
			 <div className='App'>
      {/* <button onClick={() => setModalIsOpen(true)}>Open modal</button> */}
      <Modal
        isOpen={modalIsOpen}
				shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'orange'
          }
        }}
      >
        <h2>Modal title</h2>
        <div>Modal Body</div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
		</section>
	);
  }
  
export default Home;
