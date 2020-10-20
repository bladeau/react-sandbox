import React, { useState } from 'react';
import Persons from './Persons';
import './styles.css';

export default function App() {
  //www.mockaroo.com/
  https: const [userState, setUserState] = useState({
    persons: [
      { id: 1, name: 'Perkin', age: 38 },
      { id: 2, name: 'Fairfax', age: 33 },
      { id: 3, name: 'Ninette', age: 38 },
      { id: 4, name: 'Wadsworth', age: 42 },
      { id: 5, name: 'Maximilianus', age: 28 },
      { id: 6, name: 'Cornall', age: 68 },
      { id: 7, name: 'Tulley', age: 40 },
      { id: 8, name: 'Shanan', age: 51 },
      { id: 9, name: 'Alaster', age: 55 },
      { id: 10, name: 'Joaquin', age: 30 },
      { id: 11, name: 'Pammy', age: 56 },
      { id: 12, name: 'Bernie', age: 46 },
      { id: 13, name: 'Feliza', age: 59 },
      { id: 14, name: 'Germaine', age: 62 },
      { id: 15, name: 'Jedidiah', age: 46 },
      { id: 16, name: 'Dugald', age: 76 },
      { id: 17, name: 'Elijah', age: 28 },
      { id: 18, name: 'Kittie', age: 65 },
      { id: 19, name: 'Ignacio', age: 43 },
      { id: 20, name: 'Marney', age: 73 },
      { id: 21, name: 'Enriqueta', age: 31 },
      { id: 22, name: 'Zara', age: 43 },
      { id: 23, name: 'Juan', age: 63 },
      { id: 24, name: 'Alfred', age: 23 },
      { id: 25, name: 'Mal', age: 33 },
      { id: 26, name: 'Myca', age: 23 },
      { id: 27, name: 'Thedrick', age: 68 },
      { id: 28, name: 'Sunshine', age: 70 },
      { id: 29, name: 'Rea', age: 79 },
      { id: 30, name: 'Hilton', age: 41 }
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
