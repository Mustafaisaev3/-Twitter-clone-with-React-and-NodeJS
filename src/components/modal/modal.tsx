import React, {useRef} from 'react'
import { useUI } from '../../context/ui.context'
import useOnClickOutside from '../../utils/use-click-outside'



type ModalType = {
    open: boolean,
    onClose: () => any,
    children: React.ReactNode
}

const Modal = ({open, onClose, children}: ModalType) => {
    const modalInnerref = useRef()
    const {closeModal} = useUI()
    useOnClickOutside(modalInnerref, () => closeModal())
  return (
      <>
        {open && <div className='flex items-center justify-center absolute left-0 top-0 w-full h-full z-[1000] bg-[#0000005c]'>
            <div ref={modalInnerref}>
                {children}
            </div>
        </div>}
      </>
   
  )
}

export default Modal