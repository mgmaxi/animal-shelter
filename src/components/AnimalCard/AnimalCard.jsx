import React from 'react'
import './animalCard.css'

const AnimalCard = ({animal}) => {
  return (

            <div className='card'>
                <h2>{animal.nombre[0].toUpperCase()+animal.nombre.substring(1)}</h2>
                <img src={animal.img} alt={animal.nombre} />
                <div className='card-info'>
                <p><span>Raza</span> {animal.raza[0].toUpperCase()+animal.raza.substring(1)}</p>
                <p><span>Edad</span> {animal.edad_aprox}</p>
                </div>
                <button>Más info</button>
                <button>Adoptar</button>
            </div>
            
        )
}

export default AnimalCard