import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import AdminHome from './AdminHome'
import AddStudent from './AddStudent'
import ViewAllStudents from './ViewAllStudents'
import './admin.css'

export default function AdminNavBar() 
{
    const navigate = useNavigate()

      const adminLogout = () => {
            sessionStorage.removeItem("isAdmin")
            navigate("/adminlogin")
            window.location.reload()
      }

  return (
    <div>

        <nav className='navbar'>
            <Link to="/admin/home">Home</Link>
            <Link to="/admin/addstudent">Add Student</Link>
            <Link to="/admin/viewallstudents">View All Students</Link>

        <button onClick={adminLogout} className="logout-btn">Logout</button>

        </nav>

     <Routes>
    
      <Route path="admin/home" element={<AdminHome/>}  />
      <Route path="admin/addstudent" element={<AddStudent/>}/>
      <Route path="admin/viewallstudents" element={<ViewAllStudents/>}/>

     </Routes>


    </div>
  )
}
