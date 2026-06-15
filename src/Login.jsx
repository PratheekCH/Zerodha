import { useState } from "react"
import {z} from "zod"


let userschema=z.string().min(6,"username must need min 6characters").max(16,'max limit 16 characters')
let passwordchema=z.string().min(8,"username must need min 8characters").max(16,'max limit 16 characters')

function validate(schema,value){
  if(!value) return ""
 let result= schema.safeParse(value)
 if(result.success) return ""
 return result.error.issues[0].message
}

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    let senddetails=async (e)=>{
      e.preventDefault()
      let jwttoken=localStorage.getItem('token')

    let response=await fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
             "Content-Type": "application/json",
             authorization:`Bearer ${jwttoken}`
        },
        body:JSON.stringify({username,password}) 
      }
    )

    let data=await response.json()
    alert(data.msg)

    }
  return (
    <>
    <section style={{textAlign:"center"}}>
        <h1 class='text-red-400' >Login to your account</h1><br />
     <form onSubmit={senddetails} >
    <input  onChange={(e)=>{setusername(e.target.value)}}    type="text" placeholder="username"  /><br />
    <p>{validate(userschema,username)}</p>
    <input  onChange={(e)=>{setpassword(e.target.value)}}     type="text"  placeholder="password" /><br />
    <p>{validate(passwordchema,password)}</p>
    <button  class='bg-sky-400 rounded-b-md'   type="submit" >Login</button>
     </form>

    </section>
    </>
  )
}

export default Login