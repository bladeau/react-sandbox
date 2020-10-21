import React from "react";
import userData from "./userData";

//Check if Object or Array
const x = userData;
// { a: 1, b: 2 };
const y = [1, 2, 3];

const checkObjOrArrayPrint = (
  <div>
    <b>Check if Object or Array:</b>
    {x.constructor.name === "Object" && <p>{x.constructor.name}</p>}
    {y.constructor.name === "Array" && <p>{y.constructor.name}</p>}
  </div>
);

//Filtering
let numbers = [1, 2, 3, 4, 5];

const isEven = (x) => x % 2 === 0;

const evenNumbers = numbers.filter(isEven);
const filterEvenNumbersPrint = (
  <div>
    <b>Filter only even Numbers:</b>
    <br />
    {evenNumbers.map((number) => {
      return <div id={number}> {number} </div>;
    })}
  </div>
);

//Reduce/Agg - Maximum
numbers = [12, 4, 2, 2435, 343431, 54353, 3345];
const maxNumberFunc = (currentMax, currentNumber) => {
  currentMax = Math.max(currentMax, currentNumber);
  return currentMax;
};

const maxNumberPrint = (
  <div>
    <b>Maximum:</b>
    <br />
    {numbers.reduce(maxNumberFunc)}
  </div>
);

//sorting
const sortAsc = (a, b) => {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
};

numbers = [1312, 4, 2, 2435, 3, 645, 3345];

const sortedNumbers = [...numbers].sort(sortAsc);

const sortedNumbersPrint = (
  <div>
    <b>Sorted Numbers:</b>
    <br />
    {sortedNumbers.map((number) => {
      return <div id={number}>{number}</div>;
    })}
  </div>
);

//Searching
const isMale = (record) => {
  const maleArray = ["Male"];
  return maleArray.includes(record.gender);
};

const firstMale = userData.find(isMale); // Find - faster than filter as returns first hit

const findMalePrint = (
  <div>
    <b>First male found -</b>
    <br />
    <b>Firstname:</b>
    {firstMale.first_name}
    <br />
    <b>Lastname:</b>
    {firstMale.last_name}
    <br />
    <b>Email:</b>
    {firstMale.email}
    <br />
    <b>Gender:</b>
    {firstMale.gender}
    <br />
    <b>IP Address:</b>
    {firstMale.ip_address}
    <br />

    <b>Index in Array:</b>
    {userData.findIndex(isMale)}
    <br />

    <b>Is Everyone male?</b>
    {userData.every(isMale).toString()}
    <br />

    <b>Are some people male:</b>
    {userData.some(isMale).toString()}
  </div>
);

//For Each (Functional approach)
numbers.forEach((element, index) => console.log(element, index));

//Push, pop, shift, unshift - 2020
const pushNumbers = numbers.push(2020);
const pushPrintNewArray = [...numbers];

const popNumber = numbers.pop();

const shiftNumbers = numbers.unshift(2020);
const shiftPrintNewArray = [...numbers];

const shiftNumber = numbers.shift();

const App = () => {
  return (
    <div>
      {checkObjOrArrayPrint}
      <br />
      {filterEvenNumbersPrint}
      <br />
      {maxNumberPrint}
      <br />
      {sortedNumbersPrint}
      <br />
      {findMalePrint}
      <br />
      <b>For each: see Console</b>
      <br /> <br />
      <b>Push, pop, shift, unshift - 2020</b>
      <br />
      <br />
      Push - {pushNumbers} records, new array is {pushPrintNewArray}
      <br />
      Pop - {popNumber}
      <br />
      Shift - {shiftNumbers} records, new array is {shiftPrintNewArray}
      <br />
      Shift - {shiftNumber}
    </div>
  );
};

export default App;
