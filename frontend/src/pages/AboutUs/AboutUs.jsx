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
    <div id="containerAbout">
        <div id="aboutUs">
            {/* imagen nuestra */}
            <h1>NOMBRE NUESTRO</h1>
            <img src="" alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales, dui ac vehicula sollicitudin, purus dolor pretium mi, non tincidunt felis lorem vel velit.
                Vivamus dignissim quam nec purus dictum sollicitudin. Proin a fringilla tortor, quis bibendum nibh. Morbi molestie, leo id mollis egestas, quam eros sodales augue,
                eget gravida elit justo eget urna. Nam bibendum volutpat tincidunt
            </p>
        </div>
        <div id="aaron">
            <p></p>
        <button onClick={lkAaron} className=''><LinkedInIcon/></button>
        <button onClick={() => handleClick('/')}>CV</button>
        </div>
        <div id="domi">
        <button onClick={lkDomi} className=''><LinkedInIcon/></button>
        <button onClick={() => handleClick('/')} className=''>CV</button>
        </div>
    </div>
  )
}

export default AboutUs