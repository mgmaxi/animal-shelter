import React from 'react';
import './aboutUs.css';

import footprints from '../../assets/icons/footprints-black.png';
import cat2 from '../../assets/icons/cat2.png';

const AboutUs = () => {
	return (
		<section className="about-us">
			<h2>
				Quiénes Somos
				<img src={footprints} alt="Footprints" className="footprints-title" />
				<img src={cat2} alt="Cat" className="cat2" />
			</h2>
			<p>
				Fundación "El Refugio 4 Patas" es una organización sin fines de lucro
				que nace el año 1991 con el propósito de dar solución a la problemática
				de Bienestar Animal y Tenencia Responsable de Mascotas y Animales de
				Compañía en Argentina. Contamos con un equipo de voluntarios profesional
				y multidisciplinario, comprometido con el logro de nuestra misión. Uno
				de nuestros sellos principales como organización consiste en el trabajo
				colaborativo que llevamos junto con actores del entorno, vecinos y
				vecinas del sector, municipalidades, establecimientos educacionales y
				organizaciones sociales.
			</p>
			<img src={footprints} alt="Footprints" className="footprints-left" />
			<img src={footprints} alt="Footprints" className="footprints-left2" />
		</section>
	);
};

export default AboutUs;
