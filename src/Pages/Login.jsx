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
        <div className="flex min-w-full min-h-full items-center justify-center">
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col">
                <input name="Username" type="text" value={username} onChange={handleChange}></input>
                <input name="Password" type="password" value={password} onChange={handleChange} ></input>
            </form>
        </div>
        </>
    )
}