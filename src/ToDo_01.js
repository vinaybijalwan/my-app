import { useState } from 'react';


function ToDo_01(){

    const[firstName, setfirstName] = useState();
return(
    <div>
       <input type = "text" value={firstName} name="firstName" onChange={e => setfirstName(e.target.value)} />
       <h4>Text here : </h4><p>{firstName}</p>
    </div>
    )
}

export default ToDo_01;