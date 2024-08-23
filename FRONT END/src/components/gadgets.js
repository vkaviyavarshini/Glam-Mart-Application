import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';
import Footer from './Footer';

const Gadgets = () => {
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
        marginLeft: '800px',
      };
    const Products1 = [
      {
        name: "WINSTON Rechargeable Battery Operated Eyebrow Trimmer Women Face Hair Remover with Waterproof Head",
        image: "https://images-static.nykaa.com/media/catalog/product/d/b/db7d258WINST00000005_1ab.jpg",
        price: 1868.99,
      },
      {
        name: "Alan Truman Blow Brush Silver Ceramic(1 pieces)",
        image: "https://images-static.nykaa.com/media/catalog/product/0/4/045b69bALANT00000054_0001.jpg",
        price: 2437.99,
      },
      {
        name: "Gorgio Professional Face Cleaner (Color May Vary) GFC 0001",
        image: "https://images-static.nykaa.com/media/catalog/product/d/6/d6b8ed9659499661539_2.jpg",
        price: 2449.99,
      },
      {
        name: "Havells SC5065 Multifunction Skin Care Device - Pink",
        image: "https://images-static.nykaa.com/media/catalog/product/6/5/65a454c8901762141074__1_.jpg",
        price: 3868.99,
      },

    ];

    const Products2 = [
      {
        name:"Ikonic Professional Curling Tong CT28",
        image:"https://images-static.nykaa.com/media/catalog/product/f/e/fe16b0d8904231000063_1.jpg",
        price: 3300.99,
      },
      {
        name:"Agaro Cr3001 Callus Remover With 3 Interchangeable Head Rollers, Rechargeable, Removes Dead Skin",
        image:"https://images-static.nykaa.com/media/catalog/product/7/3/73686c033528-1.jpg",
        price: 1200.99,
      },
      {
        name:"Nykaa Naturals CleanTouch 2 in 1 Face Brush & Massager for Deep Cleansing & Exfoliation - Blue",
        image:"https://images-static.nykaa.com/media/catalog/product/1/-/1-product-with-strip_1_5.jpg",
        price: 1799.99,
      },
      {
        name:"Dyson Airwrap Long Multi-Styler Prussian Blue/Copper",
        image:"https://images-static.nykaa.com/media/catalog/product/3/f/3fa3d8aDYSON00000039_1.jpg",
        price: 49900.99,
      }

    ]
  
    const formatIndianPrice = (price) => {
      const formattedPrice = price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
      return formattedPrice;
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
            <h2>
              <b>CATEGORIES</b>
            </h2>
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
          <br/><br/><br/><br/>
          <div>
            <h1 style={titleStyle}>Gadgets</h1>
            <div className='product-container'>
            {Products1.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
          <br/>
          <div className='product-container'>
            {Products2.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
        </div>
        <footer style={footerStyle}>
          <Footer/>        
        </footer>
      </div>
    </>
  );
    
} ;
export default Gadgets;