import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCheckLoggedIn from "./useCheckLoggedIn.jsx";

function RouteCard({ route }) {
  useCheckLoggedIn();

  const [showBuses, setShowBuses] = useState(false);

  const toggleBuses = () => {
    setShowBuses(!showBuses);
  };

  return (
    <div className="route-card" onClick={toggleBuses}>
      <h3 className="route-details">
        From {route.source} To {route.destination}
      </h3>
      <div className="route-details">
        <p>Departure Time: </p>
        <p>{new Date(route.departuretime).toLocaleString()}</p>
      </div>
      <div className="route-details">
        <p>Arrival Time: </p>
        <p> {new Date(route.arrivaltime).toLocaleString()}</p>
      </div>
      <div className="route-details">
        <p>Distance: {route.distanceinkms}km</p>
        
      </div>
      <div className="route-details">
        <p>Fare: </p>
        <p> Rs.{route.fare}</p>
      </div>

      <Link to="/buses" state={{ buses: route.buses, routeDetails: route }}>
        View Buses
        <p></p>
      </Link>
    </div>
  );
}

export default RouteCard;
