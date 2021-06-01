import React, { useState } from 'react'

export const Regi = (props) => {
    const [passw, setpassw] = useState("")
    const [cpassw, setcpassw] = useState("")
    

    let checkval=()=>passw===cpassw?props.addreg(passw):alert("Password does not match")
    return (
        <div className="container">
            <h2>Register</h2>
            <form className="border" onSubmit={e=>e.preventDefault()}>
                <div className="form-group">
                    <label >Email address</label><br/>
                    <input type="email"  aria-describedby="emailHelp" placeholder="Enter email"/>
                    <br/>
                    <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Name</label><br/>
                    <input type="password"  placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label >College/Organisaton</label><br/>
                    <input type="password"  placeholder="College/Organisaton"/>
                </div>
                <div className="form-group">
                    <label >Password</label><br/>
                    <input type="password" value={passw} onChange={e=>setpassw(e.target.value)}  placeholder="Password"/>
                </div>
                
                <div className="form-group">
                    <label >Confirm Password</label><br/>
                    <input type="password" value={cpassw} onChange={e=>setcpassw(e.target.value)} placeholder="Confirm Password"/>
                </div>
                
                <button type="submit" onClick={()=>checkval()} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
