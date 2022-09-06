import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Tweet from '../../../components/Tweet'
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
    <div>
        <Tweet _id={tweetData?._id} user={tweetData?.user} text={tweetData?.text}/>
    </div>
    )
}

export default FullTweet