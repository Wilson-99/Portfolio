import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Github, Linkedin } from "react-bootstrap-icons";

const networking = [
  {
    id: "github",
    name: "Github",
    author: "Wilson-99",
    link: "https://github.com/Wilson-99",
    icon: <Github />,
  },
  {
    id: "linkedin",
    name: "Linkedin",
    author: "Wilson Justino",
    link: "https://www.linkedin.com/in/wilson-justino-835811223/",
    icon: <Linkedin />,
  },
];

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Nome é obrigatório")
      .min(3, "Nome deve ter pelo menos 3 letras"),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Digite um email válido"),
    message: yup.string().required("Mensagem é obrigatória"),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };
  
    try {
      const response = await emailjs.send(
        "service_jb2uxs6",
        "template_koopj0j",
        templateParams,
        "GYZ5dLYEzN4T34O0E"
      );
      reset(); 
    } catch (err) {
      console.error("Erro", err);
    }
  };
  
  
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="section--title">Fale cOmiGo</h2>
        <h3 className="contact--description">
          TEM ALGUM PROJECTO?
          <span> cOnTaCta-mE</span>
        </h3>
      </div>
      <div className="contact">
        <form
          className="contact--form--container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="container">
            <label htmlFor="name" className="contact--label">
              <span className="text-lg">Nome</span>
              <input
                type="text"
                className="contact--input text-md"
                name="name"
                id="name"
                {...register("name")}
              />
              <p className="errors">{errors.name?.message}</p>
            </label>

            <label htmlFor="email" className="contact--label">
              <span className="text-lg">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                {...register("email")}
              />
              <p className="errors">{errors.email?.message}</p>
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-lg">Mensagem</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Deixe a sua mensagem..."
              {...register("message")}
            />
            <p className="errors">{errors.message?.message}</p>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">
              Enviar
            </button>
          </div>
        </form>
        <div className="contact--right">
          {networking.map((networking) => (
            <div
              className="contact--social"
              key={networking.id}
              id={networking.id}
            >
              <div className="contact--icon">
                <a href={networking.link} target="_blink">{networking.icon}</a>
              </div>
              <div className="contact-info">
                <h3>{networking.name}</h3>
                <p>{networking.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
