import React, {useState} from 'react'

const UseStateAarray = () => {

    const myBioData =[
        {
            id:0, myName:"Vinay", myAge:30
        }, {
            id:1, myName:"Vikash", myAge:26
        }, {
            id:2, myName:"Rakesh", myAge:34
        }

    ]
    console.log(myBioData)
    const[myArray, setMyArray] = useState(myBioData)

    const clearArray = () =>{
        setMyArray([])
    }



  return (
    <>
      {
        myArray.map((curElem) => <h2> Name:{curElem.myName} & {curElem.myAge} </h2>
           
        

        )
      }
      <button onClick={clearArray}>Clear</button>


    </>
  )
}

export default UseStateAarray
