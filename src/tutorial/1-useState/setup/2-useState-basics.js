import React, { useState } from 'react';
// useState is the functio given by the react
// it has two parameters one is default value 2nd is the function to do something on that value

let title = 'Random Title';
const UseStateBasics = () => {
  // this usestatebasics must be start with capital letter
  // we can also use  React.useState without importing {useState}
  const [text, setText] = useState('Random Title'); // destructuring
  // text is variable and can be string, no or any value
  // set text is a function used to do anything on text
  const changeHandler = () => {
    if(text === 'Random Title')
    { 
      setText('Hello world');
    }
    else
    {
      setText('Random Title');
    }
  };

  
  return <React.Fragment>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={changeHandler}>Change the title</button>
  </React.Fragment>
};

export default UseStateBasics;
