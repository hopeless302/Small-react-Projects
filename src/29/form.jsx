// import React from "react";
// import { useState } from "react";
// export default function Form() {

//  const [data, setData] =  useState({
//     FirstName:"",
//     LastName: "",
//     Address: "",
//     Country:"",
//     City:"",
//   })

//   const getValue = (e) => {
//     setData({...data, [e.target.name]: e.target.value})
//   }
//     const handleSubmit = (e) =>{
//       e.preventDefault();
//       console.log(data)
//     }
//   const {FirstName, LastName, Address, Country, City} = data;
//   return (
//     <div className="flex justify-center items-center w-screen h-screen">
//     <form className=" bg-blue-200 p-10 rounded-lg shadow-lg space-x-2 space-y-7" onSubmit={handleSubmit}>
//         <div className="flex gap-3" id="FullName" >
//           <label htmlFor="firstName">First Name:</label>
//           <input className="rounded-sm" type="text" placeholder="Enter Your First Name" id="firstName" name="FirstName" value={FirstName} onChange={getValue} />

//           <label htmlFor="lastName">Last Name :</label>
//           <input type="text" placeholder="Enter Your last Name" id="lastName" name="LastName" value={LastName} onChange={getValue}/>
//         </div>

//         <div>
//           <label htmlFor="Address">Address</label>
//           <input type="text" placeholder="Your Address" id="Address" value={Address} name="Address" onChange={getValue} />
//         </div>

//         <div id="Location">
//           <label htmlFor="Country">Country</label>
//           <input type="text" placeholder="Country Name" id="Country" value={Country} name="Country" onChange={getValue}/>

//           <label htmlFor="City">City</label>
//           <input type="text" placeholder="City Name" id="City" value={City} name="City" onChange={getValue} />
//         </div>

//         <div className="flex" id="radio">
//           <label htmlFor="boy">Boy</label>
//           <input type="radio" name="Gender" value="boy" id="boy" />
//           <label htmlFor="girl">Girl</label>
//           <input type="radio" name="Gender" value="Girl" id="girl" />
//         </div>

//         <button className="bg-blue-400 p-2 rounded-md shadow-md">Submit</button>
//     </form>
//     </div>
//   );
// }


// import React from "react";
// import { useFormik } from "formik"; 
// export default function Form() {

//   const initialValues = {
//     FirstName: "",
//     LastName: "",
//     Address: "",
//     Country: "",
//     City: ""
//   }

//   const onSubmit = values =>{
//     console.log("Form Data", values);
//   }
//   const validate = values =>{
//     let errors = {}
//     if(!values.FirstName){
//       errors.FirstName = "Required"
//     }
//     if(!LastName.LastName){
//       errors.LastName = "Last Name required"
//     }
//     if(!LastName.Address){
//       errors.Address = "Address is required"
//     }
//     if(!LastName.Country){
//       errors.Country = "Country Name required"
//     }
//     if(!LastName.City){
//       errors.City = "City Name required"
//     }
//     return errors;
//   }
//     const formik = useFormik({
//       initialValues,
//       onSubmit,
//       validate
//     })
// //  console.log("Form values", formik.values);
//   return (
//     <div className="flex justify-center items-center w-screen h-screen">
//     <form className=" bg-blue-200 p-10 rounded-lg shadow-lg space-x-2 space-y-7" onSubmit={formik.handleSubmit} >
//         <div className="flex gap-3" id="FullName" >
//           <label htmlFor="firstName">First Name:</label>
//           <input className="rounded-sm" type="text" placeholder="Enter Your First Name" id="firstName" name="FirstName" value={formik.values.FirstName} onChange={formik.handleChange} />

//           <label htmlFor="lastName">Last Name :</label>
//           <input type="text" placeholder="Enter Your last Name" id="lastName" name="LastName" value={formik.values.LastName} onChange={formik.handleChange}/>
//         </div>

//         <div>
//           <label htmlFor="Address">Address</label>
//           <input type="text" placeholder="Your Address" id="Address" value={formik.values.Address} name="Address" onChange={formik.handleChange} />
//         </div>

//         <div id="Location">
//           <label htmlFor="Country">Country</label>
//           <input type="text" placeholder="Country Name" id="Country" value={formik.values.Country} name="Country" onChange={formik.handleChange}/>

//           <label htmlFor="City">City</label>
//           <input type="text" placeholder="City Name" id="City" value={formik.values.City} name="City" onChange={formik.handleChange} />
//         </div>

//         <div className="flex" id="radio">
//           <label htmlFor="boy">Boy</label>
//           <input type="radio" name="Gender" value="boy" id="boy" />
//           <label htmlFor="girl">Girl</label>
//           <input type="radio" name="Gender" value="Girl" id="girl" />
//         </div>

//         <button className="bg-blue-400 p-2 rounded-md shadow-md">Submit</button>
//     </form>
//     </div>
//   );
// }

import React from "react";
import { useFormik } from "formik";

export default function Form() {
  const initialValues = {
    FirstName: "",
    LastName: "",
    Address: "",
    Country: "",
    City: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.FirstName) {
      errors.FirstName = "First Name is required";
    }

    if (!values.LastName) {
      errors.LastName = "Last Name is required";
    }

    if (!values.Address) {
      errors.Address = "Address is required";
    }

    if (!values.Country) {
      errors.Country = "Country is required";
    }

    if (!values.City) {
      errors.City = "City is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form
        className="bg-blue-200 p-10 rounded-lg shadow-lg space-x-2 space-y-7"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex gap-3" id="FullName">
          <label htmlFor="firstName">First Name:</label>
          <input
            className={`rounded-sm ${
              formik.errors.FirstName && formik.touched.FirstName
                ? "border-red-500"
                : ""
            }`}
            type="text"
            placeholder="Enter Your First Name"
            id="firstName"
            name="FirstName"
            value={formik.values.FirstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.FirstName && formik.touched.FirstName && (
            <div className="text-red-500">{formik.errors.FirstName}</div>
          )}
          <label htmlFor="lastName">Last Name :</label>
          <input
            className={`${
              formik.errors.LastName && formik.touched.LastName
                ? "border-red-500"
                : ""
            }`}
            type="text"
            placeholder="Enter Your last Name"
            id="lastName"
            name="LastName"
            value={formik.values.LastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.LastName && formik.touched.LastName && (
            <div className="text-red-500">{formik.errors.LastName}</div>
          )}
        </div>
        <div>
          <label htmlFor="Address">Address</label>
          <input
            className={`${
              formik.errors.Address && formik.touched.Address
                ? "border-red-500"
                : ""
            }`}
            type="text"
            placeholder="Your Address"
            id="Address"
            value={formik.values.Address}
            name="Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Address && formik.touched.Address && (
            <div className="text-red-500">{formik.errors.Address}</div>
          )}
        </div>
        <div id="Location">
          <label htmlFor="Country">Country</label>
          <input
            className={`${
              formik.errors.Country && formik.touched.Country
                ? "border-red-500"
                : ""
            }`}
            type="text"
            placeholder="Country Name"
            id="Country"
            value={formik.values.Country}
            name="Country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Country && formik.touched.Country && (
            <div className="text-red-500">{formik.errors.Country}</div>
          )}
          <label htmlFor="City">City</label>
          <input
            className={`${
              formik.errors.City && formik.touched.City ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="City Name"
            id="City"
            value={formik.values.City}
            name="City"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.City && formik.touched.City && (
            <div className="text-red-500">{formik.errors.City}</div>
          )}
        </div>
        <div className="flex" id="radio">
          <label htmlFor="boy">Boy</label>
          <input type="radio" name="Gender" value="boy" id="boy" />
          <label htmlFor="girl">Girl</label>
          <input type="radio" name="Gender" value="Girl" id="girl" />
        </div>
        <button className="bg-blue-400 p-2 rounded-md shadow-md">
          Submit
        </button>
      </form>
    </div>
  );
}
