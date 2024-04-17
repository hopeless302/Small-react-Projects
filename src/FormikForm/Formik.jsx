import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Required'),
    }),
    onSubmit: values => {
      console.log('Form Data', values);
    },
  });

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      {!isLogin ? (
        <form onSubmit={formik.handleSubmit} className="p-10 border border-gray-300 rounded-lg shadow-lg flex flex-col bg-white">
          <h2 className="text-2xl font-bold mb-5">Registration</h2>

          {/* Registration Fields */}
          <input id="regFirstName" name="firstName" type="text" placeholder="First Name" {...formik.getFieldProps('firstName')} className="border p-2 rounded mb-2" />
          {formik.touched.firstName && formik.errors.firstName ? <div className="text-red-500">{formik.errors.firstName}</div> : null}

          <input id="regLastName" name="lastName" type="text" placeholder="Last Name" {...formik.getFieldProps('lastName')} className="border p-2 rounded mb-2" />
          {formik.touched.lastName && formik.errors.lastName ? <div className="text-red-500">{formik.errors.lastName}</div> : null}

          <input id="regEmail" name="email" type="email" placeholder="Email Address" {...formik.getFieldProps('email')} className="border p-2 rounded mb-2" />
          {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}

          <input id="regPassword" name="password" type="password" placeholder="Password" {...formik.getFieldProps('password')} className="border p-2 rounded mb-4" />
          {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register
          </button>
          <button type="button" onClick={handleSwitch} className="mt-4 text-blue-600 hover:text-blue-800">
            Already have an account? Login
          </button>
        </form>
      ) : (
        <div className="p-10 border border-gray-300 rounded-lg shadow-lg flex flex-col bg-white">
          <h2 className="text-2xl font-bold mb-5">Login</h2>
          {/* Login Form */}
          <form onSubmit={formik.handleSubmit}>

            <label htmlFor="loginEmail" className="font-semibold">Email Address: </label>
            <input
              id="loginEmail"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="border border-gray-300 p-2 rounded mt-1 mb-3"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="loginPassword" className="font-semibold">Password: </label>
            <input
              id="loginPassword"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="border border-gray-300 p-2 rounded mt-1 mb-3"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
              Submit
            </button>
          </form>

          <div>
            <p>Need to create an account? Sign Up</p>
            <button onClick={handleSwitch} className="mt-4 text-blue-600 hover:text-blue-800">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
