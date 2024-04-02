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
    <div id="containerAbout" className='flex flex-col items-center justify-start pt-24 h-full'>
        <div id="aboutUs" className='flex items-center w-[1000px]'>
            <div className='w-[600px]'>
              <h1 className='w-[400px]'>ATLANTE</h1>
              <p className='w-[400px]'>Somos desarrolladores full-stack que nos conocimos mientras cursábamos el programa de Full-Stack Web & Mobile Development en Reboot Academy.
              Tras completar esta experiencia formativa, decidimos unir fuerzas y trabajar juntos en diversos proyectos. Atlante nace de la necesididad de poner en practica todo lo aprendido durante la experiencia del bootcamp y de poner en prácticas nuevas tecnologías.</p>
            </div>
            {/* imagen nuestra */}
            <img src="" alt="" className='size-[400px] '/>
        </div>
        <div className='flex w-[1000px] justify-around pt-24'>
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