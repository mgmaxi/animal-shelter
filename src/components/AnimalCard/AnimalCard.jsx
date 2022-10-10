import React, { useState } from 'react';
import './animalCard.css';

import Lottie from 'lottie-react';
import celebrationCat from '../../assets/celebration-cat.json';
import confeti from '../../assets/confeti.json';
import adoptedTitle from '../../assets/images/adopted-title.png';

const AnimalCard = ({ animal, onAnimalInfo }) => {
	const [adopted, setAdopted] = useState();
	return (
		<>
			{adopted && (
				<div className="card-adopted">
					<Lottie
						animationData={celebrationCat}
						loop={true}
						className="lottie-cat"
					/>
					<Lottie animationData={confeti} loop={true} />
					<img
						src={adoptedTitle}
						alt="Cartel de adopción"
						className="adopted-title"
					/>
				</div>
			)}
			<div className="card">
				<h2>{animal.nombre[0].toUpperCase() + animal.nombre.substring(1)}</h2>
				<img
					src={animal.img}
					alt={animal.nombre}
					onClick={() => onAnimalInfo(animal)}
				/>
				<div className="card-info">
					<p>
						<span>Raza</span>
						{animal.raza[0].toUpperCase() + animal.raza.substring(1)}
					</p>
					<p>
						<span>Edad</span> {animal.edad_aprox}
					</p>
				</div>
				<button onClick={() => onAnimalInfo(animal)}>Más info</button>
				<button onClick={() => setAdopted(!adopted)}>
					{!adopted ? 'Adoptar' : 'Adoptado'}
				</button>
			</div>
		</>
	);
};

export default AnimalCard;
