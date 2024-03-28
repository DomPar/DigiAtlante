import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
    const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  
  const lkAaron = () => {
    window.open('https://www.linkedin.com/in/aaron-gonzalez-santana/', '_blank');
};
const lkDomi = () => {
    window.open('https://www.linkedin.com/in/domparsan', '_blank');
};

  return (
    <div id="containerAbout" className='flex flex-col'>
        <div id="aboutUs">
            <h1>ATLANTE</h1>
            {/* imagen nuestra */}
            <img src="" alt="" />
            <p>
                Somos full-stack developers que estudiamos y nos conocimos en Reboot Academy, tras la experiencia empezamos a trabajar juntos en los diferentes proyectos
            </p>
        </div>
        <div className='flex justify-evenly'>
          <div id="aaron">
              <h3>Aarón González Santana</h3>
          <button onClick={lkAaron} className=''><LinkedInIcon/></button>
          <button onClick={() => handleClick('/')}>CV</button>
          </div>
          <div id="domi" >
          <h3>Domingo Pardo Santana</h3>
          <button onClick={lkDomi} className=''><LinkedInIcon/></button>
          <button onClick={() => handleClick('/')} className=''>CV</button>
          </div>
        </div>
    </div>
  )
}

export default AboutUs