import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';
import Footer from './Footer';

const Body = () => {
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
        name: "MCaffeine Coffee Body Wash with Berries De-Tan & Deep Cleansing Shower Gel in Fruity Berry Aroma",
        image: "https://images-static.nykaa.com/media/catalog/product/e/f/ef603d3MCAFF00000314ab_1.jpg",
        price: 265.99,
      },
      {
        name: "Biotique Bio Papaya Brightening & Revitalizing Tan Removal Scrub",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/8/68aa3cf8906009452807_1a.jpg",
        price: 126.99,
      },
      {
        name: "MCaffeine Exfoliating Bath Glove to Prevent Ingrown Hair & Strawberry Skin",
        image: "https://images-static.nykaa.com/media/catalog/product/d/a/daea425MCAFF00000097_1.jpg",
        price: 286.99,
      },
      {
        name: "Mamaearth Ubtan Body Scrub With Turmeric & Saffron for Tan Removal",
        image: "https://images-static.nykaa.com/media/catalog/product/8/9/8906087773122.jpg",
        price: 468.99,
      },
      {
        name:"Nivea 50X Vitamin C Body Lotion With Spf 15 For Cell Repair And Natural Glow",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/0/005bd8b4005900196156_1.jpg",
        price: 440.99,
      },
      {
        name:"Nykaa Love Struck Body Lotion - First Date",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/e/ae01cf48904245714567_1.jpg",
        price: 250.99,
      },
      {
        name:"Be Bodywise 4% AHA BHA Underarm Roll On- Prevents Odour, Fades Pigmentation- For Radiant Underarm",
        image:"https://images-static.nykaa.com/media/catalog/product/c/6/c631a86BEBOD00000196_1.jpg",
        price: 224.99,
      },
      {
        name:"Love Beauty & Planet Natural Murumuru Butter & Rose Glow Body Lotion",
        image:"https://images-static.nykaa.com/media/catalog/product/a/0/a0b46228901030753404_1.jpg",
        price: 412.99,  
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
          <br/><br/><br/><br/>
          <div>
            <h1 style={titleStyle}>Body & Bath</h1>
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
        </div>
        <footer style={footerStyle}>
          <Footer/>        
        </footer>
      </div>
    </>
  );
    
} ;
export default Body;