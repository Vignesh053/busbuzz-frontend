import React, { useState } from "react";
import "./style/SearchSection.css";
import BrowseRoutes from "./BrowseRoutes";


const SearchSection = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  

  return (
    <div id="mainpage" >
      <h1>India's No. 1 Online Bus Ticket Booking Site</h1>

      <section className="searchsection">
        <form id="searchform">
          <div className="searchinput">
            <label htmlFor="source">Source:</label>
            <input
              type="text"
              id="source"
              name="source"
              placeholder="where to pickup?"
              onChange={(e) => setSource(e.target.value)}
            />
          </div>
          <div className="searchinput">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              name="destination"
              id="destination"
              placeholder="where to drop?"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </form>
      </section>

      <BrowseRoutes source={source} destination={destination} />
    </div>
  );
};

export default SearchSection;
