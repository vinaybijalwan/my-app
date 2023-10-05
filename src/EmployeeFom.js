
import React, { useState } from 'react'

const EmployeeFom = () => {

    const initValue = {
        fname: '',
        lname: '',
        designation: '',
        dob: ''
    }
    const[allEntry, setAllEntry] = useState(initValue)
    
    const handleChange = (e) => {
        
        setAllEntry({ ...allEntry, [e.target.name]: e.target.value });
      };

      const[allNewEntry, setAllNewEntry] =useState([])

      const submitEmp = (e) => {
        e.preventDefault()
        const newEntry = {allEntry}
        setAllNewEntry(...allNewEntry, newEntry)
      }
  return (

    <>
        <h4>Employee Registration Form</h4>
        <form className='mainFrom' action='' onSubmit={submitEmp}>
            <div className='empForm'>
                <label htmlFor="fname">First Name:</label>
                <input type='text' name='fname' id='fname'
                value={allEntry.fname}
                onChange={handleChange}
                />
            </div>

            <div className='empForm'>
                <label htmlFor="lname">Last Name:</label>
                <input type='text' name='lname' id='lname'
                value={allEntry.lname}
                onChange={handleChange}
                />
            </div>

            <div className='empForm'>
                <label htmlFor="designation">Designation:</label>
                <input type='text' name='designation' id='designation' 
                value={allEntry.designation}
                onChange={handleChange}
                />
            </div>

            <div className='empForm'>
                <label htmlFor="dob">Date of Birth:</label>
                <input type='date' name='dob' id='dob' 
                value={allEntry.dob}
                onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>

    </>
  )
}

export default EmployeeFom