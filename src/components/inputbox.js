import React from 'react';
import 'tachyons';

const InputBox = ({ type, placeholder, onChange, isRequired }) => {
  return (
    <div className='pa2'>
      <input 
      className='pa3 ba b--green bg-lightest-blue' 
      type={type} 
      placeholder={placeholder}
      onChange={onChange}/>
    </div>
  );
};

export default InputBox;
