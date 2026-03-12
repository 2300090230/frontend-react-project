import React, { useState } from 'react'
import axios from "axios"
import './admin.css'

export default function AddStudent() 
{
   const [formdata,setFormData] = useState({
       id:"",
       name:"",
       gender:"",
       department:"",
       email:"",
       contact:"",
       password:""
   })
   const [message,setMessage] = useState("")
   const [error,setError] = useState("")

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({...formdata,[name]:value})
  }

    const handleSubmit = async (e) => {
      try
      {
       e.preventDefault()
       const response = await axios.post("http://localhost:1235/adminapi/addstudent",formdata)
       if(response.status === 201)
       {
        setError("")
        setMessage(response.data)
        setFormData({
       id:"",
       name:"",
       gender:"",
       department:"",
       email:"",
       contact:"",
       password:""
   })
       }

      }
      catch(err)
      {
         setMessage("")
         setError(err.message)
         setFormData({
       id:"",
       name:"",
       gender:"",
       department:"",
       email:"",
       contact:"",
       password:""
   })
      }
    }

  return (
    <div className="form-container">
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
  
      <h3 className="form-title">Add Student</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input type="number" name="id" value={formdata.id} required onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formdata.name} required onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" required onChange={handleChange}>
            <option value="">---Select---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select name="department" required onChange={handleChange}>
            <option value="">---Select---</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formdata.email} required onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input type="number" name="contact" value={formdata.contact} required onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formdata.password} required onChange={handleChange}/>
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-btn">Add</button>
          <button type="reset" className="reset-btn">Clear</button>
        </div>
      </form>
    </div>
  )
}
