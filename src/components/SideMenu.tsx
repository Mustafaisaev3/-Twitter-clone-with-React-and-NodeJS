import React from 'react'
import { useUI } from '../context/ui.context'

// icons
import {RiHome7Fill} from 'react-icons/ri'
import {BsTwitter, BsSearch} from 'react-icons/bs'
import {FiHash} from 'react-icons/fi'
import {HiOutlineBell} from 'react-icons/hi'
import {BsEnvelope} from 'react-icons/bs'
import {GrBookmark} from 'react-icons/gr'
import {RiFileList2Line} from 'react-icons/ri'
import {FaRegUser} from 'react-icons/fa'
import {CgMoreO} from 'react-icons/cg'

const SideMenu = (): React.ReactElement => {
  const { setModalView, openModal, modalView } = useUI()

  const handleAddTweetModal = () => {
    setModalView('ADD_TWEET_MODAL')
    // console.log(modalView)
    return openModal()
  }


  return (
    <div className='h-auto w-full rounded-lg col-span-2 flex justify-center p-3'>
        <ul className='flex flex-col gap-4'>
            <li>
                <a href="#" className='flex items-center px-4 py-2'>
                    <BsTwitter size={30} color={'#1d9bf0'} />
                    <h2 className='pl-5 text-lg font-semibold sm:hidden'>Hello</h2>
                </a>
            </li>
            {/* <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <RiHome7Fill size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Поиск</h2>
                </a>
            </li> */}
            <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <FiHash size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Поиск</h2>
                </a>
            </li>
            <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <HiOutlineBell size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Уведомления</h2>
                </a>
            </li>
            <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <BsEnvelope size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Сообщения</h2>
                </a>
            </li>
            <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <GrBookmark size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Закладки</h2>
                </a>
            </li>
            <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <RiFileList2Line size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Список</h2>
                </a>
            </li>
            <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <FaRegUser size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Профиль</h2>
                </a>
            </li>
            <li>
                <a href="#" className='flex items-center px-4 py-2 rounded-3xl hover:bg-[#1da1f21a]'>
                    <CgMoreO size={30} />
                    <h2 className='pl-5 text-lg font-semibold'>Поиск</h2>
                </a>
            </li>
            <li>
                <button onClick={handleAddTweetModal} className='w-full flex items-center justify-center text-lg font-semibold text-white px-4 py-2 rounded-3xl bg-[#1d9bf0]'>
                    Твитнуть
                </button>
            </li>
        </ul>
    </div>
  )
}

export default SideMenu