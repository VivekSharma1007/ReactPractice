import React, { useState } from 'react';



const UseStateObject = () => {

  const [people, setPeople] = useState({ name: 'abc', city: 'nyc', msg: 'hii', });
  const changeMsg = () => {
    setPeople({...people,  msg: 'heloo' });
  }


  return( 
  <>
  <h3>{people.name}</h3>
  <h3>{people.city}</h3>
  <h3>{people.msg}</h3>
  <button onClick={() => changeMsg()} >change</button>
  </>
  );
};

export default UseStateObject;
