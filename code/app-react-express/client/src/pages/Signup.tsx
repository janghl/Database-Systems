// Signup.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement signup logic here
    console.log("Signing up with:", username, password);
  };

  return (
    <div className="screen">
      <NavBar />
      <div className="login-form" style={{ marginTop: '50px' }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p style={{ marginTop: '10px' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
