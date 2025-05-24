import { useState } from "react";

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        required
        value={value}
        onChange={onChange}
      />
      <i className="material-symbols-rounded">{icon}</i>

      {type === "password" && (
  <img
    src={isPasswordShown ? "/eye-off.png" : "/eye.svg"}
    alt="Toggle visibility"
    onClick={() => setIsPasswordShown((prev) => !prev)}
    style={{
      cursor: "pointer",
      width: "20px",
      position: "absolute",
      right: "0.93rem",
      top: "50%",
      transform: "translateY(-50%)"
    }}
    className="eye-icon"
  />
)}

    </div>
  );
};

export default InputField;