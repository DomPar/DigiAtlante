import { useState, useContext } from "react";
import { logIn } from "../../services/loginServices";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Authcontext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginAsAdmin } = useContext(AuthContext);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const credentials = {
      email: email,
      password: password
    };
    
    await logIn(credentials);
    await loginAsAdmin()
    navigate('/');
  };
  return (
    <div className='flex justify-center items-center h-full '>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-2/5 gap-2 bg-black bg-opacity-50 py-6 shadow-2xl'>
            <h1 className="text-3xl pb-2">LOGIN</h1>
            <label >Email:</label>
            <input className="text-black pl-2" type="email" id="email" placeholder=" email" name="email" onChange={(e) => setEmail(e.target.value)} required />
            <label >Password:</label>
            <input className="text-black pl-2" type="password" id="password" placeholder=" password" name="password" onChange={(e) => setPassword(e.target.value)}required/>
            <button type="submit" onClick={handleSubmit} className='w-[100px] h-[40px] border rounded-full mt-4'>Submit</button>      
        </form>
    </div>
  );
};

  

export default Login