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
      <div id='logo'>
        <button onClick={() => handleClick('/')} className='w-56 h-56'>
          <img src="\image\logo.png" alt="logo" />
        </button>
      </div>
      <div id='navbar' className='flex gap-8 flex-row'>
        <button onClick={() => handleClick('/file')} className=''>DigiDex</button>
        <button onClick={() => handleClick('/')}>API</button>
        <button onClick={() => handleClick('/aboutus')}>About Us</button>
        <button onClick={() => handleClick('/')}>Create</button>
        <button onClick={() => handleClick('/')}>Upload</button>
      </div>
      <div>
        <button onClick={() => handleClick('/')}><LoginIcon /></button>
      </div>
    </div>
  );
};

export default Header;
