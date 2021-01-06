import './styles.css';
import {ReactComponent as InstagramImage} from './instagram.svg';
import {ReactComponent as LinkedinImage} from './linkedin.svg';
import {ReactComponent as YoutubeImage} from './youtube.svg';
function Footer() {
    return (
       <footer className="main-footer">
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
           <div className="footer-icons">
               <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                <YoutubeImage/>
               </a>
               <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                   <LinkedinImage/>
               </a>
               <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                   <InstagramImage/>
               </a>
           </div>
       </footer>
    );
}

export default Footer;