import Logo from "./assets/logo.png";
import "./App.css";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projects } from "./data/projectsData";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="text-section">
          <h1>Boas-vindas</h1>
          <p>
            Olá! Meu nome é Enzo, um desenvolvedor front-end apaixonado por
            tecnologia, atualmente moro em Brumado-BA. Tenho experiência na
            construção de aplicações web, desde o JavaScript Puro até
            arquiteturas modernas com React e TypeScript. Meu foco é desenvolver
            interfaces responsivas e intuitivas, garantindo uma ótima
            experiência para o usuário.
          </p>
        </div>
        <div className="logo-section">
          <img src={Logo} className="logo " alt="Logo Portfólio" />
        </div>
      </div>
      <div className="projects-section">
        <div className="projects-title">
          <h2>Meus Projetos</h2>
          <p>Uma coleção de projetos que trabalhei.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <div className="card-title">
                  <FaCode className="folder-icon" />
                  <div className="project-links">
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        title="GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.links.deploy && (
                      <a
                        href={project.links.deploy}
                        target="_blank"
                        title="Ver Projeto"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
