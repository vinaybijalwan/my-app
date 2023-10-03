import React, {useState} from 'react'

const SpreadOpe = () => {
    const myBioData = [
            {id:0, myName:"Vinay", myAge:30, DOB:"1st July 1991"
        },{id:1, myName:"Vikash", myAge:27, DOB:"1st Jan 1995"

        }
        ]
console.log(myBioData)

const[myArray, setMyArray] = useState(myBioData)

const clearAll = () => {
  console.log("Clear All")
  setMyArray([])
}

const remElem = (id) => {
  console.log("This is Remove Element")
  console.log(id)
  
}


  return (

    <>
      {
        myArray.map((CurElem) => {
          return(
            <>
            <h1>Name: {CurElem.myName}  Age: {CurElem.myAge} DOB:{CurElem.DOB}</h1>
            <button onClick={(e) => (remElem(CurElem.id))}>Remove</button>
            </>
          )
        
        }
        

        )
      }
      <button onClick={clearAll}>ClearAll</button>
    </>
  )
}

export default SpreadOpe;