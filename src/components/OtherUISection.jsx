import { useState } from 'react'

// Import all images
import fitnessImg from '../assets/images/other_ui/fitness.png'
import landpageImg from '../assets/images/project_image/sport_club/landpage.png'
import beatsSignInImg from '../assets/images/project_image/beats/Sign_in.png'
import beatsHomeImg from '../assets/images/project_image/beats/home_page.png'
import beatsSignUpImg from '../assets/images/project_image/beats/Sign_up.png'
import parkingCoverImg from '../assets/images/project_image/city_parking/appCover.png'
import parkingSigninImg from '../assets/images/project_image/city_parking/Signin.png'
import parkingProfileImg from '../assets/images/project_image/city_parking/user_profile.png'
import parkingLocatorImg from '../assets/images/project_image/city_parking/car_locator.png'
import parkingInfoImg from '../assets/images/project_image/city_parking/car_parking_info.png'
import bankCoverImg from '../assets/images/bank/cover.png'
import bankSigninImg from '../assets/images/bank/dashboardSignin.png'
import bankDashboardImg from '../assets/images/bank/bankdashboard.png'
import bankUI1Img from '../assets/images/bank/appUI1.png'
import bankUI2Img from '../assets/images/bank/appUI2.png'
import groceryMealDetailImg from '../assets/images/project_image/grocery_online/meal_plan_detail.png'
import groceryLandingImg from '../assets/images/project_image/grocery_online/landingpage.png'
import groceryRecipeImg from '../assets/images/project_image/grocery_online/Recipe_detail.png'
import nightlifeCoverImg from '../assets/images/project_image/nightlifeVille/Appcoverpage.png'
import nightlifeSigninImg from '../assets/images/project_image/nightlifeVille/Signin.png'
import nightlifeHomeImg from '../assets/images/project_image/nightlifeVille/home.png'
import nightlifeSearchImg from '../assets/images/project_image/nightlifeVille/search.png'
import travelLogoImg from '../assets/images/project_image/travel/app_logo.jpg'
import travelDesktopImg from '../assets/images/project_image/travel/Desktop.png'
import travelDashboardImg from '../assets/images/project_image/travel/dashboard.png'
import travelLandingImg from '../assets/images/project_image/travel/landing.png'

function OtherUISection() {
  const [selectedProject, setSelectedProject] = useState(null)

  const otherProjects = [
    {
      id: 'sports-club',
      title: 'Sports club website UI',
      image: fitnessImg,
      modalImages: [landpageImg]
    },
    {
      id: 'beats',
      title: 'Beats online trading platform',
      image: beatsSignInImg,
      modalImages: [beatsHomeImg, beatsSignUpImg]
    },
    {
      id: 'parking',
      title: 'City parking mobile APP',
      image: parkingCoverImg,
      modalImages: [parkingSigninImg, parkingProfileImg, parkingLocatorImg, parkingInfoImg]
    },
    {
      id: 'fintech-ui',
      title: 'UI for FinTech',
      image: bankCoverImg,
      modalImages: [bankSigninImg, bankDashboardImg, bankUI1Img, bankUI2Img]
    },
    {
      id: 'grocery-ui',
      title: 'New design for online grocery store',
      image: groceryMealDetailImg,
      modalImages: [groceryLandingImg, groceryRecipeImg]
    },
    {
      id: 'nightlife-ui',
      title: 'Reservation mobile APP',
      image: nightlifeCoverImg,
      modalImages: [nightlifeSigninImg, nightlifeHomeImg, nightlifeSearchImg]
    },
    {
      id: 'africa-travel-ui',
      title: 'Africa travel website',
      image: travelLogoImg,
      modalImages: [travelDesktopImg, travelDashboardImg, travelLandingImg]
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
