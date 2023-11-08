// import React from 'react'

// function Textbox  ( props)  {

//     const{id,placeholder,label,value,change,className,focus} = props;
//     const textbutton=`w-1/2 border rounded-md border  mr-2 p-3 mt-2 ${id} ${className}${label}}${placeholder} ${value} ${focus} ${change} ${focus}`
//   return (
//     <input className={textbutton} value={value} placeholder={placeholder} id={id} />
//   )
// }
// export default Textbox

import React from "react";

const Input = ({ id, type, label, placeholder, value, onChange, onBlur }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="input"
      >
        {label}
      </label>
      <input
        className=" border outline-none  focus:border-blue-600  bg-boxbg w-full rounded-lg p-3 text-xs text-newgray font-medium"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
