import React from 'react';
import './animalInfo.css';

const AnimalInfo = ({ animalInfo, onModalIsOpen }) => {
	// Array con las propiedades del objeto animalInfo
	let objectProps = Object.keys(animalInfo);

	// Filtro las propiedades id e img del array
	objectProps = objectProps.filter(e => e !== 'img' && e !== 'id').sort();

	let initialMayus = animalInfo.nombre[0].toUpperCase();
	let restOfName = animalInfo.nombre.substring(1);
	let nameMayus = initialMayus + restOfName;

	return (
		<>
			<section className="animal-info-container">
				<h3>{nameMayus}</h3>
				<ul>
					{objectProps.map(prop => (
						<li key={prop}>
							<span className="animal-info-property-name">
								{prop[0].toUpperCase() + prop.substring(1)}:
							</span>
							{Array.isArray(animalInfo[prop])
								? animalInfo[prop].map(
										(e, i) =>
											e + (i + 1 === animalInfo[prop].length ? '.' : ', ')
								  )
								: animalInfo[prop]}
							{animalInfo[prop] === true && 'Si'}
							{animalInfo[prop] === false && 'No'}
						</li>
					))}
				</ul>
				<img src={animalInfo.img} alt={animalInfo.nombre} />
				<button onClick={() => onModalIsOpen(false)}>X</button>
			</section>
		</>
	);
};

export default AnimalInfo;
