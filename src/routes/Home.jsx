import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import AnimalsGrid from '../components/AnimalsGrid/AnimalsGrid'
import './home.css'

const Home = () => {
  return (
    <main>
      <Carousel />
      <AnimalsGrid />
    </main>
  )
}

export default Home