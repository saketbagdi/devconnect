import React, {useState} from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register= ()=>{
    const {register}= useAuth();
    const navigate= useNavigate();
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const success=register(name,email, password);
        if(success){
            navigate('/feed');
        }else{
            alert('User already exists');
        }
    };
    return(
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} require/>
            <br/>
            <input placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <br/>
            <input placeholder="Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            <br/>
            <button type="submit">Register</button>
        </form>
    );
};


export default Register;