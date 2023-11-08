
// import React from 'react'

//  const Button = (props) => {
//   const {children} = props
//   return (
   
//        <button className="w-full rounded-full bg-bgbutton text-white p-3">{children}</button>
      

//   )
// }
// export default Button

// import React from 'react'

//  function Button(props)
//  {
//   const {className,onClick,disabled,variant,icon,hoverEffect,children} = props;

//   const butttonclass= `bg-${variant}-500 hover:bg-${hoverEffect}-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:boder-none &{className}`;
//   return (
//     <button className={butttonclass} onClick={onClick} disabled={disabled}>{icon && <span className="mr-2">{icon}</span>}{children}</button>
//   )
// }
// export default Button






import React from 'react'

function Button(props)
 {

  const{variant,className,disabled,onClick,children,hoverEffect,icon} = props;
  const butttonc=`w-full rounded-full  text-white p-3 mt-2 ${variant} ${className}${disabled}${onClick} ${icon} ${hoverEffect} `

  return (
   <button className={butttonc} onClick={onClick} disabled={disabled} hoverEffect={hoverEffect} > {icon && <span className="mr-2">{icon}</span>}{children}</button>
  )
}
export default Button


// import React from 'react'

// function Button  ({variant,hover})  {
//   return (
//     <div>
//       <button type="button" className="w-full rounded-full  text-white p-3 mt-2" variant={variant}  hover={hover}> </button>
      
//       </div>
//   )
// }

// export default Button
