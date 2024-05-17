import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { NavLink } from 'react-router-dom';

const About = () => {
  const [lawyerCount, setLawyerCount] = useState(1000);
  const [clientCount, setClientCount] = useState(1500);
  const [specialistLawyerCount, setSpecialistLawyerCount] = useState(500);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const lawyerRef = useRef(null);
  const clientRef = useRef(null);
  const specialistLawyerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsStatsVisible(entry.isIntersecting);
    }, options);

    observer.observe(lawyerRef.current);
    observer.observe(clientRef.current);
    observer.observe(specialistLawyerRef.current);

    const intervalId = setInterval(() => {
      if (isStatsVisible) {
        setLawyerCount(prevCount => {
          if (prevCount < 1000) {
            return prevCount + Math.floor(Math.random() * 20);
          }
          return prevCount;
        });
        setClientCount(prevCount => {
          if (prevCount < 1500) {
            return prevCount + Math.floor(Math.random() * 20);
          }
          return prevCount;
        });
        setSpecialistLawyerCount(prevCount => {
          if (prevCount < 500) {
            return prevCount + Math.floor(Math.random() * 5);
          }
          return prevCount;
        });
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

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

      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            {/* Update content to reflect lawyers and clients */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod 
            magna vel leo pulvinar pellentesque. Nulla facilisi eros ac quam aliquam 
            interdum. Maecenas lorem sem, aliquam ac lorem quis, tincidunt interdum 
            odio. Pellentesque auctor neque nec urna blandit malesuada. Donec eu 
            mi purus. Nulla facilisi. In hac habitasse platea dictumst. Sed 
            pulvinar libero sit amet leo tincidunt porta. Cras justo odio, dapibus 
            ac facilisis in, egestas eget quam. Donec eu mi purus. Nulla facilisi. 
            Mauris fermentum ipsum eget tellus molestie congue.
          </p>
          <p>
            {/* Update content to reflect lawyers and clients */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod 
            magna vel leo pulvinar pellentesque. Nulla facilisi eros ac quam aliquam 
            interdum. Maecenas lorem sem, aliquam ac lorem quis, tincidunt interdum 
            odio.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat" ref={lawyerRef}>
            <h3>Satisfied Clients</h3>
            <div className="counter-circle">
              <span className="counter-value">{clientCount.toLocaleString()}+</span>
              <div className="counter-fill"></div>
            </div>
          </div>
          <div className="stat" ref={clientRef}>
            <h3>Verified Lawyers</h3>
            <div className="counter-circle">
              <span className="counter-value">{lawyerCount.toLocaleString()}+</span>
              <div className="counter-fill"></div>
            </div>
          </div>
          <div className="stat" ref={specialistLawyerRef}>
            <h3>Specialist Lawyers</h3>
            <div className="counter-circle">
              <span className="counter-value">{specialistLawyerCount.toLocaleString()}+</span>
              <div className="counter-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
