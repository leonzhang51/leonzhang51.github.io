import { Link } from "react-router-dom";

function ProjectTemplate({ project }) {
  if (!project) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {project.sections?.find((s) => s.type === "hero") && (
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <Link
                  to="/#projects"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ← Back to Projects
                </Link>
              </nav>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                    {project.title}
                  </h1>

                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    {project.subtitle || project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {project.role && (
                      <div>
                        <h4 className="font-semibold text-white/80 mb-1">
                          Role
                        </h4>
                        <p className="text-white">{project.role}</p>
                      </div>
                    )}
                    {project.timeline && (
                      <div>
                        <h4 className="font-semibold text-white/80 mb-1">
                          Timeline
                        </h4>
                        <p className="text-white">{project.timeline}</p>
                      </div>
                    )}
                    {project.tools && (
                      <div>
                        <h4 className="font-semibold text-white/80 mb-1">
                          Tools
                        </h4>
                        <p className="text-white">{project.tools.join(", ")}</p>
                      </div>
                    )}
                    {project.team && (
                      <div>
                        <h4 className="font-semibold text-white/80 mb-1">
                          Team
                        </h4>
                        <p className="text-white">{project.team}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {project.sections
            ?.filter((s) => s.type === "section")
            .map((section, index) => (
              <section key={index} className="mb-16">
                <h2 className="font-display text-3xl font-bold text-gray-800 mb-8">
                  {section.title}
                </h2>

                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-gray-700 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>

                {/* Section Images */}
                {section.images && section.images.length > 0 && (
                  <div className="grid gap-8 mt-8">
                    {section.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="text-center">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                        />
                        {image.caption && (
                          <p className="text-sm text-gray-600 mt-3 italic">
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
        </div>
      </div>

      {/* Navigation to other projects */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold text-gray-800 mb-8">
            Explore More Projects
          </h3>
          <Link
            to="/#projects"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectTemplate;
