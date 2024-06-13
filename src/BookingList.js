import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './BookingList.css';

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://lawlinkbackend.onrender.com/bookings');
      setBookings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Error fetching bookings');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <nav className="navbar"> {/* Add navbar here */}
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
                <NavLink to="/addlawyers">AddLawyers</NavLink>
              </li>
              
              <li>
                <NavLink to="/BookingList">Booking List</NavLink>
              </li>
              <li>
                <NavLink to="/">logout</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <div className="booking-list-container">
        <h1>Booking List</h1>
        <table className="booking-list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Place</th>
              <th>Case Description</th>
              <th>Date of Appointment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name}</td>
                <td>{booking.dob}</td>
                <td>{booking.place}</td>
                <td>{booking.caseDescription}</td>
                <td>{booking.dateOfAppointment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingList;
