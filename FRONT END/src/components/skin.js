import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';
import Footer from './Footer';

const Skin = () => {
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
        name: "Minimalist 10% Vitamin B5, Oil-Free Moisturizer With Zinc, Copper, Magnesium & Ha For Oily Skin",
        image: "https://images-static.nykaa.com/media/catalog/product/8/c/8cad46bMINIM00000036_2.jpg",
        price: 349.99,
      },
      {
        name: "Nivea Soft Light Cream With Vitamin E & Jojoba Oil For Non-Sticky- Fresh, Soft & Hydrated Skin",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/4/54ce0094005808679829a_1.jpg",
        price: 349.99,
      },
      {
        name: "Biotique Morning Nectar Nourish & Hydrate Moisturizer",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/9/f9441e58906009450070_1.jpg",
        price: 176.99,
      },
      {
        name: "Lakme Lumi Skin Cream",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/9/f9ea5efLAKME00000281_1.jpg",
        price: 268.99,
      },

    ];

    const Products2 = [
      {
        name:"Garnier Skin Naturals Bright Complete Vitamin C Serum Sheet Mask(28gm)",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/1/51716e46970175253959_1.jpg",
        price: 98.99,
      },
      {
        name:"Kama Ayurveda Mini Pure Rose Water (Toner)",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/8/08e14c18906014831413_1.jpg",
        price: 495.99,
      },
      {
        name:"Colorbar On The Go Makeup Remover Wipes",
        image:"https://images-static.nykaa.com/media/catalog/product/8/9/8904052426080.png",
        price: 89.99,
      },
      {
        name:"L'Oreal Paris UV Defender Serum Protector Sunscreen With SPF 50 PA+++, Matte & Fresh",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/2/72d6f1b8994993014705_1%20(1).jpg",
        price: 699.99,
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
            <h1 style={titleStyle}>Skin Care</h1>
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
export default Skin;