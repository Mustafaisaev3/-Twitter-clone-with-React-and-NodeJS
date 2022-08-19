import React from 'react'
import { useUI } from '../../context/ui.context'


const SignInModal = () => {
    const {closeModal} = useUI()
  return (
    <div className='relative w-[500px] h-[600px] rounded-lg bg-white'>
        <button onClick={() => closeModal()} className='absolute right-[-15px] top-[-15px] rounded-full w-[40px] h-[40px] bg-black text-white flex items-center justify-center'>x</button>
    </div>
  )
}

export default SignInModal