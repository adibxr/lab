# Library Management System (React + Clerk)

## Features
- Clerk-based authentication (no backend login/signup)
- Role selection: User chooses "Admin" or "User" and "Login/Signup"
- Role-based dashboard redirects and protection

## Setup

1. Clone the repo and install dependencies:
   ```
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   npm install
   ```

2. Set up Clerk:
   - [Create a Clerk application](https://clerk.com/)
   - Copy your **publishable key** to `.env`:
     ```
     REACT_APP_CLERK_PUBLISHABLE_KEY=your_key_here
     ```

3. Update Clerk dashboard to allow your deployment URLs.

4. Start the app:
   ```
   npm start
   ```

5. Deploy to Vercel/Netlify as desired.

## Project Structure

- `/src/pages/RoleSelector.js` - Choose role and action (login/signup)
- `/src/pages/ClerkAuthPage.js` - Clerk login/signup UI
- `/src/pages/AdminDashboard.js` - Admin dashboard
- `/src/pages/UserDashboard.js` - User dashboard
- `/src/hooks/useSetRoleOnSignup.js` - Sets role in Clerk metadata after signup
- `/src/App.js` - Routing and role protection
