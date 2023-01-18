import React from 'react'
import {About,Events,FAQ,Footer,Landing,Navbar,Registeration,Sponsers} from "../components"
const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Events />
        {/*<Registeration />*/}
        {/*<Sponsers />*/}
        <FAQ />
        <Footer />
    </div>
  )
}

export default LandingPage