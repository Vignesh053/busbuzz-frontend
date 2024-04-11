import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style/PassengerDetails.css";
import useCheckLoggedIn from './useCheckLoggedIn.jsx';

const PassengerDetails = () => {
  useCheckLoggedIn();

  const location = useLocation();
  const { routeDetails, selectedBus } = location.state;

  const navigate = useNavigate();

  const [passengers, setPassengers] = useState([
    {
      id: 1,
      passengername: "",
      passengerage: 0,
      gender: "",
      seatnumber: 1,
    },
  ]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;

    const updatedPassengers = [...passengers];

    updatedPassengers[index][name] = value;
    setPassengers(updatedPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      routeDetails: routeDetails,
      selectedBus: selectedBus,
      passengers: passengers,
    };

    navigate("/booking/confirmation", { state: bookingData });
  };

  const handleAddPassenger = () => {
    const newId =
      passengers.length > 0 ? passengers[passengers.length - 1].id + 1 : 2;

    setPassengers([
      ...passengers,
      {
        id: newId,
        passengername: "",
        passengerage: "",
        gender: "",
        seatnumber: newId,
      },
    ]);
  };

  return (
    <div className="booking-form">
      <h2>Passenger Details</h2>

      <form className="passengerform" onSubmit={(e) => handleSubmit(e)}>
        {passengers.map((passenger, index) => (
          <div className="passenger-form" key={passenger.id}>
            <div className="input">
              <label htmlFor={`passengername-${index}`}>Passenger Name:</label>
              <input
                type="text"
                id={`passengername-${index}`}
                name="passengername"
                value={passenger.passengername}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>

            <div className="input">
              <label htmlFor={`passengerage-${index}`}>Age:</label>
              <input
                type="number"
                id={`passengerage-${index}`}
                name="passengerage"
                value={passenger.passengerage}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>

            <div className="input">
              <label htmlFor={`gender-${index}`}>Gender:</label>
              <select
                id={`gender-${index}`}
                name="gender"
                value={passenger.gender}
                onChange={(e) => handleInputChange(e, index)}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        ))}

        <button type="button" onClick={handleAddPassenger}>Add Passenger</button>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PassengerDetails;
