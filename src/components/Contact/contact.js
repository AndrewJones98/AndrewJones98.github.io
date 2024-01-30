import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-text'>
        Contact me via email or Linkedin:<br/> <br/>
        BasilJonesAndrew@outlook.com <br/> <br/>
        <div className='linkedin-logo'>
        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/andrew-jones-75b8b01b1/">
                    <FontAwesomeIcon icon={faLinkedin} color='#0077b5'/>
        </a>
        </div>
        </div>

    </div>
  );
}

export default Contact;
