function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary-500 text-white relative overflow-hidden mt-20">
      {/* Wave Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16 relative z-10">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="https://www.linkedin.com/in/leon-zhang-design/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <i className="fab fa-linkedin text-2xl group-hover:text-blue-300 transition-colors"></i>
          </a>
          <a
            href="https://www.pinterest.ca/leonzhang14224/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <i className="fab fa-pinterest text-2xl group-hover:text-red-300 transition-colors"></i>
          </a>
          <a
            href="https://github.com/leonzhang51"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <i className="fab fa-github text-2xl group-hover:text-gray-300 transition-colors"></i>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          <button
            onClick={scrollToTop}
            className="font-display hover:text-white/80 transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-display hover:text-white/80 transition-colors duration-200 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="font-display hover:text-white/80 transition-colors duration-200 relative group"
          >
            My Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </button>
          <a
            href="/Leon_Zhang_Product_Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display hover:text-white/80 transition-colors duration-200 relative group"
          >
            My CV
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-white/30 mx-auto mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-body text-white/80 text-lg">
            &copy; 2024 Leon Zhang | All Rights Reserved
          </p>
          <p className="font-body text-white/60 text-sm mt-2">
            Designed & Developed with{" "}
            <i className="fas fa-heart text-red-300"></i> using React & Tailwind
            CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
