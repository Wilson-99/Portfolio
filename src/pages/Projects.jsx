import data from "../data/index.json";
import { ArrowUp } from "react-bootstrap-icons";

export default function Projects() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container">
        <p className="section--title">Meu pOrtiFolio</p>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="project" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
                <p className="stacks">Stacks: {item.stacks}</p>
              </div>
              <p className="text-sm portfolio--link">
                <a href={item.link}>
                  {item.button}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
