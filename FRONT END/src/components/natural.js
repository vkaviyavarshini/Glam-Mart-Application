import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';
import Footer from './Footer';

const Natural = () => {
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
        name: "Himalaya Purifying Neem Face Wash",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/a/eaea13d8901138844172_1.jpg",
        price: 350.99,
      },
      {
        name: "Biotique Bio Brightening & Tan-Removal Combo",
        image: "https://images-static.nykaa.com/media/catalog/product/4/f/4f5e867NYKBNDBIO0028_1.jpg",
        price: 189.99,
      },
      {
        name: "Biotique Ocean Kelp Anti-Hair Fall Shampoo For Hair Growth Therapy",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/8/58f76168904317300308_1.jpg",
        price: 399.99,
      },
      {
        name: "Mamaearth Multani Mitti Face Wash",
        image: "https://images-static.nykaa.com/media/catalog/product/c/a/ca3c5938904417306439_1.jpg",
        price: 240.99,
      },

    ];

    const Products2 = [
      {
        name:"Kama Ayurveda Mini Kumkumadi Thailam Miraculous Beauty Fluid Ayurvedic Night Serum",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/2/e22716cKAMAA00000001.jpg",
        price: 995.99,
      },
      {
        name:"MCaffeine Vitamin C Green Tea Hydrating Face Serum for Glowing Skin - Reduces Dark Spots",
        image:"https://images-static.nykaa.com/media/catalog/product/e/a/ea48ddfNYMCFN0000022ab_a1.jpg",
        price: 554.99,
      },
      {
        name:"Pilgrim Salicylic Acid & Niacinamide Oil Control Serum for Blackheads",
        image:"https://images-static.nykaa.com/media/catalog/product/f/d/fdc1a1d8906120582209_1.jpg",
        price: 469.99,
      },
      {
        name:"Just Herbs Amla + Shankhpushpi Moisturising Hair Mask Treatment for Damaged Hair",
        image:"https://images-static.nykaa.com/media/catalog/product/e/f/efc745fJUSTH00000001a_01.jpg",
        price: 598.99,
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
          <br/><br/><br/><br/>
          <div>
            <h1 style={titleStyle}>Natural</h1>
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
export default Natural;