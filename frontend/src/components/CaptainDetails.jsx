import React,{useContext} from 'react'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext)
  if (!captain || !captain.fullname) {
    return <p>Loading captain details...</p>;
  }

  //  if (!captain) {
  //   return <p>Loading captain details...</p>;
  // }

  // console.log(captain)

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://i.pinimg.com/originals/5a/5e/4a/5a5e4a35998c67e9f425430867a06bf9.jpg" alt="" />
          <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname +" "+ captain.fullname.lastname}</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>$295.5</h4>
          <p className='text-sm  text-gray-600'>Earned</p>
        </div>
      </div>

      <div className='flex w-full p-3 mt-8 bg-yellow-300 rounded-xl justify-center gap-5 items-start'>
        <div className='text-center'>
        <i className="text-2xl mb-2  font-thin ri-timer-2-line"></i>
        <h5 className='text-lg font-medium'>10.5</h5>
        <p className='text-sm text-gray-600'>Hours online</p>
        </div>
        <div className='text-center'>
        <i className="text-2xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className='text-lg font-medium'>10.5</h5>
        <p className='text-sm text-gray-600'>Hours online</p>
        </div>
        <div className='text-center'>
        <i className="text-2xl mb-2 font-thin ri-booklet-line"></i>
        <h5 className='text-lg font-medium'>10.5</h5>
        <p className='text-sm text-gray-600'>Hours online</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails