# Anthill Networks

A comprehensive project containing two main applications: a Second-hand Car Buying Application and a Bus Booking System API.

## 🚗 Second-hand Car Buying Application

A modern React-based web application for buying and selling second-hand cars with Google authentication and admin management features.

### Features

- **User Authentication**: Google OAuth integration using Firebase
- **Role-based Access**: Admin and User roles with different permissions
- **Car Management**: 
  - Browse available cars with detailed information
  - Search and filter cars by make, model, year, and price
  - View car images and descriptions
- **Purchase Requests**: Users can request to buy cars
- **Admin Dashboard**: 
  - Add, edit, and manage car listings
  - Handle purchase requests (approve/reject)
  - View all cars and requests in one place
- **Modern UI**: Built with Material-UI for a beautiful, responsive design

### Tech Stack

- **Frontend**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **UI Framework**: Material-UI (MUI)
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Build Tool**: Create React App

### Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── LoginPage.tsx   # Google authentication
│   │   ├── CarListPage.tsx # Car browsing interface
│   │   └── AdminDashboard.tsx # Admin management
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   ├── types.d.ts          # TypeScript type definitions
│   ├── firebase.ts         # Firebase configuration
│   └── App.tsx            # Main application component
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🚌 Bus Booking System API

A robust REST API for bus booking management with JWT authentication, MongoDB database, and Docker containerization.

### Features

- **User Management**: Registration, login, and profile management
- **Bus Management**: Add, update, and manage bus information
- **Route Management**: Create and manage bus routes
- **Booking System**: Make, view, and cancel bus bookings
- **Authentication**: JWT-based secure authentication
- **Role-based Access**: Different permissions for users and admins
- **Docker Support**: Containerized application for easy deployment

### Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Containerization**: Docker
- **Deployment**: AWS EC2 ready
- **Validation**: Express-validator
- **Security**: bcrypt for password hashing

### Project Structure

```
Backend/
├── controllers/           # Request handlers
│   ├── authController.js  # Authentication logic
│   ├── busController.js   # Bus management
│   ├── routeController.js # Route management
│   └── bookingController.js # Booking operations
├── models/               # Database models
│   ├── User.js          # User schema
│   ├── Bus.js           # Bus schema
│   ├── Route.js         # Route schema
│   └── Booking.js       # Booking schema
├── routes/              # API routes
│   ├── auth.js          # Authentication routes
│   ├── bus.js           # Bus routes
│   ├── route.js         # Route routes
│   └── booking.js       # Booking routes
├── middleware/          # Custom middleware
│   └── auth.js          # JWT authentication middleware
├── index.js            # Main server file
├── Dockerfile          # Docker configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for Bus Booking API)
- Firebase account (for Car Buying App)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshu-Chouhan/Anthill-Networks.git
   cd Anthill-Networks
   ```

2. **Set up the Car Buying Application (Frontend)**
   ```bash
   cd frontend
   npm install
   ```

3. **Set up the Bus Booking API (Backend)**
   ```bash
   cd Backend
   npm install
   ```

### Configuration

#### Car Buying Application

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Google Authentication
3. Create a Firestore database
4. Copy your Firebase config to `frontend/src/firebase.ts`

#### Bus Booking API

1. Set up MongoDB database (local or MongoDB Atlas)
2. Create `.env` file in the Backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

### Running the Applications

#### Car Buying Application
```bash
cd frontend
npm start
```
The application will run on `http://localhost:3000`

#### Bus Booking API
```bash
cd Backend
npm start
```
The API will run on `http://localhost:5000`

### Docker Deployment

#### Bus Booking API with Docker
```bash
cd Backend
docker build -t bus-booking-api .
docker run -p 5000:5000 bus-booking-api
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Bus Endpoints

- `GET /api/bus` - Get all buses
- `POST /api/bus` - Add new bus (admin only)
- `PUT /api/bus/:id` - Update bus (admin only)
- `DELETE /api/bus/:id` - Delete bus (admin only)

### Route Endpoints

- `GET /api/route` - Get all routes
- `POST /api/route` - Add new route (admin only)
- `PUT /api/route/:id` - Update route (admin only)
- `DELETE /api/route/:id` - Delete route (admin only)

### Booking Endpoints

- `GET /api/booking` - Get user bookings
- `POST /api/booking` - Create new booking
- `PUT /api/booking/:id` - Update booking
- `DELETE /api/booking/:id` - Cancel booking

## 🔧 Development

### Available Scripts

#### Frontend (Car Buying App)
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

#### Backend (Bus Booking API)
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
```

## 🚀 Deployment

### Frontend Deployment
- Deploy to Vercel, Netlify, or Firebase Hosting
- Build the project: `npm run build`
- Upload the `build` folder

### Backend Deployment (AWS EC2)
1. Launch EC2 instance
2. Install Docker
3. Clone repository
4. Build and run Docker container
5. Configure environment variables
6. Set up reverse proxy (nginx)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Priyanshu Chouhan**
- GitHub: [@Priyanshu-Chouhan](https://github.com/Priyanshu-Chouhan)

## 🙏 Acknowledgments

- Firebase for authentication and database services
- Material-UI for the beautiful component library
- MongoDB for the robust database solution
- Express.js community for the excellent framework
- React team for the amazing frontend library

---

⭐ If you find this project helpful, please give it a star on GitHub!
