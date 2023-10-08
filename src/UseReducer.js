import React, {useReducer} from 'react'
import './UseReducer.css';


const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action)
    if(action.type === "INCREMENT"){
        return state + 1
    } 

    if(action.type === "DECREMENT"){
        return state - 1
    } 
    return state
    
}

const UseReducer = () => {
      
    const[state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='useReduce'>
        <p>{state}</p>
        <button className='btnstyle' onClick={() => dispatch({type: "INCREMENT"})}></button>
        <button className='btnstyle' onClick={() => dispatch({type: "DECREMENT"})}></button>
        </div>
    )
    }

export default UseReducer
