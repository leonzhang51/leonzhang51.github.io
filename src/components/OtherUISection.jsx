import { useState } from 'react'

function OtherUISection() {
  const [selectedProject, setSelectedProject] = useState(null)

  const otherProjects = [
    {
      id: 'sports-club',
      title: 'Sports club website UI',
      image: '/src/assets/images/other_ui/fitness.png',
      modalImages: ['/src/assets/images/project_image/sport_club/landpage.png']
    },
    {
      id: 'beats',
      title: 'Beats online trading platform',
      image: '/src/assets/images/project_image/beats/Sign_in.png',
      modalImages: [
        '/src/assets/images/project_image/beats/home_page.png',
        '/src/assets/images/project_image/beats/Sign_up.png'
      ]
    },
    {
      id: 'parking',
      title: 'City parking mobile APP',
      image: '/src/assets/images/project_image/city_parking/appCover.png',
      modalImages: [
        '/src/assets/images/project_image/city_parking/Signin.png',
        '/src/assets/images/project_image/city_parking/user_profile.png',
        '/src/assets/images/project_image/city_parking/car_locator.png',
        '/src/assets/images/project_image/city_parking/car_parking_info.png'
      ]
    },
    {
      id: 'fintech-ui',
      title: 'UI for FinTech',
      image: '/src/assets/images/bank/cover.png',
      modalImages: [
        '/src/assets/images/bank/dashboardSignin.png',
        '/src/assets/images/bank/bankdashboard.png',
        '/src/assets/images/bank/appUI1.png',
        '/src/assets/images/bank/appUI2.png'
      ]
    },
    {
      id: 'grocery-ui',
      title: 'New design for online grocery store',
      image: '/src/assets/images/project_image/grocery_online/meal_plan_detail.png',
      modalImages: [
        '/src/assets/images/project_image/grocery_online/landingpage.png',
        '/src/assets/images/project_image/grocery_online/Recipe_detail.png'
      ]
    },
    {
      id: 'nightlife-ui',
      title: 'Reservation mobile APP',
      image: '/src/assets/images/project_image/nightlifeVille/Appcoverpage.png',
      modalImages: [
        '/src/assets/images/project_image/nightlifeVille/Signin.png',
        '/src/assets/images/project_image/nightlifeVille/home.png',
        '/src/assets/images/project_image/nightlifeVille/search.png'
      ]
    },
    {
      id: 'africa-travel-ui',
      title: 'Africa travel website',
      image: '/src/assets/images/project_image/travel/app_logo.jpg',
      modalImages: [
        '/src/assets/images/project_image/travel/Desktop.png',
        '/src/assets/images/project_image/travel/dashboard.png',
        '/src/assets/images/project_image/travel/landing.png'
      ]
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Other UI Design</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {otherProjects.map((project) => (
            <div 
              key={project.id} 
              className="text-center cursor-pointer group"
              onClick={() => openModal(project)}
            >
              <div className="overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mt-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="grid gap-4">
                {selectedProject.modalImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${selectedProject.title} ${index + 1}`}
                    className="w-full rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
            <div className="p-6 border-t text-center">
              <button 
                onClick={closeModal}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default OtherUISection
