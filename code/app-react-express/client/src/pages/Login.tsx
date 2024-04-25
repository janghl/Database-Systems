import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

interface UsernameTextboxProps {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UsernameTextbox: React.FC<UsernameTextboxProps> = ({ setUsername }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter username"
      onChange={handleChange}
    />
  );
};

interface PasswordTextboxProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordTextbox: React.FC<PasswordTextboxProps> = ({ setPassword }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <input
      type="password"
      placeholder="Enter password"
      onChange={handleChange}
    />
  );
};

interface SubmitButtonProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }
  

  const SubmitButton: React.FC<SubmitButtonProps> = ({ handleSubmit }) => {
    return <button type="submit">Log in</button>;
  };
  


function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    // Pass username and password to SQL query function or API endpoint
    console.log("Username:", username);
    console.log("Password:", password);
    // Call SQL query function or API endpoint here
  };

  return (
    <div className="screen">
      <NavBar />
      <div className="login-form" style={{ marginTop: '50px' }}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <UsernameTextbox setUsername={setUsername} />
          <PasswordTextbox setPassword={setPassword} />
          <SubmitButton handleSubmit={handleSubmit} />
        </form>
        <p style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
