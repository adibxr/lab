import React from "react";
import { UserButton } from "@clerk/clerk-react";

const UserDashboard = () => (
  <div>
    <UserButton />
    <h2>User Dashboard</h2>
    {/* User features here */}
  </div>
);

export default UserDashboard;