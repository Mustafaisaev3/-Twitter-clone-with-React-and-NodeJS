import React from 'react'

// icons
import {TbMessageCircle2, TbRepeat, TbUpload} from 'react-icons/tb'
import {FaRegHeart} from 'react-icons/fa'

interface TweetType {
    text: string,
    user: {
        username: string,
        fullname: string,
        avatarUrl: string
    }
}

const Tweet = ({text, user}: TweetType): React.ReactElement => {
  return (
    <div>
        <div className='border-b-[1px] w-full h-auto grid grid-cols-12 hover:bg-[#f5f8fa]'>
            <div className='col-span-2 flex justify-center p-4'>
                <div className='w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center overflow-hidden'>
                    <img src={`${user.avatarUrl}`} alt="" />
                    {/* <FaRegUser size={30} /> */}
                </div>
            </div>
            <div className='col-span-10 py-4 '>
                <div>
                    <div>
                        {user.fullname} <span className='text-[#c3c3c3]'>@{user.username}</span>
                    </div>
                    <p className='pt-3'>{text}</p>
                </div>
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
    </div>
  )
}

export default Tweet