import React from 'react'
import { useUI } from '../../context/ui.context'
import { BsTwitter } from 'react-icons/bs'
import Input from '../input/Input'


const SignInModal = () => {
    const {closeModal} = useUI()
  return (
    <div className='relative w-[500px] h-[600px] rounded-lg bg-white p-4'>
      <div className='w-full flex justify-center pb-6'>
        <BsTwitter size={25} color={'#71c0f9'} />
      </div>
      <h2 className='text-lg font-bold'>Создайте учетную запись</h2>
      <Input name='name' label='Имя' placeholder='input your name' />
      <Input name='phone' label='Телефон' placeholder='input your name' />
    </div>
  )
}

export default SignInModal