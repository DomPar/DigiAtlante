import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const AboutUs = () => {
  const navigate = useNavigate();

const handleClick = (path) => {
  navigate(path);
};
  
const lkAaron = () => {
  window.open('https://www.linkedin.com/in/aaron-gonzalez-santana/', '_blank');
};

const cvAaron = () => {
  window.open('https://www.canva.com/design/DAF_3Kjbasg/8YMvb29z2e9SFtOFSJqDDA/view?utm_content=DAF_3Kjbasg&utm_campaign=designshare&utm_medium=link&utm_source=editor', '_blank');
}
const lkDomi = () => {
  window.open('https://www.linkedin.com/in/domparsan', '_blank');
};
const cvDomi = () => {
  window.open(' https://www.canva.com/design/DAF_3AT0Ws4/0wEQRs6AbvU2xypurJ1fgQ/view?utm_content=DAF_3AT0Ws4&utm_campaign=designshare&utm_medium=link&utm_source=editor', '_blank');
}
  return (
    <div id="containerAbout" className='flex flex-col items-center justify-start pt-24 h-full w-[70vw] m-auto bg-custom-gradient'>
        <div id="aboutUs" className='flex items-center w-[1000px]'>
            <div className='w-[600px]'>
              <h1 className='w-[400px]'>ATLANTE</h1>
              <p className='w-[400px]'>Somos desarrolladores full-stack que nos conocimos mientras cursábamos el programa de Full-Stack Web & Mobile Development en Reboot Academy.
              Tras completar esta experiencia formativa, decidimos unir fuerzas y trabajar juntos en diversos proyectos. Atlante nace de la necesididad de poner en practica todo lo aprendido durante la experiencia del bootcamp y de poner en prácticas nuevas tecnologías.</p>
              <div className='flex w-[600px] justify-start pt-24 gap-8'>
                <div id="aaron">
                  <h3>Aarón González Santana</h3>
                  <button onClick={lkAaron} className=''><LinkedInIcon/></button>
                  <button onClick={cvAaron}><PictureAsPdfIcon/></button>
                </div>
                <div id="domi">
                  <h3>Domingo Pardo Santana</h3>
                  <button onClick={lkDomi} className=''><LinkedInIcon/></button>
                  <button onClick={cvDomi} className=''><PictureAsPdfIcon/></button>
                </div>
              </div>
            </div>
            {/* imagen nuestra */}
            <img src="" alt="" className='size-[400px] '/>
        </div>
        
    </div>
  )
}

export default AboutUs