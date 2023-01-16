import React from 'react'

const Footer = () => {
    // const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("ise.genesis.dsce@gmail.com");
        // setCopied(true);
    };
  return (
      <div className="bg-[#071E22] mt-1">
          <h1 className="font-bold text-center text-5xl p-8" style={{color:'#E5F2FF'}}>Contact Us</h1>
          <footer className="text-center text-white bg-[#071E22] sm:px-[20%] px-[10%]">
              <div className="container pt-9 flex justify-center mb-9">
                  <a href="https://instagram.com/genesis.ise" target="_blank" className="mr-9">
                      <img src={require('../assets/instagram.png')} alt="Logo" className="h-14" />
                  </a>
                  <a href="https://www.linkedin.com/company/gensis-ise-dsce/" target="_blank" className="mr-9">
                      <img src={require('../assets/linkedin.png')} alt="Logo" className="h-14" />
                  </a>
                  {/*<a href="index.js" className="mr-9">*/}
                  {/*    <img src={require('../assets/twitter.png')} alt="Logo" className="h-14" />*/}
                  {/*</a>*/}
                  <a href="mailto:ise.genesis.dsce@gmail.com" target="_blank" onClick={handleCopy} className="text-gray-800">
                      <img src={require('../assets/email.png')} alt="Logo" className="h-14" />
                  </a>
              </div>

              <div className="text-center py-4 text-[#E5F2FF] text-xl">
                  70906 88613 | 73384 98081
              </div>

              <div className="text-center py-4 text-[#E5F2FF]">
                  Copyright © 2023 All rights reserved | Made by genesis team.
              </div>
          </footer>
      </div>
  )
}

export default Footer