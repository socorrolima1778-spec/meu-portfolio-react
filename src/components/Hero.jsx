import perfil1 from '../img/perfil1.jpeg';
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="accent-text">Olá, eu sou</p>
        <h1>Maria do Socorro R Lima</h1>
        <h2 className="subtitle">Professora Especialista em Língua Inglesa!</h2>
        <a href="#contato" className="btn-primary">Contrate-me</a>
      </div>
      <div className="hero-image">
        <img src={perfil1} alt="Foto de Perfil" />
      </div>
    </section>
  );
};

export default Hero;