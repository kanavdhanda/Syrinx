import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../Css/Login.css";
import "../index.css";
import text from "../assets/text.png";
import logo from "../assets/logo.png";
import char from "../assets/char.png";

export default function Login() {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.Username);
    console.log(formData.Password);

    try {
      const response = await axios.post("https://localhost:8080/login", {
        username: formData.Username,
        password: formData.Password,
      });

      if (response.data.token) {
        Cookies.set("token", response.data.token, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        console.log("Login successful!");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
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
  //mb-4 w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
  //mb-4 w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
  //w-64 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
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
            <h1 className="mb-6 text-6xl font-bold text-white">Login</h1>
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
