import React from 'react'

const Registeration = () => {
  return (
    <div className='container absolute bg-[#E5F2FF] max-w-full lg:h-[1024px] '>
      <div className='flex justify-center container absolute bg-[#071E22] lg:w-[1236px] lg:h-[855px] mx-[12.5%] my-[5%] lg:rounded-[20px]'>
        <div>
        <div className='font-[Inter] text-[#E5F2FF] lg:font-[400] lg:text-[56px] lg:w-[436px] lg:h-[68px] lg:mt-[118px] lg:mb-[68px] lg:ml-[89px] lg:mr-[711px]'>
          REGISTERATION
        </div>
        <div className='lg:mt-[68px] lg:mb-[116px] lg:ml-[72px] lg:mr-[76px] lg:rounded-[20px]'>
        <iframe title='Google form' src="https://docs.google.com/forms/d/e/1FAIpQLSdSmpuyvNRn2gPFjJ8XhDRq6S25VzoMTZWXxkvG6-eARP7zlA/viewform?embedded=true" width="470" height="485" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        </div>
        <div className='absolute lg:w-[535px] lg:mt-[80px] lg:mb-[111px] lg:ml-[618px] lg:mr-[83px]'>
        <img src={require('./Gagan S 1DS20IS035.jpeg')} alt='Images' className='lg:w-[535px] lg:h-[664px] lg:rounded-[20px]'/>
        </div>
      </div>
    </div>
  )
}

export default Registeration