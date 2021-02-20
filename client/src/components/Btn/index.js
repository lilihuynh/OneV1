import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const SignupButton = ({
  children,
  type,
  onClick,
  buttonStyle, 
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0];

  return (
    <Link to= '/sign-up' className='btn-mobile'>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick = {onClick}
      type = {type}
      >
        {children}
      </button>
    </Link>
  );
};

export const SigninButton = ({
  children,
  type,
  onClick,
  buttonStyle, 
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
  ? buttonStyle 
  : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize
  : SIZES[0];

  return (
    <Link to= '/sign-in' className='btn-mobile'>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick = {onClick}
      type = {type}
      >
        {children}
      </button>
    </Link>
  );
};

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually


function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}


// const STYLES = ['btn--primary', 'btn--outline'];

// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize,
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//   ? buttonStyle 
//   : STYLES[0]

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

//   return (
//     <link to='/SignUp' className='btn-mobile'>
//       <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
//       onClick={onClick}
//       type={type}
//       >
//         {children}
//       </button>
//     </link>
//   )
// };

export default DeleteBtn;

