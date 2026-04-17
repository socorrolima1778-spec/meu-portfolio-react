import { useState } from 'react';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header">
      <div className="logo">
        <div style={{ color: 'rgb(255, 208, 0)' }}>Maria do Socorro</div>R Lima
      </div>
      
      <nav id="navbar" className={isMenuOpen ? 'active' : ''}>
        <ul className="nav-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
        </ul>
        <button id="theme-toggle" aria-label="Alternar Tema" onClick={toggleTheme}>
          <i className={`fa-solid ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </nav>

      <div className="hamburger" id="hamburger" onClick={toggleMenu}>
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>
    </header>
  );
};

export default Header;