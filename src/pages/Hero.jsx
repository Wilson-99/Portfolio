import avatar from "../assets/giphy.gif";
import { Github, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-scroll";

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
          <p className="section--title">Olá, me chamo Wilson Justino</p>
          <h3>Desenvolvedor Frontend Júnior</h3>
          <p className="hero--section-description">
            Sou apaixonado por criar experiências digitais excepcionais. Dando
            vida às ideias em um reino virtual com um teclado como pincel e
            linhas de código como tela. Entre em contato e vamos embarcar nesta
            emocionante jornada juntos!
          </p>
        </div>
        <div className="buttons">
          <a
            href="https://drive.google.com/file/d/1aAVuu2zgely89mucnnYgiknmJheFo7OX/view?usp=drive_link"
            target="_blink"
          >
            <button className="btn btn-primary">Download CV</button>
          </a>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
          >
            <button className="btn btn-secondary">Fale comigo</button>
          </Link>
        </div>
        <div className="social-icons">
          {networking.map((networking) => (
            <div key={networking.id} id={networking.id}>
              <a href={networking.link} target="_blink">
                {networking.icon}
              </a>
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
