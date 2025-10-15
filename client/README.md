# Modern MERN Stack Developer Portfolio

This is a futuristic, fully-responsive portfolio website for Shivam, a MERN stack developer and cybersecurity enthusiast.

![Portfolio Screenshot](https://via.placeholder.com/1200x600.png?text=Shivam's+Portfolio)

### ✨ Features

- **Modern UI/UX:** Glassmorphism, neon glows, and smooth animations.
- **Tech Stack:** React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion.
- **Dynamic Content:** Time-based greetings and projects fetched from a database.
- **Interactive:** Custom cursor, scroll animations, and a functional contact form with email notifications.
- **Fully Responsive:** Looks great on all devices, from mobile to ultra-wide screens.

### 🛠️ Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Email Service:** Nodemailer

---

### 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

#### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- A MongoDB Atlas account (or a local MongoDB instance)

#### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/shivam-portfolio.git](https://github.com/your-username/shivam-portfolio.git)
cd shivam-portfolio
```

#### 2. Backend Setup

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file and add your variables
cp .env.example .env 
# Then, fill in the values in your new .env file:
# PORT=5000
# MONGO_URI="your_mongodb_atlas_connection_string"
# CLIENT_URL="http://localhost:5173"
# EMAIL_USER="your-email@gmail.com"
# EMAIL_PASS="your_gmail_app_password"
# EMAIL_RECIPIENT="your-personal-email@gmail.com"

# Start the backend server
npm start
```

#### 3. Frontend Setup

```bash
# Open a new terminal and navigate to the client directory
cd client

# Install dependencies
npm install

# Create a .env file
# VITE_API_BASE_URL="http://localhost:5000"

# Start the frontend development server
npm run dev
```

Your application should now be running!
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

### 🌐 Deployment

1.  **Backend (Render/Railway):**
    - Push your code to a GitHub repository.
    - Create a new "Web Service" on Render and connect your repository.
    - Set the build command to `npm install` and the start command to `npm start`.
    - Add your environment variables from the `.env` file in the Render dashboard.

2.  **Frontend (Vercel):**
    - Connect your GitHub repository to Vercel.
    - Vercel will auto-detect the Vite project.
    - Add your `VITE_API_BASE_URL` environment variable, pointing to your live backend URL (e.g., `https://your-backend-name.onrender.com`).
    - Deploy!