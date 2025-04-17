import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Pages/Auth/styles/auth.css'
import App from './Pages/Auth/LoginPage.jsx' 
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="708051032750-n3cdiq7sb2ae9lefm150j6221l0euoe6.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>;
  </StrictMode>,
)
