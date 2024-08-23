import React, { useState } from 'react';
import './booking.css';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

const BookAppointment = () => {
  
  const [userName, setUserName] = useState('');
  const [appointmentCategory, setAppointmentCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Uemail, setEmail] = useState('');
  const [Unote, setNote] = useState('');

  const navigate = useNavigate('');

  let token = localStorage.getItem('token');

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    // console.log('Form submitted');
    // console.log('Full Name:', fullName);
    // console.log('age:', age);
    // console.log('gender:', gender);
    // console.log('mobile:', mobile);

    try 
    {
      const response = await axios.post(
        'http://localhost:8181/addroll',
        {
          email: Uemail,
          name: userName,
          phone: phoneNumber,
          category:appointmentCategory,
          date:selectedDate,
          time:selectedTime,
          note: Unote
   
        },
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            'cache-control': 'no-control',
          },
        }
      );

      // Handle response as needed, e.g., show success message
      console.log(response.data);
      alert('Registration successful!');
      navigate('/home');
    } catch (error) {
      console.log(error);
      window.alert('Invalid Credentials');
    }
  };

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
                <div className="booking-container">
                  <h1>Appointment Booking Page</h1>
                  <form onSubmit={handleSubmit} >
                  <div className="form-field">
                    <label>User Name:</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
                  </div>
                  <div className="form-field">
                    <label>Appointment Category:</label>
                    <select value={appointmentCategory} onChange={(e)=>setAppointmentCategory(e.target.value)} required>
                      <option value="">Select Category</option>
                      <option value="facial">Facial & cleanUp</option>
                      <option value="bleach">Bleach & D-Tan</option>
                      <option value="wax">Waxing</option>
                      <option value="hair">hair care</option>
                      <option value="makeup">Make Up</option>
                      <option value="pre-bridal">Pre-Bridal</option>
                      <option value="body">Body Deals</option>
                      <option value="bridal">Bridal MakeUp</option>
                      <option value="threading">Threading</option>
                    </select>
                    
                  </div>

                  <div className="form-field">
                    <label>Select Date:</label>
                    <input type="date" value={selectedDate} onChange={(e)=>setSelectedDate(e.target.value)} required/>
                  </div>

                  <div className="form-field">
                    <label>Select Time:</label>
                    <input type="time" value={selectedTime} onChange={(e)=>setSelectedTime(e.target.value)} required min="10:00" max="18:00" />
                  </div>

                  <div className="form-field">
                    <label>Phone Number:</label>
                    <input type="tel" value={phoneNumber}onChange={(e)=>setPhoneNumber(e.target.value)} required />
                  </div>

                  <div className="form-field">
                    <label>Email:</label>
                    <input type="email" value={Uemail} onChange={(e)=>setEmail(e.target.value)} required/>
                  </div>

                  <div className="form-field">
                    <label>Note:</label>
                    <textarea value={Unote} onChange={(e)=>setNote(e.target.value)} required />
                  </div>

                  <button className="submit-button" onClick={handleSubmit}>
                    Book Appointment
                  </button>

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

export default BookAppointment;