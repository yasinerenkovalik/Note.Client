import React from 'react'
import {useFormik} from 'formik'
import  { fetchLogin } from '../../api'
import {useNavigate, Router,Switch,Route,Link, Routes} from "react-router-dom";


function Login() {
  const navigation=useNavigate();
  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
    },onSubmit: async(values,bag)=>{
        try {
          const registerData=await fetchLogin(values)
          localStorage.setItem('token',registerData)
          console.log(registerData)
          if(registerData!=null){
            navigation("/profil")

          }
        } catch (error) {
          console.log(error)
        }
    }
  })

  return (
    <div className='container mt-5 justify-content-center d-flex'>
    <form onSubmit={formik.handleSubmit}> 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control w-100" name="email"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
    
  </div>
 
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control w-100" name='password'  placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
  </div>

  <button type="submit" className="btn btn-primary mt-5">Submit</button>
</form>
</div>
  )
}

export default Login