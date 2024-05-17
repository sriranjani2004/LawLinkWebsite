import React, { useState } from 'react';
import './BookingPopup.css'; // Import the CSS file

function BookingPopup({ onClose, doctor }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Check if doctor prop is undefined
  if (!doctor) {
    return <p>Doctor information not available.</p>;
  }

  return (
    <div className="booking-popup">
      <div className="popup-header">
        <h3>Book Appointment with Dr. {doctor.name}</h3>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="popup-content">
        <p>Select Appointment Date:</p>
        <input type="date" onChange={(e) => handleDateChange(e.target.value)} />
        <button disabled={!selectedDate}>Confirm Appointment</button>
      </div>
    </div>
  );
}

export default BookingPopup;
