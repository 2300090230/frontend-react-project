//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter as Router} from "react-router-dom"
import NavBar from "./pages/NavBar"
import { useEffect, useState } from "react"
import AdminNavBar from "./admin/AdminNavBar"

function App()
{
   const [isAdmin,setisAdmin] = useState(false)
   const [isStudent,setisStudent] = useState(false)
   const [isFaculty,setisFaculty] = useState(false)    

   useEffect(() => {
      
    const adminStatus = sessionStorage.getItem("isAdmin") === "true"
    const studentStatus = sessionStorage.getItem("isStudent") === "true"
    const facultyStatus = sessionStorage.getItem("isFaculty") === "true"
  
    setisAdmin(adminStatus)
    setisStudent(studentStatus)
    setisFaculty(facultyStatus)

   }, []);

  return (
    <div>
     <h1 style={{textAlign:"center"}}>Student Certification Portal</h1> 

     <Router>
   
     {
         isAdmin ?
         <AdminNavBar/> :
         <NavBar/>
     }
       
     
     </Router>

    </div>
  )
}

export default App
