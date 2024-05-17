import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './BookingForm.css'; // Import CSS file for styling

const BookingForm = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    place: '',
    caseDescription: '',
    dateOfAppointment: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control the visibility of the success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
    // Show the success message
    setShowSuccessMessage(true);
    // Redirect to lawyers page after a delay
    setTimeout(() => {
      navigate('/lawyers'); // Redirect to the lawyers page
    }, 2000); // Adjust the delay as needed (e.g., 2000ms = 2 seconds)
  };

  const closeModal = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div>
      <div className="booking-form-container">
        <h2>Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Place:</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Case Description:</label>
            <textarea
              name="caseDescription"
              value={formData.caseDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Date of Appointment:</label>
            <input
              type="date"
              name="dateOfAppointment"
              value={formData.dateOfAppointment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {showSuccessMessage && (
        <div className="modal" style={{ display: showSuccessMessage ? 'block' : 'none' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Booking is successful!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
