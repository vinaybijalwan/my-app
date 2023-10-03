
import React, {useState} from 'react'

const ToDoRemove = () => {

  const myBioData =[
      {
          id:0, myName:"Vinay", myAge:30, myLocation:"Haridwar"
      }, {
          id:1, myName:"Vikash", myAge:26, myLocation:"UKI"
      }, {
          id:2, myName:"Rakesh", myAge:34, myLocation:"DDN"
      }

    ] 
  const[myArray, setMyArray] = useState(myBioData)  

  console.log(myArray)      
    
  const removeElem = (id) => {
    console.log(id);
    const myNewArray = myArray.filter((CurElem) => {
      return CurElem.id !==id
    }

    )
    setMyArray(myNewArray)
  }

  
        
    return (
        <>
        <h1>This is New ToDo Remove App</h1>
        {
          myArray.map((CurElem) => {
            return (
              
              <h4>Name: {CurElem.myName}, Age: {CurElem.myAge} & Location: {CurElem.myLocation}
              <button className='btnRemove' onClick={ () => removeElem(CurElem.id)}>Remove</button>
              </h4>
              
              
            )
          }

          )
        }
        <button>ClearAll</button>
        </>
        )
}

export default ToDoRemove;
