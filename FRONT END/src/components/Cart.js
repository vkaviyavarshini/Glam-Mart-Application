import React from "react";
import "./Cart.css";
import {createStore} from 'redux';
import { Link } from "react-router-dom";
import logo from './logo1.jpg';
import personLogo from './person.png';
import {Provider,useSelector,useDispatch} from 'react-redux';
import Footer from './Footer';


const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const incrementQuantity = (itemId) => ({
  type: INCREMENT_QUANTITY,
  payload: itemId,
});

const decrementQuantity = (itemId) => ({
  type: DECREMENT_QUANTITY,
  payload: itemId,
});

const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

const loadCartFromLocalStorage = () => {
  const cartFromStorage = localStorage.getItem("cart");
  return cartFromStorage ? JSON.parse(cartFromStorage) : initialState;
};

// Function to save cart state to localStorage
const saveCartToLocalStorage = (cartState) => {
  localStorage.setItem("cart", JSON.stringify(cartState));
};

// Initialize the state from localStorage
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_QUANTITY:
      const incrementedState = {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
      saveCartToLocalStorage(incrementedState);
      return incrementedState;

    case DECREMENT_QUANTITY:
      const decrementedState = {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        ),
      };
      saveCartToLocalStorage(decrementedState);
      return decrementedState;

    case REMOVE_FROM_CART:
      const removedState = {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
      saveCartToLocalStorage(removedState);
      return removedState;

    default:
      saveCartToLocalStorage(state);
      return state;
  }
};

const initialState = loadCartFromLocalStorage();


const store = createStore(reducer);

// Component
const CartC = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  const bodyStyle = {
    backgroundColor:'lavenderblush',
    fontFamily: 'Segoe UI',
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
  const logoStyle = {
    width: '250px',
    height: '70px',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
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

  const titleStyle = {
    fontSize: '40px',
    lineHeight: '1.5',
    margin: '20px',
    textAlign: 'justify',
    marginLeft: '230px',
    marginTop: ' 85px',
  };



  return (
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
    <div className="cart-container">
      <h1 style={titleStyle}>Shopping Cart</h1>
      <div className="cart-items">
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.image} alt={item.name} height={50} width={50} className="item-image"/>
                <h3 className="item-name">{item.name}</h3>
                <button className="reducer1"onClick={() => handleDecrement(item.id)}>-</button>
                <h4 className="item-quantity"> {item.quantity} </h4>
                <button className="reducer2" onClick={() => handleIncrement(item.id)}>+</button>
                <div className="item-price">₹{(item.price*item.quantity).toFixed(2)}</div>
                <button  className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </ul>

      )}
      </div>
      <p className="total"> Total: ₹{getTotalPrice()}</p>
    </div>
    <br/><br/>
    <footer style={footerStyle}>
    <Footer/>        
    </footer>
  </div>
  );
}

const Cart = () => (
  <Provider store={store}>
    <CartC />
  </Provider>
);

export default Cart;