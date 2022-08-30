import React, { useState } from 'react'
import Textarea from './Textarea'

// icons
import {BiImage} from 'react-icons/bi'
import {MdOutlineTagFaces} from 'react-icons/md'
import CircularProgressBar from './CircularProgressBar'

const AddTweetForm = () => {
  let [textareaLength, setTextareaLength] = useState(0)

  return (
    // <div className='grid grid-cols-12 hover:bg-[#f5f8fa]'>
    <div className='grid grid-cols-12'>
        <div className='col-span-2 flex justify-center p-4'>
            <div className='w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center overflow-hidden'>
                <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`} alt="" />
            </div>
        </div>
        <div className='col-span-10 py-4 pr-2'>
            <Textarea placeholder='Что происходит?' getTextareaLength={setTextareaLength} maxLength={281} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <BiImage size={25} color={'#1d9bf0'} />
                    <MdOutlineTagFaces size={25} color={'#1d9bf0'}/>
                </div>
                <div className='flex items-center'>
                    {textareaLength
                    ?   <div className='flex items-center'>
                            280
                            <CircularProgressBar textLength={textareaLength} />
                        </div>
                    :
                    undefined
                    }        
                    <button className='w-full flex items-center justify-center text-md font-semibold text-white px-4 py-2 rounded-3xl bg-[#1d9bf0]'>
                        Твитнуть
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTweetForm