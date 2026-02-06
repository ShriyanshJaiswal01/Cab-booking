# Uber Clone Application

A full-stack ride-sharing web application built with Node.js/Express backend and React frontend. This project implements real-time ride matching, live tracking, and user authentication for both passengers and captains.

## Project Structure

### Backend (`/BACKEND`)
Node.js/Express.js application handling all backend logic, API routes, database operations, and real-time WebSocket communication.

**Key Files:**
- `app.js` - Express application setup
- `server.js` - Server initialization and startup
- `socket.js` - WebSocket configuration for real-time features

**Directory Structure:**
- `controllers/` - Request handlers for different routes
  - `user.controller.js` - User authentication and profile management
  - `captain.controller.js` - Captain authentication and profile management
  - `ride.controller.js` - Ride creation, acceptance, completion logic
  - `map.controller.js` - Map and location services
  
- `services/` - Business logic layer
  - `user.service.js` - User operations
  - `captain.service.js` - Captain operations
  - `ride.service.js` - Ride operations
  - `maps.service.js` - Map and distance calculations
  
- `models/` - MongoDB database schemas
  - `user.model.js` - User schema
  - `captain.model.js` - Captain schema
  - `ride.model.js` - Ride schema
  - `blacklistToken.model.js` - Token blacklisting for logout
  
- `routes/` - API route definitions
  - `user.route.js` - User endpoints
  - `captain.route.js` - Captain endpoints
  - `ride.route.js` - Ride endpoints
  - `maps.route.js` - Map endpoints
  
- `middlewares/` - Express middleware
  - `auth.middleware.js` - JWT authentication and authorization
  
- `db/` - Database configuration
  - `db.js` - MongoDB connection setup

### Frontend (`/frontend`)
React.js application with Vite build tool and Tailwind CSS styling. Implements responsive UI for both passengers and captains.

**Key Files:**
- `vite.config.js` - Vite bundler configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS configuration
- `index.html` - HTML entry point
- `main.jsx` - React application entry point
- `app.jsx` - Root React component
- `app.css` - Global styles
- `index.css` - Additional global styles

**Directory Structure:**
- `pages/` - Page components
  - `Home.jsx` - User home/landing page
  - `UserLogin.jsx` - User login page
  - `UserSignup.jsx` - User registration
  - `UserLogout.jsx` - User logout
  - `UserProtectedWrapper.jsx` - Authentication guard for user routes
  - `Riding.jsx` - Active ride page for users
  - `CaptainHome.jsx` - Captain dashboard
  - `CaptainLogin.jsx` - Captain login
  - `CaptainSignup.jsx` - Captain registration
  - `CaptainProtectedWrapper.jsx` - Authentication guard for captain routes
  - `CaptainRiding.jsx` - Active ride page for captains
  - `Start.jsx` - Application start page

- `components/` - Reusable UI components
  - `LocationSearchPanel.jsx` - Search for pickup/dropoff locations
  - `VehiclePanel.jsx` - Vehicle type selection
  - `ConfirmRide.jsx` - Ride confirmation dialog
  - `ConfirmRidePopUp.jsx` - Ride confirmation popup
  - `LookingForDriver.jsx` - Search animation while finding driver
  - `WaitingForDriver.jsx` - Waiting state display
  - `RidePopUp.jsx` - Incoming ride notification
  - `LiveTracking.jsx` - Real-time map tracking
  - `CaptainDetails.jsx` - Captain information display
  - `FinishRide.jsx` - Ride completion screen

- `context/` - React Context for state management
  - `UserContext.jsx` - User authentication and data state
  - `CaptainContext.jsx` - Captain authentication and data state
  - `SocketContext.jsx` - WebSocket connection and real-time updates

- `assets/` - Images, icons, and static files
- `public/` - Public static assets

## Features

### User Features
- User registration and login with JWT authentication
- Real-time ride request creation
- Live driver tracking on map
- Ride history and details
- Secure logout with token blacklisting

### Captain Features
- Captain registration and login
- Accept/decline ride requests
- Real-time navigation to pickup location
- Complete rides after dropoff
- Ride history and earnings

### General Features
- Real-time WebSocket communication for live updates
- Google Maps integration for location services
- Responsive design with Tailwind CSS
- Protected routes with authentication guards
- Token-based authentication and authorization
- Location search and autocomplete

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Real-time:** WebSocket (Socket.IO)
- **External APIs:** Google Maps API

### Frontend
- **Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **HTTP Client:** Axios (implied from typical setup)

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB instance running
- Google Maps API key

### Backend Setup

1. Navigate to BACKEND directory:
   ```bash
   cd BACKEND
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with required variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   GOOGLE_MAPS_API_KEY=<your_api_key>
   PORT=3000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with API configuration:
   ```
   VITE_BACKEND_URL=http://localhost:3000
   VITE_GOOGLE_MAPS_API_KEY=<your_api_key>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Routes

### User Routes (`/api/users`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /profile` - Get user profile
- `POST /logout` - User logout

### Captain Routes (`/api/captains`)
- `POST /register` - Captain registration
- `POST /login` - Captain login
- `GET /profile` - Get captain profile
- `POST /logout` - Captain logout

### Ride Routes (`/api/rides`)
- `POST /request` - Request a ride
- `POST /accept/:rideId` - Captain accepts ride
- `POST /start/:rideId` - Start ride
- `POST /end/:rideId` - End/complete ride

### Maps Routes (`/api/maps`)
- `GET /get-coordinates` - Get location coordinates
- `GET /get-distance-time` - Calculate distance and ETA
- `GET /get-suggestions` - Location autocomplete suggestions

## Real-time Features

The application uses WebSocket (Socket.IO) for real-time communication:
- **User joins socket room** - Subscribe to ride updates
- **Captain receives ride requests** - Real-time notifications
- **Live location tracking** - Captain location updates during ride
- **Ride status updates** - Real-time ride state changes

## Security

- JWT tokens for authentication
- Protected routes with middleware
- Token blacklisting on logout
- Environment variable configuration for sensitive data

## File Structure Summary

```
UBER/
├── README.md (this file)
├── BACKEND/
│   ├── app.js
│   ├── server.js
│   ├── socket.js
│   ├── package.json
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── db/
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── context/
    │   └── assets/
    ├── public/
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── index.html
```

## Future Enhancements

- Payment integration
- Rating and review system
- Ride sharing (multiple passengers)
- Multiple payment methods
- Admin dashboard
- Advanced analytics
- Push notifications
- Offline mode support

## Contributing

To contribute to this project, please follow the existing code structure and patterns.

## License

This project is a learning/demonstration project.

---

For more details about the backend, see [BACKEND/README.md](BACKEND/README.md)
