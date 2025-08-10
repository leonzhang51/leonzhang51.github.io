import { useState, useEffect } from "react";
import taichiImage from "../assets/images/taichi.png";

function HeroSection() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Social Links - Left Side */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center space-y-6">
              <a
                href="https://www.linkedin.com/in/leon-zhang-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-all duration-200 transform hover:scale-110"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://www.pinterest.ca/leonzhang14224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-500 transition-all duration-200 transform hover:scale-110"
              >
                <i className="fab fa-pinterest text-2xl"></i>
              </a>
              <a
                href="https://github.com/leonzhang51"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-all duration-200 transform hover:scale-110"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-10 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8 relative">
                  <div className="relative inline-block">
                    <img
                      src={taichiImage}
                      alt="Leon Zhang"
                      className="w-48 h-48 lg:w-56 lg:h-56 mx-auto rounded-full object-cover shadow-2xl border-4 border-white animate-float"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
                  </div>
                </div>

                <h1 className="font-display text-5xl lg:text-7xl font-bold text-gray-800 mb-6 text-shadow">
                  Leon Zhang
                </h1>

                <p className="font-body text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  I am UX engineer who loves to{" "}
                  <span className="text-primary-500 font-semibold">
                    Transform the Ideas Into Reality
                  </span>
                </p>

                <button
                  onClick={scrollToProjects}
                  className="btn-outline text-lg px-10 py-4 font-display font-semibold transform hover:scale-105 transition-all duration-200"
                >
                  View My Work
                </button>

                {/* Mobile Social Links */}
                <div className="lg:hidden flex justify-center space-x-8 mt-10">
                  <a
                    href="https://www.linkedin.com/in/leon-zhang-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-500 transition-all duration-200 transform hover:scale-110"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="https://www.pinterest.ca/leonzhang14224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-500 transition-all duration-200 transform hover:scale-110"
                  >
                    <i className="fab fa-pinterest text-2xl"></i>
                  </a>
                  <a
                    href="https://github.com/leonzhang51"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-all duration-200 transform hover:scale-110"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Empty space for balance */}
            <div className="hidden lg:block lg:col-span-1"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button
            onClick={scrollToProjects}
            className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
          >
            <i className="fas fa-arrow-down text-3xl"></i>
          </button>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
