import React, { useEffect, useState } from 'react'
import { Route } from 'react-router'
import Tweet from '../../components/Tweet'
import Tags from '../../components/Tags'
import SideMenu from '../../components/SideMenu'
import AddTweetForm from '../../components/AddTweetForm'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../store/ducks/tweets/action'
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors'


// Icons
import {BsSearch} from 'react-icons/bs'
import BackButton from '../../components/BackButton'
import FullTweet from './components/FullTweet'




export const Home = () => {
  const [activeInput, setActiveInput] = useState(false)
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)
  
  console.log(tweets, 'hello tweets')

  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])
  return (
      <div className='flex items-center justify-center'>
          <div className='grid grid-cols-12 gap-2 max-w-7xl'>
            
            <SideMenu />

            <div className='border-x-[1px] h-auto w-full col-span-10 md:col-span-10 lg:col-span-7'>
                <div className='flex w-full h-auto px-[10px] py-[10px] border-b-[1px]'>
                    <Route path={'/home/:any'} >
                        <BackButton />
                    </Route>
                    <Route path={[`/home`, `/home/search`]} exact>
                        <h3 className='font-bold text-lg'>Твиты</h3>
                    </Route>
                    <Route path={'/home/tweet'}>
                        <h3 className='font-bold text-lg'>Твитнуть</h3>
                    </Route>
                </div>


                <Route path={[`/home`, `/home/search`]} exact>
                    <div className='border-b-[10px] w-full h-auto '>
                        <AddTweetForm />
                    </div>
                </Route>
                <Route path={`/home`} exact>
                    {isLoading ? <div>Loading</div> : tweets.map(tweet => (
                        <Tweet 
                            _id={tweet._id}
                            key={tweet._id}
                            text={tweet.text} 
                            createdAt={tweet.createdAt}
                            user={tweet.user} 
                        />
                    ))}
                </Route>
                <Route path={'/home/tweet/:id'} component={FullTweet} exact>

                </Route>
            </div>
            


            <div className='h-[500px] w-full col-span-3 hidden lg:block px-[10px] py-[10px]'>
                <div className={`w-full h-[40px] rounded-3xl overflow-hidden outline-none flex items-center px-3 ${activeInput ? 'bg-white border-[1px] border-[#1d9bf0]' : 'bg-[#E6ECF0] border-[1px] border-[#0000]'}`}>
                    <BsSearch size={15} color={activeInput ? '#1d9bf0' : ''}/>
                    <input className='w-full h-full bg-inherit outline-none pl-3' placeholder='Поиск по Твиттеру' onBlur={() => setActiveInput(false)} onFocus={() => setActiveInput(true)}/>
                </div>
                <Tags />
                <div className='w-full h-auto mt-5 bg-[#f2f1f1dc] rounded-lg overflow-hidden'>
                    <div className='text-lg font-bold py-3 px-4 border-b-[1px] '>Кого читать</div>
                    <div className='text-md font-medium p-2 px-4 border-b-[1px]'>
                        Киев
                        <span className='block text-sm font-normal text-[#c3c3c3]'>Твитов: 2500</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

// export default Home