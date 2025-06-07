import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import useSetRoleOnSignup from "../hooks/useSetRoleOnSignup";

// mode: "login" or "signup"
const ClerkAuthPage = ({ mode }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get("role") || "user";

  // Set role in metadata after signup
  if (mode === "signup") {
    useSetRoleOnSignup(role);
  }

  return (
    <div style={{ marginTop: 60, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>{role === "admin" ? "Admin" : "User"} {mode === "login" ? "Login" : "Signup"}</h2>
      <div style={{ marginTop: 24 }}>
        {mode === "login" ? (
          <SignIn
            appearance={{ elements: { formButtonPrimary: { backgroundColor: "#1976d2" } } }}
            afterSignInUrl={role === "admin" ? "/admin-dashboard" : "/user-dashboard"}
          />
        ) : (
          <SignUp
            appearance={{ elements: { formButtonPrimary: { backgroundColor: "#1976d2" } } }}
            afterSignUpUrl={role === "admin" ? "/admin-dashboard" : "/user-dashboard"}
          />
        )}
      </div>
    </div>
  );
};

export default ClerkAuthPage;