import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useUI } from '../../context/ui.context'
import Input from '../input/Input'

import { BsTwitter } from 'react-icons/bs'

const UserFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
}).required();

const SignInModal = () => {
  const {closeModal} = useUI()
  
  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: yupResolver(UserFormSchema)
  // });
  // const onSubmit = (data) => console.log(data);

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