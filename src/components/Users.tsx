import React from 'react'

// Icons
import { FiUserPlus } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { selectUsersItems } from '../store/ducks/users/selectors'

const Users = () => {
  const users = useSelector(selectUsersItems)

  return (
    <div className='w-full h-auto mt-5 bg-[#f2f1f1dc] rounded-lg overflow-hidden'>
        <div className='text-lg font-bold py-3 px-4 border-b-[1px] '>Кого читать</div>
        {
            users.map(() => (
                <div className='text-md font-medium p-2 px-4 border-b-[1px] flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='rounded-full w-[40px] h-[40px] overflow-hidden'>
                            <img className='w-full h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnq9pVEA16U0vH0nT0UeFY9vrTn99Za2a7QWub_dBpXSYTCZtBQULWaaRJ4ENFreEmPc&usqp=CAU' />
                        </div>
                        <div className='pl-[10px]'>
                            <div>Some User</div>
                            <div className='text-[#c3c3c3]'>@some_user</div>
                        </div>
                    </div>
                    <div className='px-[10px]'>
                        <div className='cursor-pointer'>
                            <FiUserPlus size={25} color={'#1d9bf0'} />
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Users