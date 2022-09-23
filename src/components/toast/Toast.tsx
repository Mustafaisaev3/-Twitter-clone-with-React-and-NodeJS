import React, { useEffect } from 'react'
import { useUI } from '../../context/ui.context'
import ErrorToast from './toastsTypesComponents/ErrorToast'
import SuccesToast from './toastsTypesComponents/SuccessToast'
import WorningToast from './toastsTypesComponents/WorningToast'

interface ToastType {
  id: any,
  toastType: string,
  text: string
}

const Toast = ({id, toastType, text}: ToastType) => {
  const {deleteToast, toastList} = useUI()

  useEffect(() => {
      setTimeout(() => {
        deleteToast(id)
    }, 5000)
  }, [id])

  console.log(toastList)

  const selectToastType = () => {
    if(toastType == 'success'){
      return <SuccesToast id={id} text={text}/>
    } else if (toastType == 'error') {
      return <ErrorToast id={id} text={text}/>
    } else if (toastType == 'worning') {
      return <WorningToast id={id} text={text}/>
    }
  }

  return (
      <div>
        {selectToastType()}
      </div>
  )
}

export default Toast