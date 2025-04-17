import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type = 'button', // Default type to 'button'
  onClick,
  buttonStyle = STYLES[0], // Default buttonStyle to the first in the array
  buttonSize = SIZES[0],   // Default buttonSize to the first in the array
  buttonLink = '/sign-up'  // Default link if not passed
}) => {
  // Check if the passed buttonStyle is valid, else fall back to the first in STYLES
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // Check if the passed buttonSize is valid, else fall back to the first in SIZES
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // Directly use Link to make the button clickable, instead of wrapping a button with Link
    <Link to={buttonLink} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
