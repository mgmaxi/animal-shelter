import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import AnimalsGrid from '../components/AnimalsGrid/AnimalsGrid';
import Footer from '../components/Footer/Footer';
import HelpUs from '../components/HelpUs/HelpUs';
import AboutUs from '../components/AboutUs/AboutUs';
import banner from '../assets/images/banner-adopt.png';
import Navbar from '../components/Navbar/Navbar';
import './home.css';

const Home = () => {
	return (
		<>
			<main>
				<Navbar />
				<Carousel />
				<AboutUs />
				<img src={banner} alt="Banner" className="banner-adopt" />
				<AnimalsGrid />
				<HelpUs />
			</main>
			<Footer />
		</>
	);
};

export default Home;
