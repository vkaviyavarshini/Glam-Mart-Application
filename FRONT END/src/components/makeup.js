import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';
import Footer from './Footer';

const MakeUp = () => {
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
        name: "Maybelline New York Superstay Vinyl Ink Liquid Lipstick - Lippy",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/6/56e65cdMAYBE00000403_1.jpg",
        price: 764.99,
      },
      {
        name: "NYX Professional Makeup Epic Ink Liner - Black",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/3/43a79d8800897085605_1.jpg",
        price: 660.99,
      },
      {
        name: "FENTY FACE: BUILD YOUR OWN 4-PIECE BUNDLE",
        image: "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_FALL22_T2PRODUCT_EDITORIAL_FENTYFACE_PFF_MSTIX_KILLAWATT_INVISIMATTE_GB-OG_1200X1500_72DPI.jpg?v=1677871310",
        price: 17000.99,
      },
      {
        name: "e.l.f. Cosmetics Big Mood Mascara - Black",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/e/1ee9853ELFCO00000254_1.jpg",
        price: 855.99,
      },
      {
        name: "Huda Beauty Fauxfilter Luminous Matte Full Coverage Liquid Foundation - 210B Chai",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/5/f52f3cdhudab00000148_new_1.jpg",
        price: 3650.99,
      },

      {
        name: "NARS MINI LAGUNA TALC-FREE BRONZING POWDER",
        image: "https://www.narscosmetics.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw465995b4/2023/March/Makeup/MiniBronzer/999NAC0000156_MiniLagunaBronzingPowder_Laguna08_1.jpg?sw=856&sh=750&sm=fit",
        price: 1539.99,
      },
      {
        name: "Estee Lauder Pure Color Lipstick Emerald - Intense Nude (Creme)  ",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/0/7065dccESTEE00000465_01.jpg",
        price: 3600.99,
      },
      {
        name: "Benefit Cosmetics Roller Liner Black Liquid Eyeliner",
        image: "https://images-static.nykaa.com/media/catalog/product/6/0/602004089588_-_1.jpg",
        price: 2400.99,
      },

    ];

    const Products2 = [
      {
        name:"SUGAR All Set To Go Translucent Powder",
        image:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090495004_01.jpg",
        price: 502.99,
      },
      {
        name:"Makeup Revolution Reloaded Fundamental Eyeshadow Palette",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/5057566099462.jpg",
        price:594.99,
      },
      {
        name:"Revlon Touch & Glow Moisturising Makeup - Ivory Mist",
        image:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/0/504b6d2rev_8902656402233_0.jpg",
        price: 327.99,
      },
      {
        name:"Rare Beauty Soft Pinch Liquid Blush",
        image:"https://www.rarebeauty.com/cdn/shop/products/Liquid-Blush-Matte-BLISS-SKU.jpg?v=1639020840",
        price: 1886.99,
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
            <h1 style={titleStyle}>Make Up</h1>
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
export default MakeUp;