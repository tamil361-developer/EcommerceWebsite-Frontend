import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // Demo: Accept any non-empty email/password
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    // Demo: Accept any credentials
    setSuccess(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center login-container">
      <div className="card login-card">
        <h2 className="text-center login-title mb-4">Login</h2>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        {success && (
          <div className="alert alert-success py-2">
            Login successful! 
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <span className="text-muted small">New to Flipkart?</span>
          <a href="#" className="ms-1 login-link">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
