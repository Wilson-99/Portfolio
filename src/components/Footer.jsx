import { Link } from "react-scroll";
import React from "react";
import { Github, Linkedin, Mailbox } from 'react-bootstrap-icons';

const networking = [
  { id: "github", name: "github", link: "https://github.com/Wilson-99", icon: <Github /> },
  { id: "linkedin", name: "linkedin", link: "https://www.linkedin.com/in/wilson-justino-835811223/", icon: <Linkedin /> }
]

function Footer() {
  return (
    <footer className="footer--container">
        <div className="footer--items">
         &copy; {new Date().getFullYear()} &middot; Todos os direitos reservados.
        </div>
        
        <div className="footer-right">
          <h3>
            TEM ALGUM PROJECTO?
            <span>cOnTaCta-mE</span>
          </h3>
          <div className="footer--social--icon">
            <ul>
            {networking.map((networking)=>
              <div key={networking.id} id={networking.id}>
                <a href={networking.link}>{networking.icon}</a>
              </div>
            )}
            </ul>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
