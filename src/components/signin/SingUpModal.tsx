import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useUI } from '../../context/ui.context'
import {IoMdClose} from 'react-icons/io'
import Input from '../input/Input'
import Button from '../Button'
import { AuthApi } from '../../services/api/authApi';
import { fetchSignIn } from '../../store/ducks/user/action';
import { selectUserStatus } from '../../store/ducks/user/selectors';
import { LoadingState } from '../../store/types';


export interface LoginFormProps { 
  email: string,
  password: string
}

const UserFormSchema = yup.object({
  email: yup.string().email('неверная почта').required(),
  password: yup.string().min(6, 'минимальная длина пароля 6 символов').required(),
}).required();

const SignUpModal = () => {
  const {closeModal, addToast} = useUI()
  const dispatch = useDispatch()
  const loadingStatus = useSelector(selectUserStatus)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
    resolver: yupResolver(UserFormSchema)
  });
  const onSubmit = async (data: LoginFormProps) => {
    dispatch(fetchSignIn(data))
  };

  useEffect(() => {
    if(loadingStatus === LoadingState.SUCCESS){
      closeModal()
      addToast({id: Math.random(), toastType: 'success', text: 'Удачи :)'})
    } else if (loadingStatus === LoadingState.ERROR){
      addToast({id: Math.random(), toastType: 'error', text: 'Неверный логин или пароль'})
    }
  }, [loadingStatus])

  return (
    <div className='relative w-[500px] h-auto rounded-lg bg-white  '>
       <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center border-b p-4'>
            <div className='cursor-pointer' onClick={() => closeModal()}>
              <IoMdClose size={25} color={'#1d9bf0'}/>
            </div>
            <div className='text-lg font-bold pl-4'>Войти в аккаунт</div>
          </div>
          <div className='p-4'>
            <Input erorr={errors.email?.message} label='E-mail' placeholder='введите e-mail' {...register("email")} />
            <Input erorr={errors.password?.message} label='Пароль' placeholder='введите пароль' {...register("password")} />
          </div>
          <div className='p-4 p-t-0'>
            <Button type='submit' buttonStyle='primary'>Войти</Button>
          </div>
        </form>
    </div>
  )
}

export default SignUpModal