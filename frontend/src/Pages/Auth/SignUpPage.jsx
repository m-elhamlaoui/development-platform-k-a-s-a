import SignUpForm from "../../Components/Auth/SignUpForm";
import { Link } from "react-router-dom";
import "./styles/auth.css";

const SignUpPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="form-title">Sign up with</h2>
        <SignUpForm />
        <p className="signup-prompt">
          Already have an account? <Link to="/login" className="signup-link">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
