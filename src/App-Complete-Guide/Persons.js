import React from 'react';
const Persons = (props) => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age} </p>
      <input type="text" onChange={props.changed} value={props.name} />

      <button onClick={props.deletePersonHandler}>Delete</button>
    </div>
  );
};

export default Persons;
