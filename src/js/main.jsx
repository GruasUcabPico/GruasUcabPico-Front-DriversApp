import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

//import { AuthProvider } from "react-auth-kit";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home/>
    </React.StrictMode>
)

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <BrowserRouter>
      <Home/>
    </BrowserRouter>,
  </AuthProvider>
)

*/
