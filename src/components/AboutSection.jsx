import { useState, useEffect, useRef } from "react";
import autodidactImg from "../assets/images/autodidact.jpg";
import deliversImg from "../assets/images/delivers.jpg";
import empathyImg from "../assets/images/empathy.jpg";
import flexibilityImg from "../assets/images/flexibility.jpg";
import passionImg from "../assets/images/passion.jpg";
import teamplayerImg from "../assets/images/teamplayer.jpg";
import designerSvg from "../assets/icons/designer.svg";
import skillsSvg from "../assets/icons/skills.svg";
import onlineCvSvg from "../assets/icons/online_cv.svg";

function AboutSection() {
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

  const skills = [
    {
      src: autodidactImg,
      alt: "Autodidact",
      title: "Self-Learner",
    },
    {
      src: deliversImg,
      alt: "Delivers",
      title: "Delivers Results",
    },
    {
      src: empathyImg,
      alt: "Empathy",
      title: "Empathetic",
    },
    {
      src: flexibilityImg,
      alt: "Flexibility",
      title: "Flexible",
    },
    {
      src: passionImg,
      alt: "Passion",
      title: "Passionate",
    },
    {
      src: teamplayerImg,
      alt: "Team Player",
      title: "Team Player",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16">
            About Me
          </h2>

          {/* Skills Icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="h-16 w-16 mx-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="mt-2 text-sm font-body text-gray-600 group-hover:text-primary-500 transition-colors duration-300">
                  {skill.title}
                </p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="text-center lg:order-1">
              <div className="relative">
                <img
                  src={designerSvg}
                  alt="Designer"
                  className="h-72 mx-auto animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="font-body text-lg text-gray-700 mb-8 leading-relaxed">
                  UX designer-developer (hybrid) focused on both customer and
                  business needs. Champions client ideas and produces solutions
                  for development and product design that meet revenue goals.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-display font-semibold text-gray-800 mb-2">
                        "How it Works" Focus:
                      </h4>
                      <p className="font-body text-gray-600">
                        Adept at conceptualizing design ideas and bringing them
                        to life with a focus on analysis, business requirements,
                        and optimizing user experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-display font-semibold text-gray-800 mb-2">
                        Innovative Thinker:
                      </h4>
                      <p className="font-body text-gray-600">
                        Sees the big picture and provides creative, unique
                        solutions for customers, with the goal of engaging users
                        and earning their repeat visits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-display font-semibold text-gray-800 mb-2">
                        Business Results:
                      </h4>
                      <p className="font-body text-gray-600">
                        Successful history of creating apps, landing pages, and
                        new components that significantly increase traffic and
                        revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Tools */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-display font-semibold text-gray-800 mb-4 text-lg">
                      UX Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Usability Testing",
                        "Rapid Prototyping",
                        "Wireframes",
                        "Interaction Design",
                        "User Research",
                        "Experience Strategy",
                        "User Journeys",
                        "Storyboards",
                        "Task Flows",
                        "Heuristic Evaluation",
                        "Information Architecture",
                        "UI Design",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-body"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-800 mb-4 text-lg">
                      UX Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Axure", "Figma", "Adobe XD", "Sketch App"].map(
                        (tool, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-body"
                          >
                            {tool}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-800 mb-4 text-lg">
                      Languages & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "PHP",
                        "MySQL",
                        "React JS",
                        "Angular",
                        "jQuery",
                        "Bootstrap",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-body"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:order-1">
              <div className="relative">
                <img
                  src={skillsSvg}
                  alt="Skills"
                  className="h-72 mx-auto animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* CV Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:order-1">
              <div className="relative">
                <img
                  src={onlineCvSvg}
                  alt="Online CV"
                  className="h-72 mx-auto animate-float"
                  style={{ animationDelay: "2s" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border border-primary-100">
                <h3 className="font-display text-2xl font-semibold text-gray-800 mb-6">
                  Want to Learn More?
                </h3>
                <p className="font-body text-lg text-gray-700 mb-8 leading-relaxed">
                  Dive deeper into my professional journey, experience, and
                  accomplishments. My comprehensive CV provides detailed
                  insights into my background and expertise.
                </p>
                <a
                  href="/src/assets/images/Leon_Zhang_Product_Designer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-download"></i>
                  <span>Download My CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
