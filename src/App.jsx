
import './App.css'
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BusesDisplay from './components/BusesDisplay';
import PassengerDetails from './components/PassengerDetails';
import BookingConfirmation from './components/BookingConfirmation';
import ETicket from './components/ETicket';
import UserProfile from './components/UserProfile';
import UserBookings from './components/UserBookings';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  

  return (
    <BrowserRouter>
    <div id='app'>
      
      <Header />
      <div id="content">
        <Routes>
          <Route path="/" element={<SearchSection />}></Route>
          <Route path="/buses" element={<BusesDisplay />} />
          <Route path='/booking/passengers' element={<PassengerDetails />}></Route>
          <Route path='/booking/confirmation' element={<BookingConfirmation />}></Route>
          <Route path='/user/eticket' element={<ETicket />}></Route>
          <Route path='/user/profile' element={<UserProfile/>} ></Route>
          <Route path='/user/bookings' element={<UserBookings />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
      
      <Footer />
      
    </div>
    </BrowserRouter>
  )
}

export default App
