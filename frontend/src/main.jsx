import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import { StrictMode } from 'react';  
import { createRoot } from 'react-dom/client';  
import App from './App.jsx';  
import './Pages/Auth/styles/auth.css';  
import { GoogleOAuthProvider } from '@react-oauth/google';  
import './services/AxiosInterceptor'; // Add this line to import the axios interceptor  
  
createRoot(document.getElementById('root')).render(  
  <StrictMode>  
    <GoogleOAuthProvider clientId="708051032750-n3cdiq7sb2ae9lefm150j6221l0euoe6.apps.googleusercontent.com">  
      <App />  
    </GoogleOAuthProvider>  
  </StrictMode>,  
)