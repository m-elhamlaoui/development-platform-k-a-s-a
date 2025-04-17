import { useState } from "react";
import InputField from "./InputField";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    // You can now safely send fullName, email, phone, password to backend
    console.log({
      fullName,
      email,
      phone,
      password
    });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputField type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <InputField type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <InputField type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="login-button">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
