import React, { useEffect, useState } from 'react'
import Tweet from '../components/Tweet'
import SideMenu from '../components/SideMenu'
import AddTweetForm from '../components/AddTweetForm'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../store/ducks/tweets/action'
import { selectIsTweetsLoading, selectTweetsItems } from '../store/ducks/tweets/selectors'


// Icons
import {BsSearch} from 'react-icons/bs'


export const Home = () => {
  const [activeInput, setActiveInput] = useState(false)
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])
  return (
      <div className='flex items-center justify-center'>
          <div className='grid grid-cols-12 gap-2 max-w-7xl'>
            
            <SideMenu />

            <div className='border-x-[1px] h-auto w-full col-span-10 md:col-span-10 lg:col-span-7'>
                <div className='w-full h-auto px-[10px] py-[10px] border-b-[1px]'>
                    <h3 className='font-bold text-lg'>Главная</h3>
                </div>
                <div className='border-b-[10px] w-full h-auto '>
                    <AddTweetForm />
                </div>
                {isLoading ? <div>Loading</div> : tweets.map(tweet => (
                    <Tweet 
                        key={tweet._id}
                        text={tweet.text} 
                        user={tweet.user} 
                    />
                ))}
                
                {/* <Tweet 
                    text={'React — это JavaScript-библиотека для создания пользовательских интерфейсов. Обратите внимание, что это именно библиотека, а не фреймворк. React часто называют фреймворком, но это ошибка. Во-первых, его использование ни к чему вас не обязывает, не формирует «фрейм» проекта. Во-вторых, React выполняет единственную задачу: показывает на странице компонент интерфейса, синхронизируя его с данными приложения, и только этой библиотеки в общем случае недостаточно для того, чтобы полностью реализовать проект.'} 
                    user={{fullname: 'Max Grid', username: 'gridisius', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8'}} 
                />
                <Tweet 
                    text={'React — это JavaScript-библиотека для создания пользовательских интерфейсов. Обратите внимание, что это именно библиотека, а не фреймворк. React часто называют фреймворком, но это ошибка. Во-первых, его использование ни к чему вас не обязывает, не формирует «фрейм» проекта. Во-вторых, React выполняет единственную задачу: показывает на странице компонент интерфейса, синхронизируя его с данными приложения, и только этой библиотеки в общем случае недостаточно для того, чтобы полностью реализовать проект.'} 
                    user={{fullname: 'Max Grid', username: 'gridisius', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8'}} 
                />
                <Tweet 
                    text={'React — это JavaScript-библиотека для создания пользовательских интерфейсов. Обратите внимание, что это именно библиотека, а не фреймворк. React часто называют фреймворком, но это ошибка. Во-первых, его использование ни к чему вас не обязывает, не формирует «фрейм» проекта. Во-вторых, React выполняет единственную задачу: показывает на странице компонент интерфейса, синхронизируя его с данными приложения, и только этой библиотеки в общем случае недостаточно для того, чтобы полностью реализовать проект.'} 
                    user={{fullname: 'Max Grid', username: 'gridisius', avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=8'}} 
                /> */}
            </div>
            


            <div className='h-[500px] w-full col-span-3 hidden lg:block px-[10px] py-[10px]'>
                <div className={`w-full h-[40px] rounded-3xl overflow-hidden outline-none flex items-center px-3 ${activeInput ? 'bg-white border-[1px] border-[#1d9bf0]' : 'bg-[#E6ECF0] border-[1px] border-[#0000]'}`}>
                    <BsSearch size={15} color={activeInput ? '#1d9bf0' : ''}/>
                    <input className='w-full h-full bg-inherit outline-none pl-3' placeholder='Поиск по Твиттеру' onBlur={() => setActiveInput(false)} onFocus={() => setActiveInput(true)}/>
                </div>
                <div className='w-full h-auto mt-5 bg-[#f6f6f6] rounded-lg overflow-hidden'>
                    <div className='text-lg font-bold py-3 px-4 border-b-[1px] '>Актуальные темы</div>
                    <div className='text-md font-medium p-2 px-4 border-b-[1px] hover:bg-[#f5f8fa] cursor-pointer'>
                        Киев
                        <span className='block text-sm font-normal text-[#c3c3c3]'>Твитов: 2500</span>
                    </div>
                    <div className='text-md font-medium p-2 px-4 border-b-[1px] hover:bg-[#f5f8fa] cursor-pointer'>
                        #коронавирус
                        <span className='block text-sm font-normal text-[#c3c3c3]'>Твитов: 3000</span>
                    </div>
                    <div className='text-md font-medium p-2 px-4 border-b-[1px] hover:bg-[#f5f8fa] cursor-pointer'>
                        #war
                        <span className='block text-sm font-normal text-[#c3c3c3]'>Твитов: 4000</span>
                    </div>
                </div>
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