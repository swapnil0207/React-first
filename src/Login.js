import React, { useState } from 'react'
import {Regi} from './Regi.js';
export const Login = () => {
    const [passw, setpassw] = useState("")
    const [inlog, setinlog] = useState(false)
    
    let checkpas=()=>passw==="123"?alert("Login Success"):setinlog(true)

    return (
        <div className="container App-center App-header">
            <div className="container">
            {inlog?<Regi/>:
            <>
            <h2>Login</h2>
            <form className="border" onSubmit={e=>e.preventDefault()}>
            <div className="form-group">
                <label >Email address</label><br/>
                <input type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label >Password</label><br/>
                <input type="password" value={passw} onChange={e=>setpassw(e.target.value)}  placeholder="Password"/>
            </div>
            
            <button type="submit" onClick={()=>checkpas()} className="btn btn-primary">Submit</button>
        </form>
        </>
            }
        </div>
        </div>
    )
}
