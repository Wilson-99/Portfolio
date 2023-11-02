import img from '../assets/imu.png'
import { DiHtml5, DiCss3, DiJsBadge, DiMysql,
  DiReact, DiDocker, DiPhp, DiLaravel } from "react-icons/di";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "php", name: "PHP", icon: <DiPhp /> },
  { id: "laravel", name: "Laravel", icon: <DiLaravel /> },
];

export default function About() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Sobre mE</p>
          <p className="hero--section-description">
            Desenvolvedor de software júnior com paixão pela programação e resolução de problemas.
            Possuo conhecimento sólido em linguagens de programação, ferramentas de
            desenvolvimento e metodologias ágeis/SCRUM. Comprometido em aprender continuamente
            e contribuir para projetos de software de alta qualidade.
          </p>
        </div>
      </div>
      <div className="about--section--skills">
      <h2 className="skill-title">Tecnologias</h2>
        <div className="skills">
          {technologies.map((tech) => (
            <div className="skill" id={tech.id} key={tech.id}>
            <span>{tech.icon}</span>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
