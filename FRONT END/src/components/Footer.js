import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus tempor justo sed velit tincidunt, sit amet mattis erat
            ultrices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">Product Partner</Link>
            </li>
            <li>
              <Link to="/privacy">Shipping &amp; Returns</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link to="/skin">Skin Care</Link>
            </li>
            <li>
              <Link to="/hair">Hair Care</Link>
            </li>
            <li>
              <Link to="/makeup">Makeup</Link>
            </li>
            <li>
              <Link to="/fragrance">Fragrance</Link>
            </li>
            <li>
              <Link to="/baby">Baby Care</Link>
            </li>
            <li>
                <Link to="/natural">Natural</Link>
            </li>
            <li>
              <Link to="/body">Body & Bath</Link>
            </li>
            <li>
              <Link to="/eye">Eye & Lip Care</Link>
            </li>
            <li>
              <Link to="/gadgets">Gadgets</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Stay Connected</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Kav&. Beauty Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
