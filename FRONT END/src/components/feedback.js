import React, { useState } from 'react';
import './feedback.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api1';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import Footer from './Footer';

const Feedback = () => {
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/home')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }

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
  
    return (
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
                <div className='body1'>
                  <div className='class1'>
                    <form onSubmit={handleSubmit} className='form1' >
                      <h2 className='section-heading'>FEEDBACK FORM</h2>
                      <div className="feedback-container">
                        <label className='name1'>Email:</label>
                        <div>
                          <input
                          className='form-field'
                          type="email"
                          placeholder="Email"
                          id='email'
                          onChange={handleChange}
                          required
                          />
                        </div>
                        <label className='name1'>Name:</label>
                        <div>
                          <input
                            className='form-field'
                            type="name"
                            placeholder="Name"
                            id='name'
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <label className='name1'>Subject:</label>
                        <div>
                          <input
                            className='form-field'
                            type="name"
                            placeholder="Subject"
                            id='subject'
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <label className='name1'>Message:</label>
                        <div>
                          <input
                            className='form-field'
                            type="name"
                            placeholder="Message"
                            id='message'
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="button">
                            <button type='submit' onChange={handleSubmit}>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <br/>
                <footer style={footerStyle}>
                <Footer/>        
                </footer>
            </div>
        </>
    
          
  );
};

export default Feedback;