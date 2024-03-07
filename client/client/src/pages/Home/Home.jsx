import  Slider  from '../../components/Slider/Slider'
import React from 'react'
import './Home.scss'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'


const Home = () => {
  return (
   <div className="home">
      <Slider />
      <FeaturedProducts type='Featured'/>
      <FeaturedProducts type='Trending'/>
   </div>
  )
}

export default Home