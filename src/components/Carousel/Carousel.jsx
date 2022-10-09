import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../data.json';
import { Autoplay, Parallax, EffectFade } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css';
import './carousel.css';

const Carousel = () => {
	return (
		<div className="carousel-container">
			<Swiper
				autoplay
				speed={2500}
				parallax={true}
				effect="fade"
				modules={[Autoplay, Parallax, EffectFade]}
			>
				{data.map(animal => (
					<SwiperSlide key={animal.id}>
						<div className="carousel-content-container">
							<h2 className="carousel-animal-name">{animal.nombre}</h2>
							<p className="carousel-animal-info">
								{animal.caracter[0][0].toUpperCase() +
									animal.caracter[0].substring(1)}
							</p>
							<img
								src={animal.img}
								alt={animal.nombre}
								className="caroulse-img"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
