import React from 'react'
// import TwitterLogo from "../assets/images/twitter_logo.png";

import {FiSearch, FiUsers, FiMessageSquare} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import Button from '../components/Button';
import { useUI } from '../context/ui.context';

export const SignIn = () => {
  const {openModal, setModalView, modalView} = useUI()

  const handleSignInModal = () => {
    setModalView('SIGN_IN_VIEW')
    return openModal()
  }
  const handleSignUnModal = () => {
    setModalView('SIGN_UP_VIEW')
    return openModal()
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='bg-[#71c0f9] h-full w-1/2 relative overflow-hidden'>
          <div className='absolute top-0 left-0 z-10'>
              <img src={require('../assets/images/twitter_logo.png')} className='w-[150%] h-[150%] max-w-[none]' alt="" />
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 z-10'>
            <div className='w-1/2'>
                <div className='flex pb-8'>
                    <FiSearch size={40} color={'white'} />
                    <h2 className='pl-4 text-white text-lg font-bold'>Читайте о том что вам интересно</h2>
                </div>
                <div className='flex pb-8'>
                    <FiUsers size={40} color={'white'} />
                    <h2 className='pl-4 text-white text-lg font-bold'>Узнайте о чем говорят в мире</h2>
                </div>
                <div className='flex pb-8'>
                    <FiMessageSquare size={40} color={'white'} />
                    <h2 className='pl-4 text-white text-lg font-bold'>Присоединяйтесь к общению</h2>
                </div>
                
            </div>
          </div>
      </div>
      <div className='bg-white h-full w-1/2 flex items-center justify-center p-[50px]'>
          <div className='flex flex-col items-center justify-center w-2/3'>
            <div className='w-full py-5'>
                <BsTwitter size={40} color={'#2cb2ff'} />
            </div>
            <div className='text-3xl font-bold pb-10'>Узнайте что происходит в мире прямо сейчас</div>
            <div className='flex flex-col w-full'>
                <div className='text-sm font-medium pb-[20px]'>Присоединяйтесь к твиттеру прямо сейчас</div>
                <Button onClick={handleSignInModal} buttonStyle='primary'>Зарегистрироваться</Button>
                <Button onClick={handleSignUnModal} buttonStyle='secondary'>Войти</Button>
            </div>
          </div>
      </div>
    </div>
  )
}

// export default SignIn