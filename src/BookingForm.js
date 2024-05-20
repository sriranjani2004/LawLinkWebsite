import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'; // Import CSS file for styling

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    place: '',
    caseDescription: '',
    dateOfAppointment: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/bookappointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/lawyers'); // Navigate to lawyers page after 3 seconds
          }, 3000); // Redirect after 3 seconds
        } else {
          console.error('Failed to submit booking');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Name validation
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    // Age validation (must be at least 18 years old)
    const today = new Date();
    const dob = new Date(data.dob);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (age < 18) {
      errors.dob = 'You must be at least 18 years old';
    }

    // Appointment date validation (must be in the future)
    const appointmentDate = new Date(data.dateOfAppointment);
    if (appointmentDate <= today) {
      errors.dateOfAppointment = 'Appointment date must be in the future';
    }

    return errors;
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
            {errors.name && <span className="error">{errors.name}</span>}
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
            {errors.dob && <span className="error">{errors.dob}</span>}
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
            {errors.place && <span className="error">{errors.place}</span>}
          </div>
          <div className="form-group">
            <label>Case Description:</label>
            <textarea
              name="caseDescription"
              value={formData.caseDescription}
              onChange={handleChange}
              required
            ></textarea>
            {errors.caseDescription && <span className="error">{errors.caseDescription}</span>}
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
            {errors.dateOfAppointment && <span className="error">{errors.dateOfAppointment}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {showSuccessMessage && (
        <div className="modal" style={{ display: showSuccessMessage ? 'block' : 'none' }}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowSuccessMessage(false)}>&times;</span>
            <p>Booking is successful! Email has been sent.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
