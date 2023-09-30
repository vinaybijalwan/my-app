import { useState } from 'react';

function MyButton(){
    const[count, setCount] = useState(0);

    function clickHandler(){
        setCount(count + 2);
        
    }

    return(
        <>
        <button onClick={clickHandler}>Clicked me {count}</button>
        </>
    )
}
export default MyButton;