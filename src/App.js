import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import HotelDetails from './pages/hotelDetails';
import Footer from './components/footer';

function App() {
  return (

      <div className="App">
        {/*Header Component*/}
        <Navbar />
        {/*Pages*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:hotelId" element={<HotelDetails />} />
          </Routes>
        </BrowserRouter>
        {/*Footer Component*/}
        <Footer />
      </div>

  );
}

export default App;
