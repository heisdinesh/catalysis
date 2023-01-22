import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const jump = (target) => {
        const violation = document.getElementById(target);
        window.scrollTo({
            top:violation.offsetTop,
            behavior:"smooth"
        });
    };

    return (
      <nav className="fixed top-0 left-0 right-0 bg-[#071E22] px-12 py-3 flex justify-between items-center z-10">
          <img src={require('../assets/GenesisLogo.png')} alt="Logo" className="text-[#E5F2FF] font-medium h-20 border-2" />

          <div className="flex hidden md:block">
              <a href="#" onClick={() => {jump("landing")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Home</a>
              <a href="#" onClick={() => {jump("about")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">About</a>
              <a href="#" onClick={() => {jump("event")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Events</a>
              <a href="#" onClick={() => {jump("schedule")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Schedule</a>
              <a href="#" onClick={() => {jump("sponsors")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">Sponsors</a>
              <a href="#" onClick={() => {jump("faq")}} className="text-[#E5F2FF] font-medium sm:text-2xl text-[18px] sm:mr-8 mr-3">FAQs</a>
              
              {/* <button className="pt-1 pb-2 sm:px-8 px-3 rounded-lg sm:mr-8"  style={{backgroundColor: "#00FDFB"}}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHYEWUOn239BvEt-L15O__OO1kaS_RxyCPrIg1Y1x0vISQw/viewform" target="_blank" className="text-[#071E22] font-medium sm:text-xl text-lg">Register</a>
              </button> */}
          </div>

          <button className="text-[#E5F2FF] font-medium text-2xl focus:outline-none sm:hidden" onClick={() => setIsOpen(!isOpen)}>
              <img src={require('../assets/icons8-chevron-48.png')} alt="Logo" className="h-10" />
          </button>
          <div className={`${ isOpen ? "block" : "hidden" } sm:hidden absolute top-24 left-0 right-0 bg-[#071E22] text-center border-2 rounded-lg pb-4`}>
              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("landing");
              }}>Home</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("about");
              }}>About</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-2" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("event");
              }}>Events</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("schedule");
              }}>Schedule</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-1" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("sponsors");
              }}>Sponsors</a>

              <a href="#" className="block text-[#E5F2FF] font-medium text-2xl mb-2" onClick={() => {
                  setIsOpen(!isOpen);
                  jump("faq");
              }}>FAQ</a>

              {/* <button onClick={() => {
                  setIsOpen(!isOpen);
                  // jump("registration");
              }} className="pt-1 pb-2 sm:px-8 px-3 rounded-lg sm:mr-8"  style={{backgroundColor: "#00FDFB"}}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScPHYEWUOn239BvEt-L15O__OO1kaS_RxyCPrIg1Y1x0vISQw/viewform" target="_blank" className="text-[#071E22] font-medium sm:text-xl text-lg">Register</a>
              </button> */}
          </div>
      </nav>
  )
}

export default Navbar