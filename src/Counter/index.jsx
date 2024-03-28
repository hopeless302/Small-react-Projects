import React from "react";
import { useState } from "react";
import RateButton from "./Counter";

export default function AddButton() {
  const [majorCount, setMajorCount] = useState(0);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);


  return (
    <div className="w-full container mx-auto py-8">
      <CounterNavbar basket={majorCount} />
      <RateButton
        count={count}
        setCount={() => {
          setCount(count + 1);
          setMajorCount(1)
        }}
        setSub={() => {
          setCount(count === 0 ? 0 : count - 1);

        }}
      />
      <RateButton count={count2} setCount={() => {
          setCount2(count2 + 1);
          setMajorCount(2)
        }}
        setSub={() => {
          setCount2(count2 === 0 ? 0 : count2 - 1);

        }} />
      <RateButton count={count3} setCount={() => {
          setCount3(count3 + 1);
          setMajorCount(3)
        }}
        setSub={() => {
          setCount3(count3 === 0 ? 0 : count3 - 1);

        }} />
    </div>
  );
}
const setMajorCount = (value) => {
  setMajorCount((prevMajorCount) => prevMajorCount + value);
};
const CounterNavbar = ({ basket }) => {
  return (
    <div className="flex items-end justify-end w-full">
      <p>{basket}</p>
    </div>
  );
};
