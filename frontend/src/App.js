import './App.css';

// Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
// import About from './pages/About/About';
// import Menu from './pages/Menu/Menu';
// import Schedule from './pages/Schedule/Schedule';
// import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />        
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
