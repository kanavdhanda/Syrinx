import { useState } from "react";

export default function Login(){
    const [username, setUsername] = useState("");  
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
        Username: '',
        Password: '',
      });

    const handleSubmit = (e) => {  
        e.preventDefault();
        console.log(formData.get("Username"));
        console.log(formData.get("Password"));
     }
     const handleChange= (e)=>{
        const {name, value} = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    }
    return(
        <>
         <div className="flex min-w-full min-h-screen items-center justify-center">
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
    )
}