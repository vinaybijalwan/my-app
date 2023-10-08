// Clean up 


import React, { useEffect, useState } from 'react'

const UseEffect_02 = () => {
    
    const[widthCount, setWidthCount] = useState(window.screen.width)

    const actualWidth = () => {
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }

    useEffect( () => {
        window.addEventListener("resize", actualWidth)
        return () => {
            window.removeEventListener("resize", actualWidth)  // this cleanup function that remove all stored 
        }
    }

    )

  return (
    <div>
      <h1>The Actual Size of Window Screen</h1>
      <p>{widthCount}</p>
    </div>
  )
}

export default UseEffect_02
