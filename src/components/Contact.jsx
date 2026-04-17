const Contact = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-content">
        <h2>Vamos construir algo incrível juntos!</h2>
        <p>Estou sempre aberto a discutir novos projetos e oportunidades criativas.</p>
        <div className="social-links">
          <a href="mailto:socorrolima1778@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com.br/socorrinha_rodriques_lima" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;