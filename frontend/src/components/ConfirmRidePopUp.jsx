import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [otp,setOtp] = useState('')
  const navigate = useNavigate()

  const submitHandler = async (e) =>{
    e.preventDefault()

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
      params: {
          rideId: props.ride._id,
          otp: otp
      },
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })

  if (response.status === 200) {
      props.setConfirmRidePopupPanel(false)
      props.setRidePopupPanel(false)
      navigate('/captain-riding', { state: { ride: props.ride } })
  }


  }

  return (
    <div>
       <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
        props.setRidePopUpPanel(false)
    }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
    <h3 className='text-2xl font-semibold mb-5'>Confirm this Ride to Start</h3>

    <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
      <div className='flex items-center gap-3 '>
        <img className='h-12 w-12 rounded-full object-cover' src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" alt="" />
        <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
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
    <div className='mt-6 w-full'>
    <form onSubmit={submitHandler}>
      <input valur={otp} onChange={(e)=>setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 text-mono text-lg rounded-lg w-full mt-5' placeholder='Enter OTP' />
    <button className='mt-5 w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>

<button onClick={()=>{
      props.setConfirmRidePopUpPanel(false)
      props.setRidePopUpPanel(false)
    }} className='mt-5 w-full mt-2 bg-red-600 text-white font-semibold p-2 rounded-lg'>Cancel</button> 
    </form>
    </div>
    </div>
    
    </div>
  )
}

export default ConfirmRidePopUp