

import React, {useState} from 'react'

const App_03 = () => {
    const mybtn = {
        
    }

    const[inPutValue, setInPutValue] = useState()  //this state for take input value from user input
    const[inPutList, setInPutList] = useState([])  //This state for take value from inputvalue and save it input list
    
    const addInPutList = () =>{
        setInPutList([...inPutList, inPutValue])  //this is we using spread syntax to add new item in existing array. 
                                                  // add the 'input Value' to 'inPutList'
        setInPutValue("")  //clearthe input field by resttig "inPut Value"
    }

  return (
    <div>
       
        <input type='text' value={inPutValue} onChange={(e) => setInPutValue(e.target.value)}/>
        <button className="btn" style={{ size: '50px' }} onClick={addInPutList}></button>
        {/* now add above input list aary to page with using map function */}
        <ul>
            
        </ul>
    </div>
  )
}

export default App_03