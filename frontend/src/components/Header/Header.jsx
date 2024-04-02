import { useNavigate } from 'react-router-dom';
import './Header.css';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div id='containerHeader' className='flex items-center bg-[#ffb6c1] justify-around'>
      <div id="logoContainer">
        <div id='logo'>
          <button onClick={() => handleClick('/')} className='w-[200px] h-[100px] flex items-center justify-center'>
            <img src="\image\logo4.png" alt="logo" className='size-[100px]'/>
            <img src="\image\titulo.png" alt="" />
          </button>
        </div>
      </div>
      <div id='navbar' className='flex gap-8 flex-row text-white'>
        <button onClick={() => handleClick('/digidex')} className=''>DigiDex</button>
        <button onClick={() => handleClick('/')}>API</button>
        <button onClick={() => handleClick('/aboutus')}>About Us</button>
        <button onClick={() => handleClick('/create')}>Create</button>
      </div>
      <div>
        <button onClick={() => handleClick('/login')}><LoginIcon /></button>
      </div>
    </div>
  );
};

export default Header;
