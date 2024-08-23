import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './profile.css';
import Footer from './Footer';

const Profile = () => {
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
    

    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '700px',
        marginTop: ' 85px',
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
                    <Link to="/hair" className='sideBarStyle'>
                        Hair Care
                    </Link>
                    <Link to="/body" className='sideBarStyle'>
                        Body & Bath
                    </Link>
                    <Link to="/fragrance" className='sideBarStyle'>
                        Fragrances
                    </Link>
                    <Link to="/makeup" className='sideBarStyle'>
                        Make Up
                    </Link>
                    <Link to="/natural" className='sideBarStyle'>
                        Natural
                    </Link>
                    <Link to="/eye" className='sideBarStyle'>
                        Eye and Lip Care
                    </Link>
                    <Link to="/baby" className='sideBarStyle'>
                        Baby Care
                    </Link>
                    <Link to="/gadgets" className='sideBarStyle'>
                        Gadgets
                    </Link>
                </div>

                <h1 style={titleStyle}>User - Profile </h1>
                <br/>
                <div className="account-container">    
                    <div className="account-info">
                        <h3 className="section-heading">Account Information</h3>
                        <div className="info-row">
                            <span className="info-label">Username:</span>
                            <span className="info-value">Admin</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Date of Birth:</span>
                            <span className="info-value">December 27, 2003</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Address:</span>
                            <span className="info-value">CBE,Tamil Nadu.</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Mail:</span>
                            <span className="info-value">admin@example.com</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Phone:</span>
                            <span className="info-value">+91 9876543210</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Additional Phone:</span>
                            <span className="info-value"> - </span>
                        </div>
                        <div className="info-row">
                            <span className="info-label"></span>
                            <span className="info-value"></span>
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
export default Profile