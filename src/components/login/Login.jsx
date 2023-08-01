import React from 'react'
import "./login.css"
import LOGO from "../../assets/amazon-logo2.png"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <Link to="/">
        <img src={LOGO} className='login__logo' alt="Amazon Logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__sign-in-button'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className='login__register-button'>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login
