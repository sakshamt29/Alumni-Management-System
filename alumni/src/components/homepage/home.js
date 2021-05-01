import React, { useState,useEffect } from 'react'
import './home.css'
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import { Link ,useHistory  } from 'react-router-dom';
import User_Nav from './../User_Nav/User_Nav'
const Home = () => {
 const { currentUser } = useAuth()
     const [person, setPerson] = useState("")
   const url = "http://localhost:5000/api/get/"+currentUser.email
   async function data(){
   axios.get(url)
      .then(res => {
         setPerson(res.data);               
      })
     }
      useEffect(() => {
    data();
},[]);
 return (
  <div>
    <User_Nav/>
    <h1 className='welcome'>Welcome <span className='welcome-3'>to IIITG Alumni,</span></h1>
    <h2 className='welcome-2'>{person.name} !</h2>
    {/* <strong>Email:</strong> {currentUser.email} */}

  </div>
 )
}

export default Home
