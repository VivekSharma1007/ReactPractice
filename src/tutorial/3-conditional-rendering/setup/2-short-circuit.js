import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';  // if first is truthy then return 1st otherwise return 2nd element
  // const secondValue = text && 'hello world'; // if first is truthy then only return 2nd otherwise nothing is returned
  const [text, setText]  = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
    <h1>{text || '2nd Parameter'}</h1>
    {/* first is false so nothing is returned */}
    <h2>{isError && 'There is an error'}</h2>
    <button className='btn' onClick={() => {setIsError(!isError)}}>Toggle</button>

    {
      isError ? <div>
         <p> this is shown when iserror is true</p>
      </div> : 
      <div>
         <p>this is shown when iserro is false</p>
      </div> 
    }
    </>
  );
};

export default ShortCircuit;
