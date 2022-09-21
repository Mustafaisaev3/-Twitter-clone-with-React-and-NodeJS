import React, {useState, useRef, ReactElement} from 'react'
import useOnClickOutside from '../utils/use-click-outside'
import {BsThreeDotsVertical} from 'react-icons/bs'


const TweetItemDropdown = ({children}: {children?: any}) => {
  const [openTweetDropdow, setOpenTweetDropdow] = useState(false)

  //Handle ouside click
  const dropdownRef = useRef(null)
  useOnClickOutside(dropdownRef, () => setOpenTweetDropdow(false))

  const handleTweetDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpenTweetDropdow(true)
  }

  return (
    <>
        <div onClick={(e) => handleTweetDropdownClick(e)} className={'relative'}>
            <div className='p-2 hover:bg-[#f5f8fa] rounded-full overflow-hidden'>
                <BsThreeDotsVertical size={20} />
            </div>
            {openTweetDropdow && <div ref={dropdownRef} className='absolute bg-white top-0 left-0 rounded w-auto'>
                {children}
            </div>
        }
        </div>
    </>
  )
}

export default TweetItemDropdown