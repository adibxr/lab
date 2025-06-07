import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelector = () => {
  const navigate = useNavigate();

  const handleSelect = (role, action) => {
    navigate(`/${action}?role=${role}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 80 }}>
      <h2>Welcome! Who are you?</h2>
      <div style={{ margin: 24 }}>
        <button onClick={() => handleSelect("admin", "login")} style={{ margin: 8 }}>Admin Login</button>
        <button onClick={() => handleSelect("admin", "signup")} style={{ margin: 8 }}>Admin Signup</button>
      </div>
      <div style={{ margin: 24 }}>
        <button onClick={() => handleSelect("user", "login")} style={{ margin: 8 }}>User Login</button>
        <button onClick={() => handleSelect("user", "signup")} style={{ margin: 8 }}>User Signup</button>
      </div>
    </div>
  );
};

export default RoleSelector;