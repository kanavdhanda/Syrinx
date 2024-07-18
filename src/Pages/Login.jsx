import { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import logo from '../assets/logo.png';

export default function Login() {
    const [formData, setFormData] = useState({
        Username: '',
        Password: '',
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.Username);
        console.log(formData.Password);
    

        try {
            const response = await axios.post('https://localhost:8080/login', {
                username: formData.Username,
                password: formData.Password
            });

            if (response.data.token) {
                Cookies.set('token', response.data.token, { 
                    expires: 1, 
                    secure: true, 
                    sameSite: 'strict' 
                });
                console.log('Login successful!');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Login failed. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <>
            <div className="flex flex-col min-w-full h-[70vh] items-center justify-center">
            {/* <img src={logo} alt="" className="w-40" /> */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">Login</h1>
                    <input
                        name="Username"
                        type="text"
                        placeholder="Username"
                        className="mb-4 w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.Username}
                        onChange={handleChange}
                    />
                    <input
                        name="Password"
                        type="password"
                        placeholder="Password"
                        className="mb-4 w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.Password}
                        onChange={handleChange}
                    />
                    <button type="submit" className="w-64 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                </form>
            </div>
        </>
    );
}
