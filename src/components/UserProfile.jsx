import React, { useState, useEffect } from "react";
import { fetchBookings, getUser, updateUser } from "./service/userservice";
import "./style/UserProfile.css";
import { useNavigate } from "react-router-dom";
import useCheckLoggedIn from './useCheckLoggedIn.jsx';
import { logout } from "./service/userservice";

const UserProfile = () => {

  useCheckLoggedIn();


  const userId = 1; 
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDetails = await getUser(userId);
      if (userDetails) {
        setUser(userDetails);
        setFormData({
          username: userDetails.username,
          email: userDetails.email,
          phonenumber: userDetails.phonenumber,
        });
      }
    };
    fetchUserDetails();
  }, [userId]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setFormData({
      username: user.username,
      email: user.email,
      phonenumber: user.phonenumber,
    });
    setEditMode(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedDetails = await updateUser(userId, formData);
      setUser(updatedDetails);
      setEditMode(false);
    } catch (error) {
      alert("Failed to update profile. Please try again later.");
    }
  };

  const handleViewBookingsClick = async () => {
    const bookingsData = await fetchBookings(userId);
    navigate('/user/bookings', {state: {bookings: bookingsData}});
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      {editMode ? (
        <form onSubmit={handleSubmit} className="user-form">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            id="phonenumber"
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
          />

          <div className="form-actions">
            <button
              type="button"
              onClick={handleCancelClick}
              className="cancel-button"
            >
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="user-details">
          <table>
            <tbody>
              <tr>
                <th>Username:</th>
                <td>{user.username}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Phone Number:</th>
                <td>{user.phonenumber}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleEditClick} className="edit-button">
            Edit Profile
          </button>
          <button
            onClick={handleViewBookingsClick}
            className="view-bookings-button"
          >
            View Bookings
          </button>
          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Log Out
          </button>
          
        </div>
      )}
    </div>
  );
};

export default UserProfile;
