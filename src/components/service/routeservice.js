import axios from 'axios';

const apiBaseURL = 'http://localhost:8080/';

export async function fetchAllRoutes() {
    try {
      const response = await axios.get(`${apiBaseURL}route/getroutes`);
      return response.data; 
    } catch (error) {
      console.error("Error fetching routes:", error);
      throw error; 
    }
  }