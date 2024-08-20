import { useNavigate } from 'react-router-dom';
import './Header.css';
import LoginIcon from '@mui/icons-material/Login';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Authcontext';

const Header = () => {
  const navigate = useNavigate();
  const {isAdmin, logout } = useContext(AuthContext);

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div id='containerHeader' className='flex items-center justify-evenly sm:!justify-around w-[70%] sm:!w-full'>
      <div id="logoContainer">
        <div id='logo'>
          <button onClick={() => handleClick('/')} className='w-[200px] h-[100px] flex items-center justify-center '>
            <img src="\image\titulo2.png" className='' />
          </button>
        </div>
      </div>
      <div id='navbar' className='flex gap-8 flex-row'>
        <button onClick={() => handleClick('/digidex')} className='text-with-border text-2xl sm:text-sm'>DigiDex</button>
        <button onClick={() => handleClick('/api')} className='text-with-border text-2xl sm:text-sm'>API</button>
        <button onClick={() => handleClick('/aboutus')} className='text-with-border text-2xl sm:text-sm'>About Us</button>
        {isAdmin && <button onClick={() => handleClick('/create')} className='text-with-border text-2xl sm:text-sm'>Create</button>}
      </div>
      <div className=''>
        {!isAdmin && <button onClick={() => handleClick('/login')} className='opacity-0'><LoginIcon /></button>}
        {isAdmin && <button onClick={() => logout()}><LogoutRoundedIcon /></button>}
      </div>
    </div>
  );
};

export default Header;
