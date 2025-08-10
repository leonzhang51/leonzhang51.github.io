import { useParams } from 'react-router-dom'
import FintechProject from '../components/projects/FintechProject'
import AIPlatformProject from '../components/projects/AIPlatformProject'
import TravelAfricaProject from '../components/projects/TravelAfricaProject'
import ReservationProject from '../components/projects/ReservationProject'
import GroceryProject from '../components/projects/GroceryProject'

const projectComponents = {
  'fintech': FintechProject,
  'ai-platform': AIPlatformProject,
  'travel-africa': TravelAfricaProject,
  'reservation': ReservationProject,
  'grocery': GroceryProject,
}

function ProjectDetail() {
  const { projectId } = useParams()
  const ProjectComponent = projectComponents[projectId]

  if (!ProjectComponent) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <p className="text-gray-600">The project you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <ProjectComponent />
    </div>
  )
}

export default ProjectDetail
