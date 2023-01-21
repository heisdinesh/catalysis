import React from 'react'


const Sponsers = () => {
  const images =[require('../assets/Hashitinerary logo.jpg'),
                 require('../assets/Break Point.jpg'),
                 require('../assets/Wealth Point (1).jpg'),
                 require('../assets/radix.png')
                 ];
  const images2 =[require('../assets/radix.png'),
                  require('../assets/Break Point.jpg')]

  


  return (
    <div  style={{backgroundColor: "#E5F2FF"}} >
      <h1 className="font-bold text-center text-5xl p-8" style={{color:'#071E22'}}>Sponsors</h1>
      <div className='flex'>
      {images.map((image,index) => (
        <img key ={index} src ={image}
      className=' lg:w-1/4 lg:h-[250px]  lg:p-5 lg:mb-12 lg:mt-2' alt='Placeholder' />))}
      </div>
      
      
    </div>
  );
}

export default Sponsers;