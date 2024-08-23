import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './contact.css';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import Footer from './Footer';

const Contact = () => {
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
    

    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '750px',
        marginTop: ' 85px',
      };
      
      const handleRedirect = (url) => {
        window.location.href = url;
      };

    return(

        <>
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
                    <h2><b>CATEGORIES</b></h2>
                    <Link to="/skin"  className='sideBarStyle'>
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

                <h1 style={titleStyle}>Contact Us </h1>
                <br/>
                <div className="account-container">    
                    <div className="account-info">
                        <h3 className="section-heading">Contact Us  </h3>
                        <div className="info-row">
                            <span className="info-label">Facebook:</span>
                            <button className="info-value">@kav.and.</button>
                            <div>
                            <button className='social-media-icons'onClick={() => handleRedirect('https://www.facebook.com')}>
                                <FaFacebook/>
                            </button>
                            </div>
                        </div>
                        <br/>
                        <div className="info-row">
                            <span className="info-label">Twitter:</span>
                            <button className="info-value" onClick={() => handleRedirect('https://www.twitter.com')}>@kav.and.</button>
                            <div>
                            <button className='social-media-icons' onClick={() => handleRedirect('https://www.twitter.com')}>
                                <FaTwitter/>
                            </button>
                            </div>
                        </div>
                        <br/>
                        <div className="info-row">
                            <span className="info-label">Instagram:</span>
                            <button className="info-value" onClick={() => handleRedirect('https://www.instagram.com')}>@kav.and.</button>
                            <div>
                            <button className='social-media-icons' onClick={() => handleRedirect('https://www.instagram.com')}>
                                <FaInstagram/> 
                            </button>
                            </div>
                        </div>
                        <br/>
                        <div className="info-row">
                            <span className="info-label">Linked-in:</span>
                            <button onClick={() => handleRedirect('https://www.linkedin.com')} className="info-value">@kav.and.</button>
                            <div className='icon-bg'>
                            <button className='social-media-icons' onClick={() => handleRedirect('https://www.linkedin.com')}>
                               <FaLinkedin/>
                            </button>
                            </div>
                        </div>    
                    </div>
                </div>
                <footer style={footerStyle}>
                <Footer/>        
                </footer>
            </div>
        </>
    );
}
export default Contact