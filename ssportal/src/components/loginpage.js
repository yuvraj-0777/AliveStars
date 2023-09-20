"use client"

import React,{ useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import styles from "../app/page.module.css"
import { toast } from 'react-hot-toast'
import axios from "axios"


export default function Loginpage(){

    const [loading,setLoading] = useState(false)
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })
    const [error,setError] = useState("")
    const router = useRouter()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login",user)
            //console.log("Login Success",response.data)
            if(response.error === "Invalid Password"){
                setError("Wrong Email or Password")
            }else if(response.error==="User Does Not Exist"){
                setError("User Not Found")
            }
            toast.success("Login Success")
            router.push("/profile")
        } catch (error) {
            // console.log("Login Failed",error.message)
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
            <h1 className={styles.signupHead}> LogIN </h1>
        
            <input
          id="email" 
          value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})} className={styles.signupPageInput} type="text"  placeholder="email" required></input>
        <input
          id="password" 
          value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})} className={styles.signupPageInput} type="password"  placeholder="password" required></input>
        
            <button className={styles.signupButton} type="submit" >{loading?"Processing...":"Login"}</button>
            {error && 
                 <p className={styles.signupPageError}> {error} </p>

            }
            <p> Create an account <Link href="/signup"> SignUP </Link> </p>
            </form>
        </div>
        </div>
        </main>
    )
}