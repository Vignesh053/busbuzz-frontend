import axios from 'axios';


const apiBaseURL = 'http://localhost:8080/user/';



axios.interceptors.response.use(
  (response) => response,
  (error) => {
    
    const errorCode = error?.response?.status;
    if (errorCode === 401 || errorCode === 403) {
      logout();
      alert("Session expired, please login again");
      
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    
    const isLoginOrRegister = config.url.includes('/login') || config.url.includes('/register');

    
    if (!isLoginOrRegister) {
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser =  (registerObj) =>  axios.post(apiBaseURL + "register", registerObj);

export const loginUser =  (username, password) =>  axios.post(apiBaseURL + "login", {username, password});

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username, id) => {
  sessionStorage.setItem("authenticatedUser", username);
  sessionStorage.setItem("userId", id);


}

export const getuserId = () => {
  const userId = sessionStorage.getItem("userId");
  return userId;
}


export const isUserLoggedIn = () => {
  let user = getuserId();

  if(user != null){
      return true;
  }else{
      return false;
  }
}

export const logout = () =>{
  sessionStorage.clear();
  localStorage.clear();
}



export async function getUser(id){
  try {
    const response = await axios.get(`${apiBaseURL}getuser/${id}`);
    return response.data;
  } catch (error) {
    console.error("error occured while fetching user", error);
  }
}

export async function updateUser(id, userData){
  try {
    const response = await axios.post(`${apiBaseURL}update/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("error occured while updating user", error)
    throw error;
  }
}

export async function createBooking(bookingData) {
  try {
    const response = await axios.post(`${apiBaseURL}addbooking`, bookingData);
    return response.data; 
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error; 
  }
}

export async function fetchBookings(userId) { 
  try {
    const response = await axios.get(`${apiBaseURL}getbooking/${userId}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error; 
  }
}



