import { useParams } from 'react-router-dom'
import { projectsData } from '../utils/projectsData'

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projectsData.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <p className="text-gray-600">The project you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.title}</h1>
        <div className="mb-8">
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">{project.description}</p>
          {project.content && (
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
