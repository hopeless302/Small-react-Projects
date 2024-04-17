import React from 'react'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    try {
      await axios.post("http://localhost:7000/users", values);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <> 
    <div className='flex justify-center items-center'>
    <h1 className='my-2'>
          SignUp
        </h1>
    </div>
    <div className='border-2 border-black m-2 p-2 flex flex-row rounded'>
        <div className='border-2 border-black m-2 p-2 flex flex-col w-1/2 rounded'>
        <Formik
       initialValues={{ email: '', password: '', userName: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
            errors.password = 'Required';
          }
         if (!values.userName) {
            errors.userName = 'Required';
          }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         handleSubmit(values, { setSubmitting });
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <input className='border-2 border-black p-2 my-2 w-full rounded'
             type="text"
             name="userName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.userName}
             placeholder='Enter your Name'
           />
           {errors.userName && touched.userName && errors.userName}
           <input className='border-2 border-black p-2 my-2 w-full rounded'
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder='Enter your email'
           />
           {errors.email && touched.email && errors.email}
           <input className='border-2 border-black p-2 my-2 w-full rounded'
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
            placeholder='Enter your password'
           />
           {errors.password && touched.password && errors.password}
           <div className='flex flex-col'>
           <button type="submit" className='border-2 border-black my-2 p-2 rounded' disabled={isSubmitting}>
             Sign Up
           </button>
           <p>Already Have An Account ? <Link to="/">Sign In</Link></p>
           </div>
           
         </form>
       )}
     </Formik>
        </div>
        <div className='border-2 border-black m-2 p-2 flex flex-col w-1/2 rounded'>
            <img src='image.JPG' alt="banner" className='h-56 rounded' />
        </div>
    </div>
    </>
  )
}

export default SignUp