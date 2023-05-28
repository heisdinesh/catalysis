import React from 'react'
import Lottie from 'lottie-react'
import about_gif from '../assets/about_gif.json'
const About = () => {

  return (
    <div id="about">

      <section className=" bg-background text-fontcolor body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" font-bold  mb-8  text-5xl" style={{ color: '#E5F2FF' }}>
              <Lottie animationData={about_gif} className='w-[35%]' />
              {/* About */}
            </h1>
            <p className="mb-8 leading-relaxed text-justify">Catalysis is an inter-department, extravagant 3-days tech fest, hosted by the ISE Department of Dayananda Sagar College of Engineering (DSCE), Bangalore.
              Catalysis aims to bring out the technical aspects in students by incorporating tech in various events going to be held through the whole of the fest.
              Through this event, we seek to help students demonstrate how technology integrates with other fields to help solve real-world problems and provide students with a platform to develop and showcase their tech skills.

            </p>
            <div className="flex justify-center">

            </div>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img alt="Poster1" src={require('../assets/Poster1.png')}></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About