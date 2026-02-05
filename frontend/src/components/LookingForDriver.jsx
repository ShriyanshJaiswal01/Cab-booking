import React from 'react'

const LookingForDriver = (props) => {
  return (
    
      <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
      props.setVehicleFound(false)
    }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

    <div className='flex gap-2 justify-between flex-col items-center'>
    <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
    <div className='w-full mt-5'>
      <div className='flex items-center gap-5 p-3 border-b-2 '>
      <i className="ri-map-pin-line"></i>
      <div>
      <h3 className='text-lg font-medium'>563/11-A</h3>
      <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
      </div>
      
      </div>
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className="text-lg ri-map-pin-fill"></i>
      <div>
      <h3 className='text-lg font-medium'>563/11-A</h3>
      <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
      </div>
      </div>
      <div className='flex items-center gap-5 p-3'>
      <i className="ri-money-rupee-circle-line"></i>
      <div>
      <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
      <p className='text-sm -mt-1 text-gray-600'>cash</p>
      </div>
      </div>
    </div>
    
    </div>
    
    </div>
    
  )
}

export default LookingForDriver