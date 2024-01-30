import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project() {
  return (
    <div className='project-container'>
        <div className='project-text'>
        Here are some projects I've worked on: <br/> <br/>
        <div className='github-logo'>
        <a target='_blank' rel='noreferrer' href="https://github.com/AndrewJones98">
                    <FontAwesomeIcon icon={faGithub} color='white'/>
        </a>
        </div>
        <br/> <br/>
        Including: <br/> <br/>
        Data Analysis of Netflix releases using Pandas. <br/> <br/>
        Multithreaded server and clients for a simple game. <br/> <br/>
        Reactjs Websites, including this one. <br/> <br/>
        Electronic elections using a blockchain. <br/> <br/>

        </div>

    </div>
  );
}

export default Project;
