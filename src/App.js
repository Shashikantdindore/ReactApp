import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './Customer/compnents/Pages/HomePage/HomePage';
import Footer from './Customer/compnents/footer/footer';
import Navigation from '../src/Customer/compnents/nevigation/navigation';
import Services from './Customer/compnents/Pages/HomePage/Services';
import Product1 from './Customer/compnents/Pages/productPage/Product1';
import LoginPage from './Customer/compnents/LoginRegister/Login';
import SignupPage from './Customer/compnents/LoginRegister/Registration';




function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Products" element={<Product1  />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<SignupPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
