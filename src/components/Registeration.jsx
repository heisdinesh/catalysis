import React from 'react'

const Registeration = () => {
  return (
    <div className='bg-[#E5F2FF] lg:max-w-full lg:py-16 lg:px-16 md:py-16 md:px-16 py-5 px-5'>
      <div className='lg:flex bg-[#071E22] lg:h-[855px] lg:rounded-[20px] md:rounded-[20px] md:py-10 py-10 rounded-[20px]'>
        <div>
          <div className='text-[#E5F2FF] lg:font-bold lg:text-left lg:text-center lg:text-5xl lg:p-10 md:font-bold md:text-center md:text-4xl font-bold text-center text-4xl mb-5'>
            REGISTRATIONS
          </div>
          <div className='lg:rounded-[20px] md:'>
          <iframe title='Google form' src="https://docs.google.com/forms/d/e/1FAIpQLScPHYEWUOn239BvEt-L15O__OO1kaS_RxyCPrIg1Y1x0vISQw/viewform?embedded=true" className='md:w-full md:h-[620px] lg:w-[620px] lg:h-[620px] w-full h-[520px]' frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
        <div className="lg:mx-auto lg:my-auto">
        <img src={require('../assets/photo.JPG')} alt='Images' className='lg:w-[600px] lg:h-[720px] lg:my-auto md:w-[60%] md:h-[600px] md:mx-auto md:my-16 mt-12 w-[80%] h-[35%] rounded-[20px] mx-auto'/>
        </div>
      </div>
    </div>
  )
}

export default Registeration
