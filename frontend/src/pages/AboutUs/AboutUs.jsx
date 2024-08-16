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
    <div id="containerAbout" className='flex flex-col items-center justify-start pt-24 h-full w-[70vw] m-auto'>
        <div id="aboutUs" className='flex items-center  bg-black bg-opacity-50 p-10'>
            <div className='flex flex-col items-center w-[600px]'>
              <h1 className='w-[400px] text-with-border'>ATLANTE</h1>
              <p className='w-[400px]'>We are full-stack developers who met while attending the Full-Stack Web & Mobile Development program at Reboot Academy. After completing this formative experience, we decided to join forces and collaborate on various projects. Atlante was born out of the need to apply everything we learned during the bootcamp and to experiment with new technologies.</p>
              <div className='flex w-[600px] justify-center pt-24 gap-8'>
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
        </div>
    </div>
  )
}

export default AboutUs