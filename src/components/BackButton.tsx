import React from 'react'
import {BiLeftArrowAlt} from 'react-icons/bi'
import { useHistory } from 'react-router'

const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory()

  const handleBackClick = () => {
    history.goBack()
  }
  return (
    <button onClick={handleBackClick} className='mr-2'>
        <BiLeftArrowAlt size={30} color={'#1d9bf0'}/>
    </button>
  )
}

export default BackButton