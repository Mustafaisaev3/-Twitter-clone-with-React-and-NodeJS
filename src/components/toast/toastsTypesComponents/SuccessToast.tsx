import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'

type SuccesToastType = {
  id: number,
  text: string
}

const SuccesToast = ({id, text}: SuccesToastType) => {
  return (
      <div className={`p-[15px] w-[200px] mb-5 rounded-lg  text-white bg-green-500 flex items-center justify-between`} key={id}>
        <div>{text}</div>
        <div><BsCheckCircle /></div>
      </div>
  )
}

export default SuccesToast