import React, { useEffect } from 'react'
import format from 'date-fns/format'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { TbMessageCircle2, TbRepeat, TbUpload } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/action'
import { selectTweetData } from '../../../store/ducks/tweet/selectors'

const FullTweet: React.FC = (): React.ReactElement | null => {
    const tweetData = useSelector(selectTweetData)

    const dispatch = useDispatch()
    const params: {id: string} = useParams()
    const id = params.id

    useEffect(() => {
        dispatch(fetchTweetData(id))
        return () => {
            dispatch(setTweetData(undefined))
        }
    }, [dispatch])

    if(!tweetData){
        return null
    }

    return (
        <div className='border-b-[1px] w-full h-auto hover:bg-[#f5f8fa]  p-4'>
            <div className='w-full flex items-center'>
                <div className='w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center overflow-hidden'>
                    {tweetData.user.avatarUrl
                      ?
                    <img src={`${tweetData.user.avatarUrl}`} alt="" />
                      :
                    <FaRegUser size={30} />
                    }
                    {/* <FaRegUser size={30} /> */}
                </div>
                <div className='pl-4'>
                    <div className='font-bold'>{tweetData.user.fullname}</div>
                    <div className='text-[#c3c3c3]'>@{tweetData.user.username}</div>
                </div>
            </div>
            <div className='w-full '>
                <div>
                    <p className='pt-4 text-2xl'>{tweetData.text}</p>
                </div>
                <div className='text-[#c3c3c3] w-full flex py-4'>
                    <div>{format(new Date(tweetData.createdAt), 'H:mm *')}</div>
                    <div>{format(new Date(tweetData.createdAt), 'dd MMM. yyyy')}</div>
                </div>
                <div className='flex justify-between pt-4 border-t-[1px]'>
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
    )
}

export default FullTweet