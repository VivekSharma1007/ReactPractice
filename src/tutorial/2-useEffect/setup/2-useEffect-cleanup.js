import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {


  const checkSize = () => {
    setValue(window.innerWidth);
  }
  const [value, setValue] = useState(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener('resize', checkSize); // make eventlistener every time
    // to avoid make a clean up fuction here

    return () => {
      console.log("clean up");
      window.removeEventListener('resize', checkSize);
    }
  }, [])  // or can be used empty dependancy


  return (
    <>
    <h2>{value}</h2>
    </>
  );
};

export default UseEffectCleanup;
