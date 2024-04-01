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
import React from "react";
import { useFormik } from "formik"; 
export default function Form() {
    const formik = useFormik({
      initialValues:{
        FirstName: "",
        LastName: "",
        Address: "",
        Country: "",
        City: "",
      },
      onSubmit: values =>{
        console.log("Form Data", values);
      }
    })
//  console.log("Form values", formik.values);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
    <form className=" bg-blue-200 p-10 rounded-lg shadow-lg space-x-2 space-y-7" onSubmit={formik.handleSubmit} >
        <div className="flex gap-3" id="FullName" >
          <label htmlFor="firstName">First Name:</label>
          <input className="rounded-sm" type="text" placeholder="Enter Your First Name" id="firstName" name="FirstName" value={formik.values.FirstName} onChange={formik.handleChange} />

          <label htmlFor="lastName">Last Name :</label>
          <input type="text" placeholder="Enter Your last Name" id="lastName" name="LastName" value={formik.values.LastName} onChange={formik.handleChange}/>
        </div>

        <div>
          <label htmlFor="Address">Address</label>
          <input type="text" placeholder="Your Address" id="Address" value={formik.values.Address} name="Address" onChange={formik.handleChange} />
        </div>

        <div id="Location">
          <label htmlFor="Country">Country</label>
          <input type="text" placeholder="Country Name" id="Country" value={formik.values.Country} name="Country" onChange={formik.handleChange}/>

          <label htmlFor="City">City</label>
          <input type="text" placeholder="City Name" id="City" value={formik.values.City} name="City" onChange={formik.handleChange} />
        </div>

        <div className="flex" id="radio">
          <label htmlFor="boy">Boy</label>
          <input type="radio" name="Gender" value="boy" id="boy" />
          <label htmlFor="girl">Girl</label>
          <input type="radio" name="Gender" value="Girl" id="girl" />
        </div>

        <button className="bg-blue-400 p-2 rounded-md shadow-md">Submit</button>
    </form>
    </div>
  );
}
