import React from "react";
import { ClerkProvider, useUser } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RoleSelector from "./pages/RoleSelector";
import ClerkAuthPage from "./pages/ClerkAuthPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFound";

function RequireRole({ role, children }) {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) return <Navigate to="/" />;
  if (user.publicMetadata.role !== role) return <Navigate to="/" />;
  return children;
}

function App() {
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route path="/" element={<RoleSelector />} />
          <Route path="/login" element={<ClerkAuthPage mode="login" />} />
          <Route path="/signup" element={<ClerkAuthPage mode="signup" />} />
          <Route
            path="/admin-dashboard"
            element={
              <RequireRole role="admin">
                <AdminDashboard />
              </RequireRole>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <RequireRole role="user">
                <UserDashboard />
              </RequireRole>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;