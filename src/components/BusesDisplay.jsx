import React from "react";
import { useLocation } from "react-router-dom";
import "./style/BusesDisplay.css";
import { Link } from "react-router-dom";
import useCheckLoggedIn from './useCheckLoggedIn.jsx';

const BusesDisplay = () => {
  useCheckLoggedIn();

  const location = useLocation();

  const { buses, routeDetails } = location.state;

  console.log(routeDetails);
  console.log(buses);

  return (
    <div id="bus-display">
      <h2>
        Available Buses on Route: {routeDetails.source} -{" "}
        {routeDetails.destination}
      </h2>

      <ul className="bus-list">
        {" "}
        {buses.map((bus) => (
          <li key={bus.id} className="bus-item">
            <h3>
              {bus.busname} ({bus.bustype})
            </h3>
            <p>Bus Number: {bus.busnumber}</p>
            <p>Total Seats: {bus.totalseats}</p>
            <Link
              to="/booking/passengers"
              state={{ routeDetails: routeDetails, selectedBus: bus }}
            >
              Book Now
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusesDisplay;
