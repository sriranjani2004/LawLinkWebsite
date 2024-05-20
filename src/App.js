import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LawyersPage from './LawyersPage';
import About from './About';
import ContactPage from './ContactPage';
import BookingForm from './BookingForm';
import Login from './Login';
import Register from './Register';
import BookingList from './BookingList'; 
import AdminPage from './AdminPage';
import ChatPage from './ChatApp'; 
import AddLawyersPage from './AddLawyersPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/lawyers" element={<LawyersPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/BookAppointment' element={<BookingForm />} />
        <Route path="/BookingList" element={<BookingList />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/AddLawyersPage" element={<AddLawyersPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
