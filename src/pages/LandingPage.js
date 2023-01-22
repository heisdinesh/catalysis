import React from 'react'
import {About,Events,FAQ,Footer,Landing,Navbar,Registeration,Schedule,Sponsers} from "../components"
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Events />
        {/* <Registeration /> */}
        {/*<Sponsers />*/}
        <Schedule />
        <Sponsers />
        <FAQ />
        <Footer />
    </div>
  )
}

export default LandingPage