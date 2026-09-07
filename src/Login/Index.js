import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Index() {
    const[form,setForm]=useState({
        username:"",
        password:""
    })
    const handler=()=>{

    }
    const login=()=>{

    }
    const logout=()=>{

    }
  return (
    <div>
        <input type='text' name='username' placeholder='username' onChange={handler}/>
        <br/>
        <br/>
        <input type='text' name='password' placeholder='password' onChange={handler}/>
        <br/>
        <br/>
        <button>login</button>
        <br/>
        <Link to='/register'>create an account</Link>
    </div>
  )
}

export default Index