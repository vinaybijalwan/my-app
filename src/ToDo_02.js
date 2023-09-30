import { useState } from 'react';


function ToDo_02(){

    const[firstName, setfirstName] = useState();
    const[lastName, setlastName] = useState();
return(
       <div>
            <input type = "text" value={firstName} name="firstName" onChange={e => setfirstName(e.target.value)} />
            <input type = "text" value={lastName}  name="lastName"  onChange={e => setlastName(e.target.value)} />
            <h5>First name: {firstName}</h5>
            <h5>Last Name: {lastName}</h5>
       </div> 
    )
}

export default ToDo_02;