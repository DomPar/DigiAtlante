import { useState } from "react";
import { logIn } from "../../services/loginServices";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const credentials = {
      email: email,
      password: password
    };
    
    await logIn(credentials);
    navigate('/');
  };
  return (
    <div className='flex justify-center items-center h-full '>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-1/5 gap-2 border bg-[#ffccdd] border-pink-500 py-6 shadow-2xl'>
            <h1 className="">LOGIN</h1>
            <label >Email:</label>
            <input type="email" id="email" placeholder=" email" name="email" onChange={(e) => setEmail(e.target.value)} required />
            <label >Password:</label>
            <input type="password" id="password" placeholder=" password" name="password" onChange={(e) => setPassword(e.target.value)}required/>
            <button type="submit" onClick={handleSubmit} className='w-20 border border-sky-500 rounded-full mt-4'>Submit</button>      
        </form>
    </div>
  );
};

  

export default Login