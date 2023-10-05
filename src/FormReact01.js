import React, { useState } from 'react'

const FormReact01 = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const[allEntry, setAllEntry] = useState([])

    
        const submitForm = (e) => {
            e.preventDefault()
            if(email && password) {    
                const newEntry = {id: new Date().getTime().toString(), email, password}
                setAllEntry([...allEntry, newEntry])

                //clear the filed of emmail and password 
                setEmail("")
                setPassword("")

            }
            else {
                alert("please fill the data")
        }
    }  

  return (
    <>
      <h3 className='h3style'>Hello This is my new Login Form</h3>
      <form action='' onSubmit={submitForm}>
        <div>
            <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' autoComplete='off' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            
            
        </div>

        <div>
            <label htmlFor='email'>Password</label>
                <input type='password' name='password' id='password' autoComplete='off' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                
        </div>

        <button type='submit'>Login</button>
      </form>

      <div className='entry'>
        {
            allEntry.map((CurElem) => {
                const{id, email, password} = CurElem
                return 
                <div className='detail' key={id}>
                    <h2>Email:{email} & Password:{password}</h2>
                </div>
            }

            )
        }
      </div>
    </>
  )
}

export default FormReact01
