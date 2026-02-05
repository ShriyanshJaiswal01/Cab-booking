import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-full absolute top-0 ' onClick={()=>{
      props.setVehiclePanel(false)
    }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5> 
      <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('car')
      }} className='flex border-2 active:border-black bg-gray-100 rounded-xl mb-2 p-3 w-full  items-center justify-between'>
        <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='ml-2 w-1/2'>
          <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
        </div>
        <h2 className='text-xl font-semibold'>₹{props.fare.car}</h2>
      </div>

      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('moto')
      }} className='flex border-2 active:border-black bg-gray-100 rounded-xl mb-2 p-3 w-full  items-center justify-between'>
        <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
        </div>
        <h2 className='text-xl font-semibold'>₹{props.fare.moto}</h2>
      </div>

      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('auto')
      }} className='flex border-2 active:border-black bg-gray-100 rounded-xl mb-2 p-3 w-full  items-center justify-between'>
        <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
        </div>
        <h2 className='text-xl font-semibold'>₹{props.fare.auto}</h2>
      </div>
</div>
  )
}

export default VehiclePanel