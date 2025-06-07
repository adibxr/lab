import React from "react";
import { UserButton } from "@clerk/clerk-react";

const AdminDashboard = () => (
  <div>
    <UserButton />
    <h2>Admin Dashboard</h2>
    {/* Admin features here */}
  </div>
);

export default AdminDashboard;