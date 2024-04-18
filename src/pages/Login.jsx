import { useState } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Navbar from "../layout/navbar";

//Form Code
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (values, setSubmitting) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <div className=" bg-slate-400 flex flex-col space-y-2 border border-indigo-600 p-4">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleClick(values, setSubmitting);
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <h1> Login</h1>
              <div className="flex flex-col ">
                <label htmlFor="email">Email</label>
                <input
                  className="border round shadow-md p-2"
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>
              <label htmlFor="password">Password</label>
              <input
                className="border round shadow-md p-2"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button
                className="bg-orange-300 rounded-md w-16 "
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
          )}
        </Formik>
        <p className="flex items-center">
          Don't Have an Account? Register <Link to="/auth/sign-up">here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
