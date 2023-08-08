import React from 'react'
import { useFormik } from 'formik'
import {fetchRegister} from '../../api'

function Register() {
    const formik=useFormik({
        initialValues:{
          email:"",
          password:"",
          phoneNumber:"",
          surName:"",
          name:"",
          active:false,
          role:"useer"
        },onSubmit: async(values,bag)=>{
            try {
              const registerData=await fetchRegister(values)
              console.log(registerData)
              
            } catch (error) {
              
            }
        }
      })
  return (
    <div className='container mt-5 justify-content-center d-flex'>
    <form onSubmit={formik.handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control w-100" name="name"   onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Sur Name</label>
    <input type="text" className="form-control w-100" name="surName"  placeholder="Enter SurName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.surName} />
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control w-100" name="email"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
    
  </div>
  <div className="form-group">
    <label >Phone Number</label>
    <input type="text" className="form-control w-100" name="phoneNumber" placeholder="Enter PhoneNumver" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneNumber} />
    
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

export default Register