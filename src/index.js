import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Us from './components/Us/Us'
import Product from './components/Product/Product'
import Legal from './components/Legal/Legal'
import Faqs from './components/Faqs/Faqs'
import Contact from './components/Contact/Contact'
import { LanguageProvider } from './LanguageContext'; // Optional if you want to maintain the toggle in context
import './i18n'; // Import the i18n configuration


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/us" element={<Us/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/legal" element={<Legal/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

reportWebVitals();
