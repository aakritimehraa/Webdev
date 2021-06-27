import React from 'react'

function Login() {
    return (
        <div className='login'>
            <h2>Login</h2>
   
             <p>Email</p>
             <input type='text' />
             <p>Password</p>
             <input type='text' />
             <br></br>
             <div>
             <button>Login</button>
              <span>or</span>
              <button>Sign up</button>
              </div>
        </div>
    )
}

export default Login
