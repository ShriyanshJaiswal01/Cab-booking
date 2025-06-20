import React from 'react'

const WaitingForDriver = (props) => {
  return (
    
      <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
      props.setWaitingForDriver(false)
    }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
    
    <div className='flex items-center justify-between'>
    <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
    <div className='text-right'>
      <h2 className='text-lg font-medium'>{props.ride?.captain.fullname.firstname}</h2>
      <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
      <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
      <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
    </div>
    </div>

    <div className='flex gap-2 justify-between flex-col items-center'>
    
    <div className='w-full mt-5'>
      <div className='flex items-center gap-5 p-3 border-b-2 '>
      <i className="ri-map-pin-line"></i>
      <div>
      <h3 className='text-lg font-medium'>563/11-A</h3>
      <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
      </div>
      
      </div>
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className="text-lg ri-map-pin-fill"></i>
      <div>
      <h3 className='text-lg font-medium'>563/11-A</h3>
      <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
      </div>
      </div>
      <div className='flex items-center gap-5 p-3'>
      <i className="ri-money-rupee-circle-line"></i>
      <div>
      <h3 className='text-lg font-medium'>${props.ride?.fare}</h3>
      <p className='text-sm -mt-1 text-gray-600'>cash cash</p>
      </div>
      </div>
    </div>
    
    </div>
    
    </div>
    
  )
}

export default WaitingForDriver