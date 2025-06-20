import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
       <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
        props.setRidePopUpPanel(false)
    }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

    <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
      <div className='flex items-center gap-3 '>
        <img className='h-12 w-12 rounded-full object-cover' src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" alt="" />
        <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
      </div>
      <h5>2.2 KM</h5>
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
    <div className='flex mt-5 w-full items-center justify-between'>
    <button onClick={()=>{
      props.setConfirmRidePopUpPanel(true)
      props.confirmRide()
    }} className='bg-green-600 text-white font-semibold p-4 px-8 rounded-lg'>Accept</button>

<button onClick={()=>{
      props.setRidePopUpPanel(false)
    }} className='bg-gray-300 text-gray-700 font-semibold p-4 px-8 rounded-lg'>Ignore</button>
    </div>
    </div>
    
    </div>
  )
}

export default RidePopUp