import React, { useState } from 'react';
import Persons from './Persons';
import './styles.css';

export default function AppCompleteGuide() {
  const [userState, setUserState] = useState({
    persons: [
      { id: 'gdg', name: 'Max', age: 28 },
      { id: 'aere', name: 'Manu', age: 29 },
      { id: 'wevcv', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  });

  const nameChangedHandler = (event, id) => {
    const personIndex = userState.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...userState.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...userState.persons];
    persons[personIndex] = person;
    setUserState({ ...userState, persons: persons });
  };

  const deletePersonHandler = (personIndex) => {
    // In order to update state in an immutable fashion,
    // Copy array instead of point to existing
    // || userState.persons.slice()
    const persons = [...userState.persons];
    persons.splice(personIndex, 1); //remove selected entry
    console.log(userState.persons);
    setUserState({ ...userState, persons: persons });
  };

  const togglePersonsHandler = () => {
    setUserState({ ...userState, showPersons: !userState.showPersons });
  };

  let persons = null; //Instantiate render element
  if (userState.showPersons) {
    //Toggle Render Element based on state
    persons = (
      <div>
        {userState.persons.map((person, index) => (
          <Persons
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(e) => {
              nameChangedHandler(e, person.id);
            }}
            deletePersonHandler={() => deletePersonHandler(index)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <button onClick={togglePersonsHandler}>toggle hide</button>
      {persons}
    </div>
  );
}
