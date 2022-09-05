import React, { useEffect, useLayoutEffect, useRef } from 'react'

export const Test = () => {

  const helloRef = useRef(null) 
  useEffect(() => {
      console.log(helloRef)
      console.log('hello')
  })
  return (
    <div>
        <div ref={helloRef}>Helloooo</div>
        {/* <input type="text" onChange={() => console.log('hello')}/> */}
    </div>
  )
}

