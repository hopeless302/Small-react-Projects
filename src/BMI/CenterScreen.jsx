import React, { useState } from "react";

function CenterScreen() {
  const [values, setValues] = useState({
    height: "",
    weight: "",
    bmi: null, // Added a new state property to store the BMI value
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightInMeters = values.height / 100; // assuming the height is in centimeters
    const bmi = values.weight / (heightInMeters * heightInMeters);
    setValues({ ...values, bmi }); // Update the state with the calculated BMI
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen  ">
      <form onSubmit={handleSubmit} className=" p-5 space-y-8 w-80 flex flex-col justify-center items-center bg-blue-400 rounded-md ">
        <div className="underline" id="Name">Talha Anwar</div>
        <label htmlFor="height">Height (cm):</label>
        <input className="rounded-sm"
          type="number"
          name="height"
          placeholder="Enter height in cm"
          value={values.height}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight (kg):</label>
        <input className="rounded-sm"
          type="number"
          name="weight"
          placeholder="Enter weight in kg"
          value={values.weight}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28">
          Calculate
        </button>
      </form>
      {/* Display the BMI score in a new div */}
      {values.bmi && (
        <div className="mt-8 ml-5 p-5 bg-blue-500 rounded-md">
          <h3>Your BMI is: {values.bmi.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default CenterScreen;

// import { useState } from "react";
// function BMICal() {
//   const [height, setHeight] = useState(0);
//   const [weight, setWeight] = useState(0);
//   const [Calculate, setCalculate] = useState(0);
//   function CalculateBMI() {
//     const Calculate = weight / (height * height);
//     setCalculate(Calculate);
//   }
//   return (
//     <div className=" flex items-center justify-center h-screen">
//       <div className="bg-lime-600 flex flex-col space-y-5 border p-5 rounded-md border-red-600">
//         Aamir Sohail
//         <input
//           onChange={(e) => setWeight(e.target.value)}
//           className="border round"
//           placeholder="Height"
//         />
//         <input
//           onChange={(e) => setHeight(e.target.value)}
//           className="border round"
//           placeholder="Weight"
//         />
//         <button className="bg-white rounded-sm" onClick={() => CalculateBMI()}>
//           Calculate
//         </button>
//       </div>
//       <div className="ml-5 bg-lime-600 flex flex-col space-y-5 border p-5 rounded-md border-red-600">
//         Your Score is:
//         <h1 className="bg-white p-2 rounded-md">{Calculate.toFixed(0)}</h1>
//         <button className="bg-white rounded-sm">Back</button>
//       </div>
//     </div>
//   );
// }
// export default BMICal;