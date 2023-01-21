import React from 'react'


const Sponsers = () => {
  const images =[require('../assets/radix.png'),
                 require('../assets/Hashitinerary logo.jpg'),
                 require('../assets/Break Point.jpg'),
                 require('../assets/Wealth Point (1).jpg')
                 ];

  


  return (

    <div id='sponsors' style={{backgroundColor: "#E5F2FF"}} >
      <h1 className="font-bold text-center text-5xl p-8" style={{color:'#071E22'}}>Sponsors</h1>
      <div className='lg:flex'>
      {images.map((image,index) => (
        <img key ={index} src ={image}
      className='lg:w-1/4 lg:h-[250px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5' alt='Placeholder' />))}
      </div>
      
      
    </div>
  );
  
  
}

export default Sponsers;