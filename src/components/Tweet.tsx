import React, { MouseEventHandler, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useUI } from '../context/ui.context';
import { Link } from 'react-router-dom'

import { formatDate } from '../utils/formatDate'
import TweetItemDropdown from './TweetItemDropdown';
import { RemoveTweet } from '../store/ducks/tweets/action';

// icons
import {TbMessageCircle2, TbRepeat, TbUpload} from 'react-icons/tb'
import {FaRegHeart, FaRegUser} from 'react-icons/fa'
import {BsThreeDotsVertical} from 'react-icons/bs'



interface TweetType {
    _id: string,
    text: string,
    createdAt: string
    user: {
        username: string,
        fullname: string,
        avatarUrl: string
    },
    images?: string[]
}



const Tweet = ({_id, text, createdAt, user, images}: TweetType): React.ReactElement => {
  const {addToast} = useUI()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleDeliteClick = () => {
    dispatch(RemoveTweet(_id))
    addToast({id: Math.random(), toastType: 'success', text: 'Твит удалён!'})

  }

  return (
    <Link to={`/home/tweet/${_id}`}>
        <div className='flex border-b-[1px]'>
            <div className='w-full h-auto grid grid-cols-12 hover:bg-[#f5f8fa]'>
                <div className='col-span-2 flex justify-center p-4'>
                    <div className='w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center overflow-hidden'>
                        {user.avatarUrl 
                        ?
                        <img src={`${user.avatarUrl}`} alt="" />
                        :
                        <FaRegUser size={30} />
                        }
                    </div>
                </div>
                <div className='col-span-10 py-4 '>
                    <div>
                        <div>
                            {user.fullname} <span className='text-[#c3c3c3]'>@{user.username} * </span><span  className='text-[#c3c3c3]'>{formatDate(new Date(createdAt))} ago</span>
                        </div>
                        <p className='pt-3'>{text}</p>
                    </div>
                    {images && <div className='flex gap-2 py-2'> 
                        {images.map((url) => {
                                return  <div key={url} className='w-[50px] h-[50px] rounded-md relative'>
                                            <img src={url} alt={'image'} className='w-full h-full' />
                                        </div>     
                        })}
                    </div> 
                    }
                    
                    <div className='flex justify-between pt-4'>
                        <div className='w-full flex items-center'>
                            <TbMessageCircle2 size={25} />
                            <span className='pl-3'>1</span>
                        </div>
                        <div className='w-full flex items-center'>
                            <FaRegHeart size={25} />
                            <span className='pl-3'>1</span>
                        </div>
                        <div className='w-full flex items-center'>
                            <TbRepeat size={25} />
                            <span className='pl-3'>1</span>
                        </div>
                        <div className='w-full flex items-center'>
                            <TbUpload size={25} />
                            <span className='pl-3'>1</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='m-[10px]'>
                <div onClick={(e) => handleTweetDropdownClick(e)} className='p-2 hover:bg-[#f5f8fa] rounded-full relative'>
                    <BsThreeDotsVertical size={20} />
                    <TweetItemDropdown isOpen={openTweetDropdown}>
                        <div>hello</div>
                        <div>hello2</div>
                        <div>hello3</div>
                    </TweetItemDropdown>
                </div>
            </div>              */}
            <div className='m-[10px]'>
                <TweetItemDropdown>
                    <div className='p-2 hover:hover:bg-[#f5f8fa]'>Редактировать</div>
                    <div className='p-2 hover:hover:bg-[#f5f8fa]' onClick={handleDeliteClick}>Удалить</div>
                </TweetItemDropdown>
            </div>             
        </div>
    </Link>
  )
}

export default Tweet