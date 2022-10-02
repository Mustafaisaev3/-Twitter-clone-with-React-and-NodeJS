import React, { useState } from 'react'
import { BsImage } from 'react-icons/bs'
import { IoIosClose } from 'react-icons/io'

const UploadImages = () => {

  const [ images, setImages ] = useState<string[]>([])

  const handleImageDeleteBtn = (url: string) => {
    setImages(prev => prev.filter(_url => _url !== url))
  }

  const handleChoseImageButton = (e: any) => {
    const file = e.target.files[0]
    console.log(file)
    if(file) {
        const fileObj = new Blob([file])
        setImages(prev => [...prev, URL.createObjectURL(fileObj)])
    }
  }

  console.log('rerender')

  return (
    <div className=''>
        <div className='flex gap-2 py-2'> 
            {images.map((i) => {
                return  <div key={i} className='w-[50px] h-[50px] rounded-md relative'>
                            <img src={i} alt={'image'} className='w-full h-full' />
                            <div className='absolute top-[-5px] right-[-5px] bg-[#ff4b4b] rounded-full cursor-pointer' onClick={() => handleImageDeleteBtn(i)}>
                                <IoIosClose size={15} color={'white'}/>
                            </div>
                        </div>
                 
            })}
        </div>
        <div className='w-[40px] flex items-center justify-center'>
            <input type="file" className='hidden' id="upload-image" onChange={handleChoseImageButton}/>
            <label htmlFor="upload-image">
                <div className='cursor-pointer active:bg-[#79d0ff1f] rounded-full p-2'>
                    <BsImage size={25} color={'#1d9bf0'} />
                </div>
            </label>
        </div>
    </div>
  )
}

export default UploadImages