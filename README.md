## Overview

BusBuzz is a web application that allows users to book bus tickets online.

## Features

- User Registration and Authentication
- Search for bus routes based on source, destination.
- View available buses with details such as departure time, arrival time, and fare
- Select seats and complete the booking process
- View booking history.

## Technology Stack

**Frontend**

- React
- Vite
- CSS

**Backend**

- Spring Boot
- Spring Security
- Spring JPA

**Database**

- MySQL

**Other Tools**

- Axios (for AJAX calls)

## Getting Started

### Prerequisites

- Java 17 or higher
- Node.js and npm
- MySQL Server

### Installation

1. Clone the repository:
   frontend:

```
https://github.com/Vignesh053/busbuzz-frontend.git
```

backend:

```
https://github.com/Vignesh053/busbuzz-backend.git
```

2. Set up the backend:

   - Open the project in your preferred IDE
   - Configure the database connection in `application.properties` which is under src/main/resources

   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/bus_ticket_book (database name)
   spring.datasource.username=root (username for mysql)
   spring.datasource.password=password (password for mysql)
   ```

   - Build and run the Spring Boot application

3. set up database:

   - launch mysql workbench
   - run these queries for user details.

   for users table:

   ```
   insert into users(email,password,username)values("john@gamil.com","$2a$10$db6Ul1dzzUYvuqmsLqJhpecwcjTVqL4nKREHneVmjDH4yrD.qTIM2","john");
   ```

   for route table:

   ```
   INSERT INTO route (arrivaltime, departuretime, destination, distanceinkms, fare, source)
   VALUES ('2024-04-12 10:30:00', '2024-04-12 06:00:00', 'Tirunelveli', 160, 450, 'Madurai');

   INSERT INTO route (arrivaltime, departuretime, destination, distanceinkms, fare, source)
   VALUES ('2024-04-11 20:00:00', '2024-04-11 18:00:00', 'Kanyakumari', 70, 200, 'Nagercoil');
   ```

   for bus table:

   ```
   INSERT INTO buses (busname, busnumber, bustype, totalseats, route_id)
   VALUES ('Night Rider', 'TN-01-A-1234', 'Non AC Sleeper', 40, 1),
   ('Morning Star', 'TN-02-B-2345', 'AC Sleeper', 32, 2),
   ('Skyliner', 'TN-03-C-3456', 'AC Seated', 35, 2),
   ('Sunbird', 'TN-04-D-4567', 'Non AC Sleeper', 44, 1),
   ('Blue Dart', 'TN-05-E-5678', 'AC Sleeper', 30, 2),
   ('Red Arrow', 'TN-06-F-6789', 'AC Seated', 38, 1);
   ```

   


4. Set up the frontend:

   - Navigate to the `frontend` directory
   - Run `npm install` to install dependencies
   - Run `npm run dev` to start the development server

5. Access the application at `http://localhost:5173`


## Screenshots


### Login

![Login Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/login.png)


### Main page

![Main Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/main-page1.png)

![Main page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/main-page2.png)

### search buses
![search](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/search-mainpage.png)


### Bus listing
   - clicking view buses would bring you to bus list page

![Bus list page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/bus-list.png)


### Booking ticket process
  - clicking book now would bring to passenger details fill up page
  - clicking add passenger would reveal another form below as many passengers you want.
  - clicking continue would bring you to confirm booking page

![add passenger Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/passenger1.png)

![add passenger Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/passenger2.png)

### Booking confirm

![Booking confirm Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/confirm%20booking.png)

### E-ticket
   - confirming the details in booking confirming will finish the booking process and will route you to E-ticket page
![E-ticket Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/booking-eticket.png)

### profile
  - clicking profile icon will navigate to profile page where you can edit profile, view your booking history and will let you log out
![profile Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/user-profile.png)

  - edit profile
  ![edit profile Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/edit-profile.png)
  ![edit profile Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/updated-user-profile.png)

  - view bookings history
  ![bookings history Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/bookings1.png)
  ![bookings history Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/bookings2.png)

  - clicking view e-ticket will let you see all details in E-ticket
  ![E-ticket Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/booking-eticket.png)

### Register a new user

![Register Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/register1.png)

![Register Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/register2.png)

  - after registration in database
![Register Page](https://github.com/Vignesh053/busbuzz-frontend/blob/7159a6335007f7d2420db46f54dc4a095d98d881/src/screenshots/register-db.png)
