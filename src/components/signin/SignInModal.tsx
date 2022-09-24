import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useUI } from '../../context/ui.context'
import Input from '../input/Input'
import PasswordInput from '../input/PasswordInput'


import { BsTwitter } from 'react-icons/bs'
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn, fetchSignUp } from '../../store/ducks/user/action';
import { LoadingState } from '../../store/types';
import { selectUserStatus } from '../../store/ducks/user/selectors';




export interface RegisterFormProps {
  fullname:string,
  username: string,
  email: string,
  password: string,
  password2: string,
}

const RegisterFormSchema = yup.object({
  fullname: yup.string().required("Введите свое полное имя"),
  username: yup.string().required('Введите логин'),
  email: yup.string().email('Неверная почта').required('Введите почту'),
  password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
  password2: yup.string().oneOf([yup.ref('password'), undefined], 'Пароли не соответствуют')
}).required();

const SignInModal = () => {
  const {closeModal, addToast} = useUI()
  const dispatch = useDispatch()
  const loadingStatus = useSelector(selectUserStatus)


  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
    resolver: yupResolver(RegisterFormSchema)
  });

  const onSubmit = (data: RegisterFormProps) => {
    dispatch(fetchSignUp(data))
    // console.log(data)
  };
  
  useEffect(() => {
    if(loadingStatus === LoadingState.SUCCESS){
      closeModal()
      addToast({id: Math.random(), toastType: 'success', text: 'Регистрация прошла успешн!'})
    } else if (loadingStatus === LoadingState.ERROR){
      addToast({id: Math.random(), toastType: 'error', text: 'Ошибка при регистрации!'})
    }
  }, [loadingStatus])

  return (
    <div className='relative w-[500px] h-auto rounded-lg bg-white p-4'>
      <div className='w-full flex justify-center pb-6'>
        <BsTwitter size={25} color={'#71c0f9'} />
      </div>
      <h2 className='text-lg font-bold'>Создайте учетную запись</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input erorr={errors.fullname?.message} label='Ваше имя' placeholder='' {...register("fullname")} />
        <Input erorr={errors.username?.message} label='Логин' placeholder='' {...register("username")} />
        <Input erorr={errors.email?.message} label='E-mail' placeholder='' {...register("email")} />
        <PasswordInput erorr={errors.password?.message} label='Пароль' placeholder='' {...register("password")} />
        <PasswordInput erorr={errors.password2?.message} label='Пароль' placeholder='' {...register("password2")} />
        <div className='p-4 p-t-0'>
          <Button type='submit' buttonStyle='primary'>Зарегистрироваться</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInModal