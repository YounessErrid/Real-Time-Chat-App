# Real-Time Chat App
 
Chat Application (MERN Stack)
A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.io for real-time messaging and JWT authentication.

Features
User Authentication:
Sign up and login with JWT-based authentication.
Store passwords securely using bcrypt.
Real-time Chat:
Send and receive messages in real-time.
Use Socket.io for bidirectional communication.
Message History:
Persist chat messages in a MongoDB database.
Retrieve chat history on login.
User Profiles:
Users can view and edit their profile (optional).
Responsive UI:
Built with React and Material-UI for a smooth user experience.
Tech Stack
Frontend:

React.js
Axios for API calls
Socket.io-client for real-time communication
Material-UI for UI components
React Router for navigation
Backend:

Node.js
Express.js
MongoDB (using Mongoose ORM)
Socket.io for real-time communication
JSON Web Tokens (JWT) for user authentication
bcrypt for password hashing
Setup and Installation
Prerequisites
Make sure you have the following installed on your system:

Node.js (v14+ recommended)
MongoDB (or use MongoDB Atlas for cloud database)
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/chat-app.git
cd chat-app
Navigate to the backend directory:

bash
Copy code
cd backend
Install the dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file and add the following:
bash
Copy code
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://localhost:27017/chat-app
Start the backend server:

bash
Copy code
npm start
The server will start running on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install the dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file and add the following:
arduino
Copy code
REACT_APP_API_URL=http://localhost:5000
Start the React development server:

bash
Copy code
npm start
The frontend will start running on http://localhost:3000.

Running the Application
Once both the backend and frontend are running, you can visit http://localhost:3000 in your browser to access the chat application. You should be able to:

Sign up and log in to your account.
Send and receive messages in real-time.
Folder Structure
Backend
bash
Copy code
backend/
├── controllers/          # Controller files to handle business logic
├── models/               # MongoDB models (User, Message)
├── routes/               # API routes (auth, chat)
├── config/               # Configuration files (database, JWT)
├── server.js             # Entry point to the server
└── .env                  # Environment variables
Frontend
bash
Copy code
frontend/
├── src/
│   ├── components/       # UI components (Login, ChatBox, etc.)
│   ├── pages/            # React pages (LoginPage, ChatPage)
│   ├── services/         # API and Socket.io services
│   ├── App.js            # Main App component
│   └── index.js          # Entry point to the React app
└── .env                  # Environment variables (API URL)
Usage
Authentication
Sign Up: Users can create an account by providing a unique email and password.
Login: After signing up, users can log in to the app using their credentials.
JWT Authentication: On successful login, a JWT is generated and stored in the browser's localStorage for subsequent requests.
Real-Time Chat
Once logged in, users can send and receive messages in real-time.
The chat messages are instantly broadcasted to all connected clients using Socket.io.
Messages are saved in the MongoDB database to retrieve chat history.
Development
To contribute or modify the project:

Fork the repository and clone your fork.
Create a feature branch:
bash
Copy code
git checkout -b feature/your-feature-name
Make your changes and commit:
bash
Copy code
git commit -m "Added new feature"
Push your changes to your fork:
bash
Copy code
git push origin feature/your-feature-name
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Socket.io: Real-time bidirectional communication between the client and server.
JWT: Secure user authentication.
React: Building the user interface with a component-based architecture.