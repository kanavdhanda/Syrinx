import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

import "../Css/Login.css";
import text from "../assets/text.png";
import logo from "../assets/logo.png";
import char from "../assets/char.png";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });
  const [error, setError] = useState("");

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedUsername = sanitizeInput(formData.Username);
    const sanitizedPassword = sanitizeInput(formData.Password);

    try {
      const response = await axios.post(
        "https://api.syrinx.ccstiet.com/authanticate",
        {
          Username: sanitizedUsername,
          Password: sanitizedPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.SessionID) {
        Cookies.set("token", response.data.SessionID, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        console.log("Login successful!");
        navigate("/home");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);
      setError("Login failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-y-14 min-w-full h-[95vh] items-center justify-center">
        <img
          src={text}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />

        <div className="grid grid-cols-2 gap-5">
          
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-2 items-center p-6 bg-black rounded-lg shadow-lg"
          >
            <h2 className="mb-6 text-5xl font-bold text-white">Login</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <input
              name="Username"
              type="text"
              placeholder="Username"
              className="input__fields focus:border-blue-500"
              value={formData.Username}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              name="Password"
              type="password"
              placeholder="Password"
              className="input__fields"
              value={formData.Password}
              onChange={handleChange}
            />
            <button type="submit" id="submit_btn">
              Submit
            </button>
          </form>
          <img
            src={char}
            alt=""
            className="mt-10"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </>
  );
}
