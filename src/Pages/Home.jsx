import React from 'react'
import Hero from '../Components/HomePage/Hero'
import Destination from '../Components/Destination/Destination'
import Blogs from '../Components/Blogs/Blogs'
import Feedback from '../Components/Feedback/Feedback'


const Home = () => {
  return (
    <div>
        <Hero />
        <Destination />
        <Blogs />
        <Feedback />
    </div>
  )
}

export default Home