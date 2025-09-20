import React from 'react'

const Login = () => {
  return (
    <>
   <div className='login-page' style={{display: 'flex',gap:'200px', justifyContent: 'space-around', alignItems: 'center', height: '100vh'}}>
     <div>Pic</div>
    <div>

        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>

    </div>
   </div>
    
      </>
  )
}

export default Login