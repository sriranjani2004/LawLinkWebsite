import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
// Adjust the path if necessary

import './AddLawyersPage.css'; // Import the CSS file

function AddLawyersPage() {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [fees, setFees] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !experience || !fees || !phone) {
      setErrorMessage('Please fill out all the fields.');
      return;
    }

    // Check if age is greater than 21
    const today = new Date();
    const birthDate = new Date(experience);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 21) {
      setErrorMessage('Lawyer must be at least 21 years old.');
      return;
    }

    // Simulating form submission logic (e.g., API call)
    // Assuming the lawyer is successfully added, display success message
    setTimeout(() => {
      setSuccessMessage('Lawyer added successfully!');
      // Reset form fields
      setName('');
      setExperience('');
      setFees('');
      setPhone('');
    }, 1000); // Simulating a delay for API call
  };

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
   
    <div className="add-lawyers-container">
      <h2>Add Lawyers</h2>
      <form className="add-lawyers-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter lawyer's name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input type="date" id="experience" name="experience" placeholder="Enter years of experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="fees">Fees per consultation:</label>
          <input type="text" id="fees" name="fees" placeholder="Enter fees" value={fees} onChange={(e) => setFees(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
    </div>
  );
}

export default AddLawyersPage;

