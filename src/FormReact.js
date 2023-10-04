import React, { useState } from 'react'

const FormReact = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const[allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = {email:email, password:password}
        setAllEntry([...allEntry, newEntry])
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
      <div>
        {
            allEntry.map((CurElem) => {
                return <h2>Email:{CurElem.email} & Password:{CurElem.password}</h2>
            }

            )
        }
      </div>
    </>
  )
}

export default FormReact
