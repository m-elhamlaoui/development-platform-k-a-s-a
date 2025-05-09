import { GoogleLogin } from '@react-oauth/google';

const SocialLogin = () => {
    return (
      <div className="social-login">
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          render={(renderProps) => (
            <button 
              onClick={renderProps.onClick} 
              disabled={renderProps.disabled}
              className="social-button google-button"
            >
              {/* Logo Google seulement */}
              <img 
                src="public/google.svg" 
                alt="Google" 
                className="social-icon" 
              />
            </button>
          )}
        />
        
        
      </div>
    )
}

export default SocialLogin;