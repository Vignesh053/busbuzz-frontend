import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style/UserBookings.css'
import useCheckLoggedIn from './useCheckLoggedIn.jsx';


const UserBookings = () => {

  useCheckLoggedIn();


  const location = useLocation();
  const navigate = useNavigate();
  const { bookings } = location.state;

  const handleViewETicket = (booking) => {
    navigate(`/user/eticket`, {state: {bookingDetails: booking}});
  };

  return (
    <div>
      <h1>Your Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>Booking Date</th>
            <th>Bus Route</th>
            <th>Bus Type</th>
            <th>Number of Passengers</th>
            <th>Total Fare</th>
            <th>View eTicket</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{new Date(booking.bookingdate).toLocaleDateString()}</td>
              <td>
                {booking.routeDto.source} - {booking.routeDto.destination}
              </td>
              <td>{booking.busDto.bustype}</td>
              <td>{booking.passengersDto.length}</td>
              <td>₹{booking.totalfare}</td>
              <td>
                <button className="eticket-btn" onClick={() => handleViewETicket(booking)}>
                  View eTicket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserBookings;
