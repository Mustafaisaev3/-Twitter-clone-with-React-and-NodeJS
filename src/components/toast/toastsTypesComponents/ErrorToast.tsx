import React from 'react'
import {BiErrorAlt} from 'react-icons/bi'

type ErrorToastType = {
    id: number,
    text: string
}

const ErrorToast = ({id, text}: ErrorToastType) => {
  return (
    <div className={`p-[15px] w-[300px] text-sm mb-5 rounded-lg  text-white bg-red-500 flex items-center justify-between`} key={id}>
        <div>{text}</div>
        <div><BiErrorAlt /></div>
      </div>
  )
}

export default ErrorToast