import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project() {
  return (
    <div className='project-container'>
        <div className='project-text'>
        <div className='github-logo'>
        <a target='_blank' rel='noreferrer' href="https://github.com/AndrewJones98">
                    <FontAwesomeIcon icon={faGithub} color='yellow'/>
        </a>
        </div>
        Click above for some projects I've worked on. <br/> <br/>
        Includes: <br/> <br/>
        In-depth Data Analysis of Netflix's Content Catalog. <br/> <br/>
        Concurrent Server-Client Architecture with Multithreading. <br/> <br/>
        Advanced Web Development with ReactJS. <br/> <br/>
        Secure Electronic Elections on Blockchain. <br/> <br/>

        </div>

    </div>
  );
}

export default Project;
