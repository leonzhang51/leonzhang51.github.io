import africaTravelCover from "../../assets/images/africa_travel/appCover.png";

function TravelAfricaProject() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">West Africa Travel Platform</h1>
      
      <div className="mb-8">
        <img 
          src={africaTravelCover} 
          alt="West Africa Travel Platform"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="prose max-w-none">
        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-orange-800 mb-4">Project Overview</h2>
          <p className="text-lg text-gray-700">
            A comprehensive travel booking system designed specifically for West African destinations, 
            providing hassle-free experiences for travelers while connecting them with trusted local agents.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">The Problem</h3>
          <p className="text-gray-600 mb-4">
            Travelers to West Africa often face challenges finding reliable information, trusted local contacts, 
            and seamless booking experiences. Language barriers and unfamiliar local customs add complexity 
            to trip planning.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Destination Discovery</h4>
              <p className="text-sm text-gray-600">Curated travel guides and hidden gems across West Africa</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Local Agent Network</h4>
              <p className="text-sm text-gray-600">Verified local guides and service providers</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Integrated Booking</h4>
              <p className="text-sm text-gray-600">End-to-end booking for flights, hotels, and experiences</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Cultural Insights</h4>
              <p className="text-sm text-gray-600">Local customs, languages, and cultural preparation guides</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">User Experience Design</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Cultural Sensitivity</h4>
              <p className="text-gray-600">Interface designed with respect for local cultures and customs</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Trust & Safety</h4>
              <p className="text-gray-600">Verified agents and secure payment systems for peace of mind</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Local Expertise</h4>
              <p className="text-gray-600">Recommendations from local experts and experienced travelers</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Supported Destinations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold">Ghana</h4>
              <p className="text-sm text-gray-600">Accra, Cape Coast, Kumasi</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold">Nigeria</h4>
              <p className="text-sm text-gray-600">Lagos, Abuja, Kano</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold">Senegal</h4>
              <p className="text-sm text-gray-600">Dakar, Saint-Louis, Saly</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Impact & Results</h3>
          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Successful trips planned</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Customer satisfaction rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">150+</div>
                <div className="text-sm text-gray-600">Verified local agents</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TravelAfricaProject;
