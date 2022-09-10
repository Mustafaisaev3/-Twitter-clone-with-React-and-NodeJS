import React from 'react'
import {RiErrorWarningLine} from 'react-icons/ri'

type WorningToastType = {
    id: number,
    text: string
  }
  
  const WorningToast = ({id, text}: WorningToastType) => {
    return (
      <div className={`p-[20px] w-[200px] mb-5 rounded-lg  text-white bg-yellow-500 flex items-center justify-between`} key={id}>
        <div>{text}</div>
        <div><RiErrorWarningLine /></div>
      </div>
    )
  }
export default WorningToast