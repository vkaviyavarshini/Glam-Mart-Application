import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';
import Footer from './Footer';

const Hair = () => {
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
        name: "L'Oreal Professionnel Absolut Repair Oil 10-In-1 Multi-benefit Serum For Dry and Damaged Hair",
        image: "https://images-static.nykaa.com/media/catalog/product/1/4/149e044LORAA00000013a_1.jpg",
        price: 1300.99,
      },
      {
        name: "Love Beauty & Planet Curry Leaves- Biotin & Mandarin Orange Sulfate Free Shampoo",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/2/82b17ffLOVEB00000102_1.jpg",
        price: 520.99,
      },
      {
        name: "Biotique Green Apple Shine & Gloss Fresh DaiLy Purifying Shampoo & Conditioner",
        image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/a/9a4eb598904317300223_1.jpg",
        price: 476.99,
      },
      {
        name: "Minimalist Hair Growth Redensyl & Actives Hair 18% Serum For Reducing Hairfall & Boosts Growth",
        image: "https://images-static.nykaa.com/media/catalog/product/b/c/bcb546bMINIM00000018_2.jpg",
        price: 799.99,
      },

    ];

    const Products2 = [
      {
        name:"MCaffeine Anti Hairfall Scalp Tonic with Redensyl & Plant Protein - Serum for Hair Growth & Scalp Nourishment",
        image:"https://images-static.nykaa.com/media/catalog/product/7/f/7fe4e44MCAFF00000084_1.jpg",
        price: 528.99,
      },
      {
        name:"Be Bodywise 5000 Mcg Biotin Gummies For Healthy Hair With Added Zinc & Multivitamins - 120 Day Pack",
        image:"https://images-static.nykaa.com/media/catalog/product/e/3/e36ec66BEBOD00000039_1.jpg",
        price: 1529.99,
      },
      {
        name:"Nykaa Naturals Onion & Fenugreek Hair Growth Paraben and Sulphate Free Hair Mask",
        image:"https://images-static.nykaa.com/media/catalog/product/a/3/a32a14dNYKAB00000067_1.jpg",
        price: 524.99,
      },
      {
        name:"Mamaearth Aloe Vera Gel With Pure Aloe Vera & Vitamin E For Skin and Hair",
        image:"https://images-static.nykaa.com/media/catalog/product/7/f/7fcce608906087772439_1.jpg",
        price: 293.99,
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
              <Link to="/home"className='navBarStyle'>
                Home
              </Link>
              <Link to="/cart"className='navBarStyle'>
                Cart
              </Link>
              <Link to="/about"className='navBarStyle'>
                About
              </Link>
              <Link to="/contact"className='navBarStyle'>
                Contact
              </Link>
              <Link to="/feedback" className='navBarStyle'>
              Feedback
              </Link>
              <Link to="/book" className='navBarStyle'>
              Appointment
              </Link>
              <Link to="/"className='navBarStyle'>
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
            <h1 style={titleStyle}>Hair Care</h1>
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
export default Hair;