import React from 'react';

import AnimalCard from '../AnimalCard/AnimalCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import './animalsGrid.css';
import data from '../../data.json';

const AnimalsGrid = () => {
	return (
		<Swiper
			grid={{
				rows: 2,
			}}
			spaceBetween={30}
			navigation
			modules={[Grid, Navigation]}
			className="swiper-container animal-swiper-container"
			breakpoints={{
				500: {
					width: 500,
					slidesPerView: 1,
				},
				768: {
					width: 768,
					slidesPerView: 2,
				},
				980: {
					width: 980,
					slidesPerView: 3,
				},
				1100: {
					width: 1100,
					slidesPerView: 4,
				},
			}}
		>
			{data.map(animal => (
				<SwiperSlide className="animal-swiper">
					<AnimalCard animal={animal} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default AnimalsGrid;
