// import "./App.css";
// import "./index.css";
// import logo from "../src/image/logo 2.png";
// import Button from "./commoncomponent/Button";
// import Input from "./commoncomponent/Input";
// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [emailTouched, setEmailTouched] = useState(false);

//   function onFocusHandler() {
//     setEmailTouched(true);
//   }

//   const validateEmail = (value) => {
//     if (!value) {
//       setEmailError("Email is required");
//     } else if (!isValidEmail(value)) {
//       setEmailError("Email formate is wrong");
//     } else {
//       setEmailError("");
//     }
//   };

//   const validatePassword = (value) => {
//     if (!value) {
//       setPasswordError("Password is required");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const isValidEmail = (value) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateEmail(email);
//     validatePassword(password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div class="max-auto  bg-backcolor min-h-screen">
//         <div class="flex items-center justify-center min-h-screen">
//           <div class="bg-white  rounded-md shadow-md">
//             <div class="p-11">
//               <div>
//                 <img src={logo} class="mx-auto"></img>
//               </div>

//               <div class="mt-12">
//                 <h1 class="text-3xl font-bold">Sign in</h1>
//                 <p class="text-newgray  text-xs leading-10">
//                   Don't have a comapany account?
//                   <a href="#" class="text-linkcolor">
//                     {" "}
//                     Create now
//                   </a>
//                 </p>
//               </div>

//               <div className="mt-12">
//                 <Input
//                   type="email"
//                   placeholder="Email address"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onBlur={() => validateEmail(email)}
//                   onFocus={onFocusHandler}
//                 />
//                 {emailError && <div className="text-red-400">{emailError}</div>}
//               </div>

//               <div className="mt-5">
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                   id="pass"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onBlur={() => validatePassword(password)}
//                   onFocus={onFocusHandler}
//                 />
//                 {passwordError && (
//                   <div className=" text-red-400">{passwordError}</div>
//                 )}
//               </div>

//               <div className="mt-7">
//                 <Button
//                   type="submit"
//                   variant="bg-bgbutton"
//                   hoverEffect="hover:bg-blue-800"
//                 >
//                   Sign up
//                 </Button>
//                 <Button
//                   type="submit"
//                   variant="bg-red-500"
//                   hoverEffect="hover:bg-red-900"
//                 >
//                   {" "}
//                   cancel
//                 </Button>
//               </div>

//               <div class="mt-3 text-center ">
//                 <a href="#" className="text-linkcolor">
//                   Forgot Password?
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default App;

import "./App.css";
import "./index.css";

import React from "react";

const App = () => {
  return (
    <div className="bg-red-200 min-h-screen">
      <div className="">
        <input
          type="text"
          name="tex"
          placeholder="Enter the name"
          className="border rounded-md w-1/2 h-10 mt-2 p-2"
        ></input>
        <input
          type="password"
          name="pass"
          placeholder="Enter the password"
          className="border rounded-md w-1/2 h-10 p-2"
        ></input>
      </div>
    </div>
  );
};
export default App;

// Teext box

// function App ()
//  {
//   return (
//     <div>
//       <Textbox id="username" placeholder="Enter the username" ></Textbox>
//       <Textbox id="password"  placeholder="Enther the password" ></Textbox>
//     </div>
//   )
// }
// export default App

// New Text box

// import './App.css'
// import './index.css'
// import React from 'react'
// import Input from './commoncomponent/Input'

// function App() {

//   return (

//       <Input
//         label="Name"
//         placeholder="Enter your name"
//       />

//   );
// }

// export default App;

// import React from 'react'
// import Button from './commoncomponent/Button'

// function App()  {
//   const handleclick=()=>
//   {
//     alert("Button Clicked")
//   }
//   return (
//     <div className="mt-3">
//       <Button variant="bg-green-500 " className="ml-2" onClick={handleclick} hoverEffect="hover:bg-green-800" icon={<i className="fas fa-check" />}>Green Button</Button>
//       <Button variant ='bg-red-500' className="ml-2" onClick={handleclick} hoverEffect="hover:bg-red-800" icon={<i className="fas fa-pencil-alt"></i>} >Red Button</Button>
//       <Button variant="bg-blue-500" className="ml-2"  onClick ={handleclick} disabled>Blue Button</Button>

//     </div>
//   )
// }
// export default App
