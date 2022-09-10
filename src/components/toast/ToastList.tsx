import Portal from '@reach/portal'
import React from 'react'
import { useUI } from '../../context/ui.context'
import Toast from './Toast'

const ToastList = () => {
   const { toastList } = useUI()
    let newToastList = [...toastList].reverse()

  return (
    <>
        {newToastList.length 
        ? 
            <Portal>
                <div className='fixed right-3 top-3'>
                    {newToastList.map((e) => {
                        return <Toast id={e.id} text={e.text} toastType={e.toastType}/>
                    })}
                </div>
            </Portal>
        : 
            null 
        }
    </>
        
  )
}

export default ToastList