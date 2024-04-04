import { useNavigate } from 'react-router-dom';
import './Header.css';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  // bg-[#ffb6c1]
  return (
    <div id='containerHeader' className='flex items-center justify-evenly margin-auto'>
      <div id="logoContainer">
        <div id='logo'>
          <button onClick={() => handleClick('/')} className='w-[200px] h-[100px] flex items-center justify-center'>
            {/* <img src="\image\logo5.png" alt="logo" className='size-[50px]'/> */}
            <img src="\image\titulo2.png" alt="" />
          </button>
        </div>
      </div>
      <div id='navbar' className='flex gap-8 flex-row'>
        <button onClick={() => handleClick('/digidex')} className=''>DigiDex</button>
        <button onClick={() => handleClick('/api')}>API</button>
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
