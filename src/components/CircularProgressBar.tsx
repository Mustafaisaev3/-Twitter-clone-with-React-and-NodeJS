import React from 'react'

const CircularProgressBar = ({textLength}: {textLength: number}) => {
    let circleData = {
        radius: 10,
        getperimetr () {
            return 2 * Math.PI * this.radius
        },
        getStrokeLength(){
          return  this.getperimetr() / 280 * textLength
        }
    }
  return (
    <svg className='rotate-[-90deg]' width={70} height={50}>
        <circle r={circleData.radius} fill='none' cx={'50%'} cy={'50%'} stroke={textLength >= 280 ? 'red' : '#1d9bf0'} strokeWidth={3}  stroke-dasharray={circleData.getperimetr()}/>
        <circle r={circleData.radius} fill='none' cx={'50%'} cy={'50%'} stroke={'#cfecff'} strokeWidth={3}  stroke-dasharray={circleData.getperimetr()}  strokeDashoffset={-circleData.getStrokeLength()}/>
    </svg>
  )
}

export default CircularProgressBar