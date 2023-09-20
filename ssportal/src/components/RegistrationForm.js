"use client";

import { useRouter } from "next/navigation";
import styles from "../app/page.module.css"
import React, { useState } from "react"
import axios from "axios"
import Link from "next/link"
import {  toast } from "react-hot-toast"





export default function RegisterForm() {
  

  const [error,setError] = useState("")
  const [confirmPassword,setConfirmpassword] = useState("")
  const router = useRouter()
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        userName:""
    })
    const [loading,setLoading] = useState(false)



  const handleSubmit  = async (e)=>{
      e.preventDefault()

      if (!userName || !email || !password || !confirmPassword){
          setError("All fields are Required")
          return;
      }else if(user.password.length>8){
        setError("Short Password")
      }else if(user.password !==confirmPassword){
        setError("Passwords not Matched")
      }

      try {
        setLoading(true)
        const response =await axios.post('/api/users/signup', user)
        // console.log("SignUp success",response.data)
        router.push("/login")
    } catch (error) {
        // console.log("signup Failed",error)
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
  }

  return(
      <main className={styles.main}>
        <div className={styles.signupsetup}>
        <div className={styles.orangeline}></div>
        <div className={styles.signin}>  
          <form onSubmit={handleSubmit} className={styles.signupForm}>
          <h1 className={styles.signupHead}> SignUp </h1>
          <input
          id="userName" 
          value={user.userName}
            onChange={(e)=>setUser({...user,userName:e.target.value})} className={styles.signupPageInput} type="text"  placeholder="Username" required></input>
          <input
          id="email" 
          value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})} className={styles.signupPageInput} type="text"  placeholder="email" required></input>
        <input
          id="password" 
          value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})} className={styles.signupPageInput} type="password"  placeholder="password" required></input>
        <input
          id="confirmPassword" 
          value={confirmPassword}
            onChange={(e)=>setConfirmpassword(e.target.value)} className={styles.signupPageInput} type="password"  placeholder="Confirm Password" required></input>
          <button className={styles.signupButton} type="submit" >{loading?"Procssing...":"SignUP"}</button>

          {error && (
              <p className={styles.signupPageError}>
                  {error}
              </p>
        )}<p> Already have an account <Link href="/login"> LOGIN </Link> </p>
          </form>
        </div> 
        
        </div>  

      </main>
  )
}
