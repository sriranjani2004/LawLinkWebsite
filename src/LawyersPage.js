import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
import lawyer10Image from './images/lawyer10.jpg';
import lawyer11Image from './images/lawyer11.jpg';
import lawyer12Image from './images/lawyer12.jpg';
import lawyer13Image from './images/lawyer13.jpg';
import lawyer14Image from './images/lawyer14.jpg';
import lawyer15Image from './images/lawyer15.jpg';
import lawyer16Image from './images/lawyer16.jpg';
import lawyer17Image from './images/lawyer17.jpg';
import lawyer18Image from './images/lawyer18.jpg';
import lawyer19Image from './images/lawyer19.jpg';
import lawyer20Image from './images/lawyer20.jpg';
// Other lawyer images...


  const Lawyers = [
    {
      id: 1,
      name: 'Atty. Lawrence Espinoza',
      specialization: 'Intellectual property lawyer',
      experience: 10,
      fee: 100,
      phone: '9345250053',
      image: lawyer1Image,
      booked: false
    },
    {
      id: 2,
      name: 'Atty. Lynda Pearson',
      specialization: 'Criminal section',
      experience: 7,
      fee: 80,
      phone: '9789266098',
      image: lawyer2Image,
      booked: false
    },
    {
      id: 3,
      name: 'Felina Davis',
      specialization: 'Employment lawyer',
      experience: 7,
      fee: 80,
      phone: '9842786914',
      image: lawyer3Image,
      booked: false
    },
    {
      id: 4,
      name: 'Mary Smith',
      specialization: 'Corporate Law',
      experience: 15,
      fee: 120,
      phone: '8438043067',
      image: lawyer4Image,
      booked: false
    },
    {
      id: 5,
      name: 'Michael Johnson',
      specialization: 'Family Law',
      experience: 12,
      fee: 90,
      phone: '9345250053',
      image: lawyer5Image,
      booked: false
    },
    {
      id: 6,
      name: 'Sarah Davis',
      specialization: 'Immigration Law',
      experience: 8,
      fee: 110,
      phone: '9345250053',
      image: lawyer6Image,
      booked: false
    },
    {
      id: 7,
      name: 'Jennifer White',
      specialization: 'Real Estate Law',
      experience: 20,
      fee: 150,
      phone: '9345250053',
      image: lawyer7Image,
      booked: false
    },
    {
      id: 8,
      name: 'David Brown',
      specialization: 'Intellectual Property Law',
      experience: 18,
      fee: 130,
      phone: '9345250053',
      image: lawyer8Image,
      booked: false
    },
    {
      id: 9,
      name: 'Robert Wilson',
      specialization: 'Labor Law',
      experience: 9,
      fee: 95,
      phone: '9345250053',
      image: lawyer9Image,
      booked: false
    },
    {
      id: 10,
      name: 'Atty. Emma Martinez',
      specialization: 'Tax Law',
      experience: 14,
      fee: 140,
      phone: '9345250053',
      image: lawyer10Image,
      booked: false
    },
    {
      id: 11,
      name: 'Atty. Charles Green',
      specialization: 'Bankruptcy Law',
      experience: 11,
      fee: 110,
      phone: '9345250053',
      image: lawyer11Image,
      booked: false
    },
    {
      id: 12,
      name: 'Atty. Olivia Taylor',
      specialization: 'Environmental Law',
      experience: 13,
      fee: 115,
      phone: '9345250053',
      image: lawyer12Image,
      booked: false
    },
    {
      id: 13,
      name: 'Atty. Henry Gonzalez',
      specialization: 'Medical Malpractice Law',
      experience: 16,
      fee: 125,
      phone: '9345250053',
      image: lawyer13Image,
      booked: false
    },
    {
      id: 14,
      name: 'Atty. Sophia Robinson',
      specialization: 'Civil Rights Law',
      experience: 9,
      fee: 105,
      phone: '9345250053',
      image: lawyer14Image,
      booked: false
    },
    {
      id: 15,
      name: 'Atty. James Lewis',
      specialization: 'Entertainment Law',
      experience: 17,
      fee: 135,
      phone: '9345250053',
      image: lawyer15Image,
      booked: false
    },
    {
      id: 16,
      name: 'Atty. Grace Walker',
      specialization: 'Personal Injury Law',
      experience: 12,
      fee: 100,
      phone: '9345250053',
      image: lawyer16Image,
      booked: false
    },
    {
      id: 17,
      name: 'Atty. Daniel Harris',
      specialization: 'Construction Law',
      experience: 8,
      fee: 90,
      phone: '9345250053',
      image: lawyer17Image,
      booked: false
    },
    {
      id: 18,
      name: 'Atty. Victoria Lee',
      specialization: 'Insurance Law',
      experience: 10,
      fee: 95,
      phone: '9345250053',
      image: lawyer18Image,
      booked: false
    },
    {
      id: 19,
      name: 'Atty. Brian Scott',
      specialization: 'Banking Law',
      experience: 20,
      fee: 150,
      phone: '9345250053',
      image: lawyer19Image,
      booked: false
    },
    {
      id: 20,
      name: 'Atty. Rebecca King',
      specialization: 'Healthcare Law',
      experience: 11,
      fee: 115,
      phone: '9345250053',
      image: lawyer20Image,
      booked: false
    }
  
  
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
  const [lawyers, setLawyers] = useState(Lawyers); // State to store all lawyers
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const [itemsPerPage] = useState(3); // Number of items per page
  const [searchText, setSearchText] = useState(''); // State for search term
  const [selectedSpecialization, setSelectedSpecialization] = useState('all'); // State for selected specialization
  const navigate = useNavigate();

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLawyers = lawyers.slice(indexOfFirstItem, indexOfLastItem);

  // Apply search and specialization filters on state change
  useEffect(() => {
    const filteredLawyers = Lawyers.filter((lawyer) => {
      const nameMatch = lawyer.name.toLowerCase().includes(searchText.toLowerCase());
      const specMatch = selectedSpecialization === 'all' || lawyer.specialization === selectedSpecialization;
      return nameMatch && specMatch;
    });
    setLawyers(filteredLawyers);
    setCurrentPage(1); // Reset to the first page when filters change
  }, [searchText, selectedSpecialization]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                <NavLink to="/lawyers">Lawyers</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/ChatPage">Chatbot</NavLink>
              </li>
              <li>
                <NavLink to="/">logout</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="lawyers-page">
        <h1>Our Lawyers</h1>

        {/* Search and filter section */}
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search Lawyers"
            value={searchText}
            onChange={handleSearchChange}
          />
          <select value={selectedSpecialization} onChange={handleSpecializationChange}>
            <option value="all">All Specializations</option>
            {/* Dynamic options for specializations */}
            {Lawyers.map((lawyer) => (
              <option key={lawyer.specialization} value={lawyer.specialization}>
                {lawyer.specialization}
              </option>
            ))}
          </select>
        </div>

        <div className="lawyer-list">
          {currentLawyers.map((lawyer, index) => (
            <Lawyer key={index} lawyer={lawyer} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {[...Array(Math.ceil(lawyers.length / itemsPerPage)).keys()].map((number) => (
            <button key={number} onClick={() => handlePaginationClick(number + 1)}>
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LawyersPage;



// Other lawyer images...
