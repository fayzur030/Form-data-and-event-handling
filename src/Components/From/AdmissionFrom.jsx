import React, { Fragment, useState } from 'react'

const AdmissionFrom = () => {  const [data , setData] = useState({})

  const changeHandler = (e) =>{
    const {name , value} = e.target
    setData({...data , [name]:value})
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <Fragment>
    <h1 className='admission-from'>Admission From</h1>
    <div className='body' >
    <form className='container' onSubmit={submitHandler}>
      <h1 className='login-title'>Login</h1>
      <section className='input-box'>
        <input type="text" name='username' placeholder='Username' required onChange={changeHandler}/>
      </section>
      <section className='input-box'>
        <input type="password" placeholder='Password'  name='password'required onChange={changeHandler}/>
      </section>
      <section className='remember-forgot-box'>
        <div className='remember-me'>
          <input type="checkbox" name='remember-me' id='remember-me' />
          <label  htmlFor='remember-me'>
            <h5>Remember me</h5>
          </label>
        </div>
        <a className='forgot-password' href='#'>
          <h5>Forgot password</h5>
        </a>
      </section>
      <button className='login-button' type='submit'>Login</button>
      <h5 className='dont-have-an-account'>Don't have an account?
        <a href="#"><b>Register</b></a>
      </h5>
    </form>
    </div>
    </Fragment>
  )
}

export default AdmissionFrom
