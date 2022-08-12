import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import App from './components/App/App';
// import Home from './Home/Home';
import Property from './components/Property/Property';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppleApp = () => {
  window.location.reload();
  return <></>;
};

root.render(
  <React.StrictMode>
    <HttpsRedirect disabled={process.env.NODE_ENV === 'development'}>
      <BrowserRouter>
        <Routes>
          <Route path="/apple-app-site-association" element={<AppleApp />} />
          <Route path="/" element={<App />}>
            <Route path="/properties/:propertyId" element={<Property />} />
          </Route>
          <Route path="*" element={<h1>Ur shit is missing</h1>} />
        </Routes>
      </BrowserRouter>
    </HttpsRedirect>
  </React.StrictMode>
);
