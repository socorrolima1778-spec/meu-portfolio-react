import ImgProj from '../img/projeto.png'

const projetosData = [
  {
    id: 1,
    nome: "Meu Portfólio",
    imagem: ImgProj,
    linguagens: ["HTML","CSS","JS"],
    repositorio: "https://github.com/socorrolima1778-spec/meu-portfolio"
  },
  {
    id: 2,
    nome: "Meu Portfólio React",
    imagem: ImgProj,
    linguagens: ["JavaScript", "React", "VITE"],
    repositorio: "https://github.com/socorrolima1778-spec/meu-portfolio-react"
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="projects-section">
      <div className="section-title">
        <h2 className="accent-text">PROJETOS</h2>
      </div>
      <div className="projects-grid" id="projects-container">
        
        {projetosData.map(projeto => (
          <div className="project-card" key={projeto.id}>
            <img src={projeto.imagem} alt={projeto.nome} className="project-img" />
            <div className="project-info">
              <h3>{projeto.nome}</h3>
              <div className="tech-stack">
                {projeto.linguagens.map((ling, index) => (
                  <span className="tech-tag" key={index}>{ling}</span>
                ))}
              </div>
              <a href={projeto.repositorio} target="_blank" rel="noreferrer" className="project-link">
                Ver Repositório <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
