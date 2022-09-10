import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ToastList from '../components/toast/ToastList'
import { ToastType, useUI } from '../context/ui.context'

export const Test = () => {
  const [text, setText] = useState('')
  const {openToast, addToast} = useUI()


  function handleToastButtonClick (obj: ToastType){
    addToast(obj)
  }



  return (
    <div className=''>
      <input placeholder='' value={text} onChange={(e) => setText(e.target.value)} className={'w-24 bg-slate-400'}/>
      <div className='w-full h-screen flex items-center justify-center gap-3' >
          <div  onClick={() => handleToastButtonClick({id: Math.random(), toastType: 'success', text: text})} className='p-[30px] bg-cyan-600'>SUCCES</div>
          <div  onClick={() => handleToastButtonClick({id: Math.random(), toastType: 'worning', text: text})} className='p-[30px] bg-cyan-600'>WORNING</div>
          <div  onClick={() => handleToastButtonClick({id: Math.random(), toastType: 'error', text: text})} className='p-[30px] bg-cyan-600'>ERROR</div>
          <ToastList />
      </div>
    </div>
  )
}

