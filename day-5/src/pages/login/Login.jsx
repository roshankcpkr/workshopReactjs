import React, { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: userName,
          password: password,
        }
      );
      console.log("data: ", data.data);
      localStorage.setItem("token", data.data.access_token);
      setError(false);
      return navigate("/");
    } catch (err) {
      console.log("error: ", err);
      setError(true);
    }
  };
  return (
    <div className="loginDiv">
      <h2>Login</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
          {error && <p>Invalid username or password</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
