import React from 'react'
import AddTweetForm from './AddTweetForm'
import { useUI } from '../context/ui.context'

// icons
import {IoMdClose} from 'react-icons/io'

const AddTweetModal = () => {
  const {closeModal} = useUI()
  return (
    <div className='w-auto h-auto bg-white rounded-md'>
        <div className='w-full p-[15px] flex justify-end border-b-[1px]'>
            <div className='cursor-pointer' onClick={() => closeModal()}>
                <IoMdClose size={25} color={'#1d9bf0'}/>
            </div>
        </div>
        <div className='p-[15px]'>
            <AddTweetForm />
        </div>
    </div>
  )
}

export default AddTweetModal