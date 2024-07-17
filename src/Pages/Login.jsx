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
        const data = new FormData(e.target);
        console.log(data.get("username"));
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