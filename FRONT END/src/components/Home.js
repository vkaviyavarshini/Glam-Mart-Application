import React,{useRef} from 'react';
import logo from './logo1.jpg';
import 'react-slideshow-image/dist/styles.css';
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';
import personLogo from './person.png';
import { useSelector } from 'react-redux';
import './Home.css';
import { getLocalStorageItem } from './emailStorage';
import Footer from './Footer';
//import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Home =() => {
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
      padding: '23px ',
      width: '200px',
      position: 'fixed',
      top: '50px',
      left: 0,
      bottom: 0,
    };
  
    const slideshowContainerStyle = {
      marginTop: '70px',
      marginLeft: '220px',
      marginRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    };
  
    const slideImages = [
      'https://res.cloudinary.com/dg2jouca2/image/upload/v1689258229/makeup2_ftymy8.png',
      'https://res.cloudinary.com/dg2jouca2/image/upload/v1689258228/skin_jj1m9u.jpg',
      'https://res.cloudinary.com/dg2jouca2/image/upload/v1689258228/perfume1_c06jcu.jpg',
      'https://res.cloudinary.com/dg2jouca2/image/upload/v1689258228/perfume_xakcp9.jpg',
      'https://res.cloudinary.com/dg2jouca2/image/upload/v1689258227/skinn_hfgv92.jpg',
      'https://res.cloudinary.com/dg2jouca2/image/upload/v1689258229/makeup1_ovfzgh.jpg',
    ];
  
    const slideProperties = {
      duration: 1200,
      transitionDuration: 900,
      infinite: true,
      indicators: true,
      arrows: true,
      autoplay: true,
      pauseOnHover: true,
      canSwipe: true,
    };
  
    const slideContainerStyle = {
      height: '10px',
      width: '400px',
      margin: '20px 45px',
      borderRadius:'17px',
    };
  
    const slideImageStyle = {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius:'17px',
    };
    const titleStyle = {
      fontSize: '40px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };

    const userEmailStyle = {
      fontSize: '20px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    }

    const title1Style = {
      fontSize: '30px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };

    const textStyle = {
      fontSize: '20px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };
  
    const bodyStyle = {
      backgroundColor:'lavenderblush',
      fontFamily: 'Segoe UI',
    }

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
  
    // const socialIconStyle = {
    //   fontSize: '24px',
    //   marginRight: '10px',
    //   color: 'lavenderblush',
    // };
   
    const slideshowRef = useRef(null);

    const ProductsNaturals = [
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

    const emailFromLocalStorage = getLocalStorageItem("email");

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
            Eye & Lip Care
          </Link>
          <Link to="/baby" className='sideBarStyle'>
            Baby Care
          </Link>
          <Link to="/gadgets" className='sideBarStyle'>
            Gadgets
          </Link>
        </div>
  
        <div style={slideshowContainerStyle}>
          <br />
          <br />
  
          <div style={slideContainerStyle}>
            <Slide {...slideProperties} ref={slideshowRef}>
              {slideImages.map((image, index) => (
                <div key={index} className="each-slide">
                  <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div>

          <h1 style={userEmailStyle} >Hello "{emailFromLocalStorage}"</h1>
          <h1 style={titleStyle} >Welcome to Kav&.</h1>
            <br></br>
            <h3 style={textStyle}>
                <br></br>
                Welcome to our beauty shopping website, where your journey to radiant and <br/>
                confident beauty begins! Discover a world of luxurious skincare, captivating<br/>
                fragrances, and glamorous makeup products that will enhance your natural<br/>
                beauty and elevate your self-care routine.<br/><br/>

                Indulge in our carefully curated selection of top-tier beauty brands, each<br/>
                chosen for their commitment to quality, innovation, and results. From<br/> 
                iconic industry leaders to emerging beauty disruptors, we bring you a<br/>
                 diverse range of products that cater to all skin types, tones, and preferences.<br></br>
            <br />
            <br />
          </h3> 
        </div>
       
        <h1 style={title1Style}>Best Sellers in Natural</h1>
        <div className='product-container'>
            {ProductsNaturals.map((item, index) => (
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
                
        <footer style={footerStyle}>
          <Footer/>        
        </footer>
      </div>
      </>
    );
  };
  

export default Home;