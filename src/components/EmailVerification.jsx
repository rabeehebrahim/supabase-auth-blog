import React from 'react'
import { Link } from 'react-router-dom'

function EmailVerification() {
  return (
    <div style={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h2>Please confirm your email by clicking the link in the confirmation mail.</h2>
        <h3>Go to <Link to={"/login"}>Login</Link></h3>
    </div>
  )
}

export default EmailVerification
