import './App.css';
import LoginForm from './components/Login';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Feedback from './components/feedback';
import Skin from './components/skin';
import Hair from './components/hair';
import Body from './components/body';
import Fragrance from './components/fragrance';
import MakeUp from './components/makeup';
import Natural from './components/natural';
import Baby from './components/baby';
import Gadgets from './components/gadgets';
import Eye from './components/eye';
import Profile from './components/profile';
import Contact from './components/contact';
import { Provider } from 'react-redux';
import store from './components/store';
import BookAppointment from './components/booking';
import PrivacyPolicy from './components/privacy';

function App() {
  return (
    <div className="App">
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/skin' element={<Skin/>}/>
        <Route path='/hair' element={<Hair/>}/>
        <Route path='/body' element={<Body/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/fragrance' element={<Fragrance/>}/>
        <Route path='/makeup' element={<MakeUp/>}/>
        <Route path='/natural' element={<Natural/>}/>
        <Route path='/baby' element={<Baby/>}/>
        <Route path='/gadgets' element={<Gadgets/>}/>
        <Route path='/eye' element={<Eye/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/book' element={<BookAppointment/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
      </Routes>
    </Router>
    </Provider>
    </div>
  );
}

export default App;