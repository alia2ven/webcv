import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // 👇 IMPORTANTE: si tu layout tiene un contenedor con scroll,
    // cámbialo aquí. 
    // Ejemplo: const scrollTarget = document.querySelector(".main-content");
    const scrollTarget = window;

    const getScrollY = () => {
      // Si es window:
      if (scrollTarget === window) return window.scrollY || window.pageYOffset;
      // Si es un div con scroll (por si lo adaptas):
      return scrollTarget.scrollTop || 0;
    };

    const handleScroll = () => {
      const currentY = getScrollY();
      const delta = currentY - lastScrollY.current;

      // Para ver si esto se está ejecutando (útil para debug):
      // console.log("scrollY:", currentY, "delta:", delta);

      // Cambiamos estilo cuando hay algo de scroll
      setIsScrolled(currentY > 10);

      // Para evitar que tiemble con cambios muy pequeños
      if (Math.abs(delta) < 4) {
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > 80 && delta > 0) {
        // Bajando
        setIsHidden(true);
        setIsMenuOpen(false);
      } else {
        // Subiendo o arriba de todo
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = [
    "header",
    isHidden ? "header--hidden" : "",
    isScrolled ? "header--scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <h1>Javier CV</h1>
          </Link>
        </div>

        {/* Botón hamburguesa para móviles */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
