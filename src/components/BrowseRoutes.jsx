import React, { useState, useEffect } from "react";
import { fetchAllRoutes } from "./service/routeservice.js";
import RouteCard from "./RouteCard";
import "./style/BrowseRoutes.css";

const BrowseRoutes = ({ source, destination }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [routesData, setRoutesData] = useState([]);
  const [error, setError] = useState(null);

  const fetchRoutes = async () => {
    setIsLoading(true);
    try {
      const data = await fetchAllRoutes();

      setIsLoading(false);
      if (source || destination) {
        const filteredData = data.filter(
          (route) =>
            route.source.toLowerCase().includes(source.toLowerCase()) &&
            route.destination.toLowerCase().includes(destination.toLowerCase())
        );
        setRoutesData(filteredData);
      } else {
        setRoutesData(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, [source, destination]);

  // useEffect(() => {
  //
  //     const mockRoute = {
  //       id: 1,
  //       source: 'Chennai',
  //       destination: 'Kanniyakumari',
  //       departuretime: '2024-03-24T18:30:00',
  //       arrivaltime: '2024-03-25T06:00:00',
  //       distanceinkms: '700',
  //       fare: 1800,
  //     };
  //     setRoutesData([mockRoute]);  // Set data to an array with the mock route
  //   }, []);

  return (
    <div className="browse-routes">
      <h2>Available Bus Routes</h2>

      {isLoading && <p>Loading routes...</p>}

      {error && <p>Error: {error}</p>}
      <div className="routes-container">
        {routesData.map((route) => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>
    </div>
  );
};

export default BrowseRoutes;
