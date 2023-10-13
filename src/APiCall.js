

import React, {useState, useEffect }  from 'react'
import './advice.css' 
//we call api - link of example api - https://api.adviceslip.com/advice

// having data - {"slip": { "id": 60, "advice": "Fail. Fail again. Fail better."}}


const APiCall = () => {

    const [advice, setAdvice] = useState("")
   
    useEffect(() => {
        //Define  URL
        const url = "https://api.adviceslip.com/advice"
        //Create the asynchronous function
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                console.log(json.slip.advice)
                setAdvice(json.slip.advice);   // update value of advice state 
                } catch (error) {
                console.log("error", error);
                }
        }; fetchData();
    }, []) //[] this means call at once a time not call every render 

  return (
    <>
    <div className='advice'>
        <p>{advice}</p>
    </div>
    </>
  )
}

export default APiCall