import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style/BookingConfirmation.css";
import "./service/userservice.js";
import { createBooking } from "./service/userservice.js";
import useCheckLoggedIn from './useCheckLoggedIn.jsx';



const BookingConfirmation = () => {
  
  useCheckLoggedIn();


  const location = useLocation();
  const navigate = useNavigate();
  const { routeDetails, selectedBus, passengers } = location.state;
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [totalFare, setTotalFare] = useState(0);

  useEffect(() => {
    const farePerPassenger = routeDetails.fare || 0;
    setTotalFare(farePerPassenger * passengers.length);
  }, [routeDetails.fare, passengers.length]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmBooking = async () => {
    const bookingData = {
      totalfare: totalFare,
      status: "Confirmed",
      paymentmethod: paymentMethod,
      user_id: 1,
      bus_id: selectedBus.id,
      passengersDto: passengers,
    };

    

    try {
      const response = await createBooking(bookingData);
      console.log("Complete response:", response);

      if (response.id) {
        
        
        navigate(`/user/eticket`, { state: { bookingDetails: response} });
      } else {
        alert("Failed to create booking. Please try again!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmation</h2>
      <table>
        <tbody>
          <tr>
            <th>Route</th>
            <td>
              {routeDetails.source} - {routeDetails.destination}
            </td>
          </tr>
          <tr>
            <th>Bus</th>
            <td>{selectedBus.busname}</td>
          </tr>
          <tr>
            <th>Passengers</th>
            <td>
              <ul>
                {passengers.map((passenger, index) => (
                  <li key={index}>
                    {passenger.passengername} (Age: {passenger.passengerage})
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Seats</th>
            <td>
              {passengers.map((passenger, index) => (
                <span key={index}>
                  {passenger.seatnumber}
                  {index < passengers.length - 1 ? ", " : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Total Fare</th>
            <td>₹{totalFare.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="debitCard">Debit Card</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingConfirmation;
