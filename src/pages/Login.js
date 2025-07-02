import React, {useState} from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        const success= login(email,password);
        if(success){
            navigate('/feed');
        }else{
            alert('Invalid credentials');
        }
    };
    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <br/>
            <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <br/>
            <button type="submit">Login</button>
        </form>
    );
};
export default Login;