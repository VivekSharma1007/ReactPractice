import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // provided an array


  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
     {people.map((person) => {
       const {id, name} = person;
       return(
         <div key={id} className='item'>
           <h4>{id} {name}</h4>
           <button onClick={() => removeItem(id)}>remove</button>
         </div>
       );
     })}
     <button className='btn' onClick={() => {setPeople([])}}>
       Clear All
     </button>
    </>
  );
};

export default UseStateArray;
