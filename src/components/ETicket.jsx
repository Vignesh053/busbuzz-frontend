import React from 'react'
import { useLocation } from 'react-router-dom'
import './style/ETicket.css';
import useCheckLoggedIn from './useCheckLoggedIn.jsx';

const ETicket = () => {

    useCheckLoggedIn();

    const location = useLocation();
    const {bookingDetails} = location.state;
    console.log(bookingDetails);
  return (
    <div className="e-ticket">
            <h1>E-Ticket</h1>
            <table className="ticket-table">
                <tbody>
                    <tr>
                        <th>Booking ID</th>
                        <td>{bookingDetails.id}</td>
                    </tr>
                    <tr>
                        <th>Booking Date</th>
                        <td>{new Date(bookingDetails.bookingdate).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <th>Total Fare</th>
                        <td>₹{bookingDetails.totalfare}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{bookingDetails.status}</td>
                    </tr>
                    <tr>
                        <th>Payment Method</th>
                        <td>{bookingDetails.paymentmethod}</td>
                    </tr>
                    <tr>
                        <th>Route</th>
                        <td>{bookingDetails.routeDto.source} - {bookingDetails.routeDto.destination}</td>
                    </tr>
                    <tr>
                        <th>Departure - Arrival Time</th>
                        <td>{new Date(bookingDetails.routeDto.departuretime).toLocaleTimeString()} - {new Date(bookingDetails.routeDto.arrivaltime).toLocaleTimeString()}</td>
                    </tr>
                    <tr>
                        <th>Distance</th>
                        <td>{bookingDetails.routeDto.distanceinkms} km</td>
                    </tr>
                    <tr>
                        <th>Bus Name</th>
                        <td>{bookingDetails.busDto.busname}</td>
                    </tr>
                    <tr>
                        <th>Bus Number</th>
                        <td>{bookingDetails.busDto.busnumber}</td>
                    </tr>
                    <tr>
                        <th>Bus Type</th>
                        <td>{bookingDetails.busDto.bustype}</td>
                    </tr>
                    {bookingDetails.passengersDto.map((passenger, index) => (
                        <tr key={index}>
                            <th>Passenger {index + 1}</th>
                            <td>{passenger.passengername}, Age: {passenger.passengerage}, Gender: {passenger.gender}, Seat: {passenger.seatnumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
  )
}

export default ETicket