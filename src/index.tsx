import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MsalProvider, MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from '@azure/msal-browser';
import { getPopupClient } from './popupClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppProvider = () => (
  <MsalProvider instance={getPopupClient()}>
    <MsalAuthenticationTemplate interactionType={InteractionType.Popup}>
      <App />
    </MsalAuthenticationTemplate>
  </MsalProvider>
);

root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
