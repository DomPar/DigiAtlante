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
    <div id="containerAbout" className='flex flex-col items-center'>
        <div id="aboutUs">
            <h1>ATLANTE</h1>
            {/* imagen nuestra */}
            <img src="" alt="" />
            <p>
            Somos desarrolladores full-stack que nos conocimos mientras cursábamos el programa de Full-Stack Web & Mobile Development en Reboot Academy.
             Tras completar esta experiencia formativa, decidimos unir fuerzas y trabajar juntos en diversos proyectos.</p>
        </div>
        <div className='flex gap-96'>
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