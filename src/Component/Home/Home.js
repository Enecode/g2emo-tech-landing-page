import React, { useState } from 'react';
import MissionImage from '../../Component/Assets/mission.png';
import VisionImage from '../../Component/Assets/vision.png';
import ValuesImage from '../../Component/Assets/VALUES.png'; 
import Logo from '../../Component/Assets/G2EMO_LOGO_White.png';
import Image1 from '../../Component/Assets/smart-cities.jpg';
import Image2 from '../../Component/Assets/athena.jpg'; 
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img className="navbar-logo-image" src={Logo} alt="Logo" />
          </div>

          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-menu-items">
              <li className="navbar-menu-item">About</li>
              <li className="navbar-menu-item">Technology</li>
              <li className="navbar-menu-item">Contact</li>
              <li className="navbar-menu-item">Demo</li>
              <li className="navbar-menu-item">Tech News</li>
            </ul>
          </div>

          <div className="navbar-hamburger" onClick={toggleMenu}>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>

        <div className="content">
          <div className="title">
            <h1 className="title-text">CREATING A CONNECTED FUTURE THROUGH TECH</h1>
          </div>
          <div className="subtitle">
            <h2 className="subtitle-text">Empowering Tomorrow, Today: Building a Tech-Driven Connected Future</h2>
          </div>

          <button className="get-started-button">
            Request Demo
          </button>
        </div>
      </div>
      <div className="about-container">
      
      <div className="about-section">
        <img className="about-image" src={MissionImage} alt="Mission" />
        <h2 className="about-title">Mission</h2>
        <p className="about-description">
          Creating advanced tech for user comfort, effectiveness, and efficiency, fulfilling our vision through innovation solutions.
        </p>
      </div>

      
      <div className="about-section">
        <img className="about-image" src={VisionImage} alt="Vision" />
        <h2 className="about-title">
          Vision
        </h2>
        <p className="about-description">
          To create a connected future by providing innovative solutions through technology.
        </p>
      </div>

      <div className="about-section">
        <img className="about-image" src={ValuesImage} alt="Values" />
        <h2 className="about-title">
          Values
        </h2>
        <p className="about-description">
          Teamwork, Innovation, Ease of Use, and Integrity (T.I.E).
        </p>
      </div>
    </div>
    <div className="who-we-are-container">
      <h3 className="section-title">Who We Are</h3>
      <div className="who-we-are-section">
        <div className="who-we-are-content">
          <img className="who-we-are-image" src={Image1} alt=" 1" />
          <div className="who-we-are-description">
            <h2 className="section-title">Our Story</h2>
            <p className="who-we-are-description">
            G2EMO TECHNOLOGIES: A pioneering tech firm, simplifying lives through innovative solutions in asset management and monitoring.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="who-we-are-section">
        <div className="who-we-are-content">
          <img className="who-we-are-image" src={Image2} alt=" 2"  />
          <div className="who-we-are-description">
            <h2 className="section-title">Our Values</h2>
            <p className="who-we-are-description">
              Our expertise empowers global industries with adaptable, secure, and top-tier tech, ensuring operational excellence and user-centric advancements. Join us in shaping tomorrow's intelligent business operations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-us-container">
      <div className="contact-form">
        <h2 className="form-title">Contact Us</h2>
        <form>
          <div className="form-group name">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group phone">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group email">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button className="submit-button" type="submit">Send</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-group phone-number">
          <div className="info-icon"><FaPhone /></div>
          <div className="info-text">
            <h4 className="info-title">Phone</h4>
            <a className="info-link" href="tel:123-456-7890">(123) 456-7890</a>
          </div>
        </div>

        <div className="info-group email-address">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div className="info-text">
            <h4 className="info-title">Email</h4>
            <a className="info-link" href="mailto:info@example.com">info@example.com</a>
          </div>
        </div>

        <div className="info-group address-info">
          <div className="info-icon"><FaMapMarkerAlt /></div>
          <div className="info-text">
            <h4 className="info-title">Address</h4>
            <p className="info-link">123 Main St, Cityville, Country</p>
          </div>
        </div>

        <div className="social-media">
          <h4 className="social-title">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" className="social-icon" alt="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <p className="footer-description">
            G2EMO Technologies was founded by a group of like-minded and experienced experts in the technology space who wanted to develop solutions that help make life easier. As we grew, we recruited some of the brightest minds to help create the well-oiled engine we have today.
        </p>
      </div>

      <div className="footer-section">
        <div className="social-icons-container">
          <a href="https://www.facebook.com" className="social-icons">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="social-icons">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" className="social-icons">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" className="social-icons" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>


    </div>
  );
}