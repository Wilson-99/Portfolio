import avatar from "../assets/giphy.gif";
import { Github, Linkedin } from "react-bootstrap-icons";

const networking = [
  {
    id: "github",
    name: "github",
    link: "https://github.com/Wilson-99",
    icon: <Github />,
  },
  {
    id: "linkedin",
    name: "linkedin",
    link: "https://www.linkedin.com/in/wilson-justino-835811223/",
    icon: <Linkedin />,
  },
];

export default function Hero() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">oLá, me chamo Wilson Justino</p>
          <h3>Desenvolvedor Fullstack Júnior</h3>
          <p className="hero--section-description">
            Sou apaixonado por criar experiências digitais excepcionais. Dando
            vida às ideias em um reino virtual com um teclado como pincel e
            linhas de código como tela. Entre em contato e vamos embarcar nesta
            emocionante jornada juntos!
          </p>
        </div>
        <div className="buttons">
          <a href="https://drive.google.com/file/d/1-hV5l5OZTINPJL2e6m2J4eoWSUB7lMSS/view?usp=drive_link">
            <button className="btn btn-primary">Download CV</button>
          </a>
          <button className="btn btn-secondary">Fale comigo</button>
        </div>
        <div className="social-icons">
          {networking.map((networking) => (
            <div key={networking.id} id={networking.id}>
              <a href={networking.link}>{networking.icon}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="hero--section--img">
        <img src={avatar} alt="Hero Section" />
      </div>
    </section>
  );
}
