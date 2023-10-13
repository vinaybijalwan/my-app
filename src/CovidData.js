
import React, {useEffect, useState} from 'react'
import './coviddata.css' 
const CovidData = () => {
    const[covidCase, setCovidCase] = useState([])

    useEffect(() => {
        //Define  URL
        const url = "https://api.covidtracking.com/v1/us/daily.json"
        //Create the asynchronous function
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                
                setCovidCase(json);   // update value of advice state 
                } catch (error) {
                console.log("error", error);
                }
        }; fetchData();
    }, []) //[] this means call at once a time not call every render 

  return (
    <>
    <div className='CovidData'>
        <h1>Covid Data React </h1>
        <table className='center'>
            <tr>
                <th>Date</th>
                <th>Staus</th>
                <th>Positive</th>
                <th>Negative</th>
                <th>Pending</th>
            </tr>
            
                {
                    covidCase.map((CurElem) => {
                        return(
                            <tr>
                                <td>{CurElem.date}</td>
                                <td>{CurElem.states}</td>
                                <td className='positive'>{CurElem.positive}</td>
                                <td className='negative'>{CurElem.negative}</td>
                                <td className='pending'>{CurElem.pending}</td>
                            </tr>
                        )
                    }

                    )
                }
            
            
        </table>

        

    </div>

    </>
  )
}

export default CovidData