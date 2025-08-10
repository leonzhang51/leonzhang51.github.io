import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import budgetingCover from "../assets/images/budgeting/appCover.jpg";
import aiPlatformCover from "../assets/images/AIPlatform/coverpage.png";
import africaTravelCover from "../assets/images/africa_travel/appCover.png";
import nightvilleLogo from "../assets/images/nightville_logo.jpg";
import groceryLogo from "../assets/images/grocery/App_logo.jpg";

function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: "fintech",
      title: "Personal budgeting Mobile APP",
      description:
        "Help millennials understand personal financial statement, take control their money, and optimize the spending",
      image: budgetingCover,
      link: "/project/fintech",
      category: "Mobile App",
      tags: ["UX Design", "Mobile", "FinTech"],
    },
    {
      id: "ai-platform",
      title: "The AI Price prediction platform",
      description:
        "The Price prediction platform is an AI SaaS solution that boosts revenue by optimizing the service or product price based on demand and supply.",
      image: aiPlatformCover,
      link: "/project/ai-platform",
      category: "Web Platform",
      tags: ["AI/ML", "SaaS", "Web Design"],
    },
    {
      id: "travel-africa",
      title: "Online travel system for traveler and agent",
      description:
        "Provide hassle free experience for users who want to travel in West Africa",
      image: africaTravelCover,
      link: "/project/travel-africa",
      category: "Web Platform",
      tags: ["Travel", "B2B", "UX Design"],
    },
    {
      id: "reservation",
      title: "Online Reservation APP",
      description:
        '"Nightlife Ville" is a simple utility app meant to make plan nightlife as simple as hailing a Uber',
      image: nightvilleLogo,
      link: "/project/reservation",
      category: "Mobile App",
      tags: ["Mobile", "Booking", "UX Design"],
    },
    {
      id: "grocery",
      title: "Improve shopping experience for online Grocery Store",
      description:
        "Simplify the shopping process, finish grocery shopping tasks by choosing recipes and meal plans, all the process as simple as 6 clicks.",
      image: groceryLogo,
      link: "/project/grocery",
      category: "E-commerce",
      tags: ["E-commerce", "UX Research", "Web Design"],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Recent Projects
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my latest work in UX design, web development, and digital
              innovation. Each project represents a unique challenge and
              creative solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Link to={project.link}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary-50 text-primary-600 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="font-body text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link
                      to={project.link}
                      className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-primary-500 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-semibold"
                    >
                      <span>View Details</span>
                      <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
