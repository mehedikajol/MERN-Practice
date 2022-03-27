import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          required
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          required
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          required
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && (
        <p style={{ color: "red", marginTop: "15px" }}>Something went wrong!</p>
      )}
    </div>
  );
}
