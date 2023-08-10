import { AiOutlinePlus } from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs'
import React from 'react'

function App() {
  return (
    <div className='max-w-6xl mx-auto bg-[#B2D5FC] min-h-[100vh] flex items-center justify-center'>
      <div className='background-image rounded-3xl  flex justify-between'>
        <div className='p-[10px]'>
          <button class="btn btn-sm btn-[#ffffff]"><AiOutlinePlus /></button>

        </div>
        <div className='min-h-[85vh] min-w-[50vw] py-[20px] px-[15px] bg-[#E4F1FF] rounded-3xl'>
          <div className='flex justify-between'>
          <div>
            <p className='font-popins'>Welcome back isabella</p>
            <p className='font-popins'>check out today's weather information</p>
          </div>
          <div className='flex gap-5 items-center'>
          <button className='btn btn-xs'><BsThreeDots></BsThreeDots></button>  
          <div>
            <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img src="user.jpg" alt="" />
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
