
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './LawyersPage.css';
import BookingPopup from './BookingPopup'; // Import your BookingPopup component
import lawyer1Image from './images/lawyer1.jpg';
import lawyer2Image from './images/lawyer2.jpg';
import lawyer3Image from './images/lawyer3.jpg';
import lawyer4Image from './images/lawyer4.jpg';
import lawyer5Image from './images/lawyer5.jpg';
import lawyer6Image from './images/lawyer6.jpg';
import lawyer7Image from './images/lawyer7.jpg';
import lawyer8Image from './images/lawyer8.jpg';
import lawyer9Image from './images/lawyer9.jpg';
// Other lawyer images...
const Lawyers = [
  {
    name: 'Atty. Lawrence Espinoza',
    specialization: 'Heart (Law)',
    experience: 10,
    fee: 100,
    phone: '145234562',
    image: lawyer1Image
  },
  {
    name: 'Atty. Lynda Pearson',
    specialization: 'Criminal section',
    experience: 7,
    fee: 80,
    phone: '123123123',
    image: lawyer2Image
  },
  {
    name: 'Felina Davis',
    specialization: 'Eye (Law)',
    experience: 7,
    fee: 80,
    phone: '123123123',
    image: lawyer3Image
  },
  {
    name: 'Mary Smith',
    specialization: 'Corporate Law',
    experience: 15,
    fee: 120,
    phone: '987654321',
    image: lawyer4Image
  },
  {
    name: 'Michael Johnson',
    specialization: 'Family Law',
    experience: 12,
    fee: 90,
    phone: '567890123',
    image: lawyer5Image
  },
  {
    name: 'Sarah Davis',
    specialization: 'Immigration Law',
    experience: 8,
    fee: 110,
    phone: '678901234',
    image: lawyer6Image
  },
  {
    name: 'Jennifer White',
    specialization: 'Real Estate Law',
    experience: 20,
    fee: 150,
    phone: '789012345',
    image: lawyer7Image
  },
  {
    name: 'David Brown',
    specialization: 'Intellectual Property Law',
    experience: 18,
    fee: 130,
    phone: '890123456',
    image: lawyer8Image
  },
  {
    name: 'Robert Wilson',
    specialization: 'Labor Law',
    experience: 9,
    fee: 95,
    phone: '901234567',
    image: lawyer9Image
  },
];

function Lawyer({ lawyer }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleConsultationClick = () => {
    setShowPopup(true);
  };

  const handleBookAppointmentClick = () => {
    navigate('/bookappointment'); // Navigate to the booking page
  };

  return (
    <div className="lawyer">
      <div className="lawyer-info">
        <img src={lawyer.image} alt={lawyer.name} />
        <h3>{lawyer.name}</h3>
        <p>Specialization: {lawyer.specialization}</p>
        <p>Experience: {lawyer.experience} yrs</p>
      </div>
      <div className="lawyer-details">
        <p>Fees per consultation: ${lawyer.fee}</p>
        <p>Phone: {lawyer.phone}</p>
        
        <button onClick={handleBookAppointmentClick}>Book Appointment</button>
        {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}

function LawyersPage() {
  return (
    <div>
    <nav className="navbar">
    <div className="container">
      <div>
        <h1>LawLink</h1>
      </div>
      <div className="nav-elements">
        <ul className="menu3">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/lawyers">Lawyers</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      {/* Your navbar code... */}

      <div className="lawyers-page">
        <h1>Our Lawyers</h1>
        <div className="lawyer-list">
          {Lawyers.map((lawyer, index) => (
            <Lawyer key={index} lawyer={lawyer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LawyersPage;

