import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show,setShow] = useState(false);
  return (
    <>
    <button className='btn' onClick={() => {setShow(!show)}}>Show/Hide</button>
    {/* show and hide elements */}
    <h1>{show && <Item ></Item>}</h1> 
    </>
  );
};


const Item = () => {

  const [title, setTitle] = useState(window.innerWidth);
  const checkSize = () => {
    setTitle(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  })
  return (
    <div>{title}</div>
  );
}

export default ShowHide;
