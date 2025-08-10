import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo_name.png";
import menuIcon from "../assets/images/menu.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImage}
              alt="Leon Zhang"
              className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="font-display text-gray-700 hover:text-primary-500 transition-colors duration-200 relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-display text-gray-700 hover:text-primary-500 transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <a
              href="/Leon_Zhang_Product_Designer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-gray-700 hover:text-primary-500 transition-colors duration-200 relative group"
            >
              My CV
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative"
            >
              <img src={menuIcon} alt="Menu" className="h-6 w-6" />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors duration-200 font-display"
                >
                  Work
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors duration-200 font-display"
                >
                  About
                </button>
                <a
                  href="/Leon_Zhang_Product_Designer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors duration-200 font-display"
                >
                  My CV
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
