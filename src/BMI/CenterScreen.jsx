import React, { useState } from "react";

function CenterScreen() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [age, setAge] = useState("");

  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100; // assuming the height is in centimeters
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi);
    setAge(age);
    setShowResult(true); // Show the result screen
  };

  const handleGoBack = () => {
    setShowResult(false); // Show the form again
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {!showResult ? (
        // Form Screen
        <form
          onSubmit={handleSubmit}
          className="p-5 space-y-4 w-80 flex flex-col justify-center items-center bg-blue-300 rounded-md shadow-xl"
        >
          <div className="underline" id="Name">
            Talha Anwar
          </div>
          <div id="gender" className=" mr-12 space-x-4 ">
            <label htmlFor="Male" className="inline-flex items-center">
              <input
                type="radio"
                name="Gender"
                id="Male"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-900">
                Male
              </span>
            </label>
            <label htmlFor="Female" className="inline-flex items-center">
              <input
                type="radio"
                name="Gender"
                id="Female"
                className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-900">
                Female
              </span>
            </label>
          </div>

            <label htmlFor="age" className="mr-40 ">Age:</label>
            <input
              className="flex-2 rounded-sm appearance-none py-2 px-3"
              type="number"
              id="age"
              name="age"
              placeholder="Enter age"
              value={age}
              onChange={handleChangeAge}
            />


          <label htmlFor="height">Height (cm):</label>
          <input
            className="rounded-sm appearance-none py-2 px-3"
            type="number"
            name="height"
            placeholder="Enter height in cm"
            value={height}
            onChange={handleChangeHeight}
          />
          <label htmlFor="weight">Weight (kg):</label>
          <input
            className="rounded-sm appearance-none py-2 px-3"
            type="number"
            name="weight"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={handleChangeWeight}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28"
          >
            Calculate
          </button>
        </form>
      ) : (
        // Result Screen
        <div className="p-5 rounded-md flex flex-col items-center justify-center text-white ">
          <div className="py-10 px-14 bg-blue-400 rounded-md shadow-lg ">
            <h3>Your age is: {age}</h3>
            <h3>Your BMI is: {bmi.toFixed(2)}</h3>
            <button
              onClick={handleGoBack}
              className="mt-6 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full shadow-md "
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CenterScreen;

// import React, { useState } from "react";

// function CenterScreen() {
//   const [values, setValues] = useState({
//     height: "",
//     weight: "",
//     bmi: null, // Added a new state property to store the BMI value
//   });

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const heightInMeters = values.height / 100; // assuming the height is in centimeters
//     const bmi = values.weight / (heightInMeters * heightInMeters);
//     setValues({ ...values, bmi }); // Update the state with the calculated BMI
//   };

//   return (
//     <div className="flex justify-center items-center w-screen h-screen  ">
//       <form onSubmit={handleSubmit} className=" p-5 space-y-8 w-80 flex flex-col justify-center items-center bg-blue-400 rounded-md ">
//         <div className="underline" id="Name">Talha Anwar</div>
//         <label htmlFor="height">Height (cm):</label>
//         <input className="rounded-sm"
//           type="number"
//           name="height"
//           placeholder="Enter height in cm"
//           value={values.height}
//           onChange={handleChange}
//         />
//         <label htmlFor="weight">Weight (kg):</label>
//         <input className="rounded-sm"
//           type="number"
//           name="weight"
//           placeholder="Enter weight in kg"
//           value={values.weight}
//           onChange={handleChange}
//         />
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28">
//           Calculate
//         </button>
//       </form>
//       {/* Display the BMI score in a new div */}
//       {values.bmi && (
//         <div className="mt-8 ml-5 p-5 bg-blue-500 rounded-md">
//           <h3>Your BMI is: {values.bmi.toFixed(2)}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CenterScreen;

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
