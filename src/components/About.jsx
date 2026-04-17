import perfil2 from '../img/perfil2.png';

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="section-title">
        <h2 className="accent-text">SOBRE MIM</h2>
      </div>
      
      <div className="about-row">
        <div className="about-img">
          <img src={perfil2} alt="Foto Sobre Mim" />
        </div>
        <div className="about-text">
          <h3 style={{ textAlign: 'center' }}>
            Graduada em Licenciatura Plena em Letras/Ingles pela UESPI, Língua Espanhola pela UFC, Especialista em Língua Inglesa, atualmente estou cursando o curso de Tecnologia em Sistemas para internet (EAD- UAPI). Sou professora de Língua Inglesa nos Anos Finais e Ensino Médio a mais de 15 anos. Estou muito animada com a oportunidade de estudar o Curso de Tecnologia em Sistemas para Internet, porque admiro muito a área da tecnologia e pretendo alcançar meus objetivos que é o domínio das habilidades de criar soluções digitais que sejam, ao mesmo tempo, funcionais e intitivas, atendendo ás demandas reias do mercado.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;