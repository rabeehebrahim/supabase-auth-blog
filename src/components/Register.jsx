import React, { useState } from "react";
import EmailVerification from "./EmailVerification";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Register = () => {
  // State for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for handling hover and focus effects for styling
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const nav = useNavigate();

  // Handle form submission
  const handleRegister = async (event) => {
    event.preventDefault();
    if (!email || !password) return alert("Please fill all the details");
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "http://localhost:5173/",
        data: {
          has_user_details: false, // if you want to update metadata
        },
      },
    });
    if(error) {
      return alert(error.message || "Failed to authenticate")
    }    
    setEmail("");
    setPassword("");
    nav("/email-verify");
  };

  // --- Style Objects ---

  const loginContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  };

  const loginFormStyle = {
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    boxSizing: "border-box",
  };

  const headingStyle = {
    marginTop: 0,
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#333",
  };

  const inputGroupStyle = {
    marginBottom: "1rem",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#555",
  };

  // Base input style
  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s", // Smooth transition for focus
  };

  // Dynamic input styles for focus effect
  const emailInputStyle = {
    ...inputStyle,
    borderColor: isEmailFocused ? "#007bff" : "#ccc",
    boxShadow: isEmailFocused ? "0 0 0 3px rgba(0, 123, 255, 0.2)" : "none",
  };

  const passwordInputStyle = {
    ...inputStyle,
    borderColor: isPasswordFocused ? "#007bff" : "#ccc",
    boxShadow: isPasswordFocused ? "0 0 0 3px rgba(0, 123, 255, 0.2)" : "none",
  };

  // Dynamic button style for hover effect
  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: isButtonHovered ? "#0056b3" : "#007bff", // Changes on hover
  };

  return (
    <div style={loginContainerStyle}>
      <form style={loginFormStyle} onSubmit={handleRegister}>
        <h2 style={headingStyle}>Register</h2>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={emailInputStyle}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={passwordInputStyle}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Signup
        </button>
        <p style={{ marginTop: "10px" }}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
