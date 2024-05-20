// HomePage.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminPage.css';
import lawyersImage from './lawyers_image.jpg'; // Import your lawyers image

const AdminPage = () => {
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
                <NavLink exact to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/AddlawyersPage">Add Lawyers</NavLink>
              </li>
              
              <li>
                <NavLink to="/BookingList">Booking List</NavLink> {/* Add this line */}
              </li>
              <li>
                <NavLink to="/">logout</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="home-page">
        <div className="left-section">
          <img src={lawyersImage} alt="Lawyers" className="lawyers-image" />
        </div>
        <div className="right-section">
          <h2>Welcome to LawLink: Your Trusted Law Connecting Portal</h2>
          <p>LawLink is your one-stop destination for connecting with experienced lawyers and finding the legal assistance you need. Whether you're an individual facing a legal issue or a business seeking legal counsel, our platform simplifies the process of finding and hiring legal professionals.</p>
          <h3>For Clients:</h3>
          <p>Are you in need of legal advice or representation? Look no further than LawLink. Our platform offers a streamlined approach to finding the right lawyer for your specific needs. Simply create an account, describe your legal issue, and browse through our extensive directory of experienced attorneys. Filter your search based on practice area, location, and client reviews to find the perfect match.</p>
          <h3>For Lawyers:</h3>
          <p>LawLink provides lawyers with a powerful platform to showcase their skills and connect with clients in need of their expertise. Create a professional profile, highlight your experience and achievements, and attract clients who are seeking your specific legal services. With LawLink, you can reach a wider audience, receive inquiries directly through our platform, and build trust and credibility in the legal community.</p>
          
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
