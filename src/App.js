import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import LawyersPage from './LawyersPage';
import About from './About';
import Login from './Login';
import Register from './Register';
import ContactPage from './ContactPage';
import BookingForm from './BookingForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lawyers" element={<LawyersPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path ='/BookAppointment' element={<BookingForm />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
