import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './privacy.css';
import Footer from './Footer';

const PrivacyPolicy = () => {
    const navStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '1px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      };
      
      const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 10px',
        padding: '4px 20px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      };
    
      const containerStyle = {
        display: 'flex',
        alignItems: 'center',
      };
    
      const logoStyle = {
        width: '250px',
        height: '70px',
      };
    
      const personLogoStyle = {
        width: '60px',
        height: '60px',
        marginRight: '30px',
        marginLeft:'20px',
      };
    
    
      const sidebarStyle = {
        backgroundColor: 'palevioletred',
        padding: '23px',
        width: '200px',
        position: 'fixed',
        top: '50px',
        left: 0,
        bottom: 0,
      };
    
      const bodyStyle = {
        backgroundColor:'lavenderblush',
        fontFamily: 'Segoe UI',
      };
    const footerStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 0 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      marginLeft:'240px',
      marginTop:'10px',
    };
  return (
    <div style={bodyStyle}>
          <nav style={navStyle}>
            <Link to="/home" style={linkStyle}>
              <img src={logo} alt="Logo" style={logoStyle} />
            </Link>
            <div style={containerStyle}>
              <Link to="/home" className='navBarStyle'>
                Home
              </Link>
              <Link to="/cart" className='navBarStyle'>
                Cart
              </Link>
              <Link to="/about" className='navBarStyle'>
                About
              </Link>
              <Link to="/contact" className='navBarStyle'>
                Contact
              </Link>
              <Link to="/feedback" className='navBarStyle'>
              Feedback
              </Link>
              <Link to="/book" className='navBarStyle'>
              Appointment
              </Link>
              <Link to="/" className='navBarStyle'>
                Logout
              </Link>
              <Link to="/profile" style={linkStyle}>
              <img src={personLogo} alt="Person" style={personLogoStyle} />
            </Link>
            </div>
          </nav>
          <div style={sidebarStyle}>
            <br />
            <h2>
              <b>CATEGORIES</b>
            </h2>
            <Link to="/skin" className='sideBarStyle'>
              Skin Care
            </Link>
            <Link to="/hair"  className='sideBarStyle'>
              Hair Care
            </Link>
            <Link to="/body"  className='sideBarStyle'>
              Body & Bath
            </Link>
            <Link to="/fragrance"  className='sideBarStyle'>
              Fragrances
            </Link>
            <Link to="/makeup"  className='sideBarStyle'>
              Make Up
            </Link>
            <Link to="/natural"  className='sideBarStyle'>
              Natural
            </Link>
            <Link to="/eye"  className='sideBarStyle'>
              Eye and Lip Care
            </Link>
            <Link to="/baby"  className='sideBarStyle'>
              Baby Care
            </Link>
            <Link to="/gadgets"  className='sideBarStyle'>
              Gadgets
            </Link>
          </div>
      <div  className='privacy-container'>
      <h1>Privacy Policy</h1>
      <p>
        At Kav&., we value the privacy of our visitors and customers. This Privacy Policy
        explains how we collect, use, and protect your personal information. By accessing and
        using our website, you consent to the terms described in this policy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information, such as your name, email address, shipping address,
        and payment details, when you place an order on our website or sign up for our newsletter.
        We also collect non-personal information, such as your IP address and browser type, for
        analytical purposes and to improve our services.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use the collected information to process your orders, deliver products, and provide
        customer support. With your consent, we may send you promotional emails about new products,
        special offers, and updates. We do not sell or share your personal information with third
        parties for marketing purposes.
      </p>

      <h2>Security</h2>
      <p>
        We take the security of your personal information seriously and use industry-standard
        measures to protect it. However, please be aware that no method of transmission over the
        internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Cookies and Similar Technologies</h2>
      <p>
        Our website uses cookies and similar technologies to enhance your browsing experience and
        analyze website traffic. You can control cookies through your browser settings, but
        disabling them may affect certain functionalities of the website.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices or content of those websites. Please review the privacy policies of
        third-party websites before providing any personal information.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page,
        and the revised date will be indicated at the top of the policy. Please check this page
        periodically for updates.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy or the use of your personal
        information, please contact our customer support team.
      </p>
    </div>
    <footer style={footerStyle}>
          <Footer/>        
        </footer>
    </div>

  );
};

export default PrivacyPolicy;
