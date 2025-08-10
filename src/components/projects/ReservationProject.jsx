import nightvilleLogo from "../../assets/images/nightville_logo.jpg";

function ReservationProject() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Nightlife Ville - Reservation App</h1>
      
      <div className="mb-8">
        <img 
          src={nightvilleLogo} 
          alt="Nightlife Ville App"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="prose max-w-none">
        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Project Overview</h2>
          <p className="text-lg text-gray-700">
            "Nightlife Ville" is a simple utility app designed to make planning nightlife 
            as simple as hailing an Uber. One-tap reservations for the best nightlife experiences.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
          <p className="text-gray-600 mb-4">
            Planning nightlife often involves multiple apps, phone calls, and uncertainty about 
            availability. Users need a streamlined way to discover, book, and manage their night out.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">One-Tap Reservations</h4>
              <p className="text-sm text-gray-600">Book tables, VIP sections, and events instantly</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Real-Time Availability</h4>
              <p className="text-sm text-gray-600">Live updates on venue capacity and wait times</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Group Planning</h4>
              <p className="text-sm text-gray-600">Coordinate with friends and split costs seamlessly</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Integrated Payments</h4>
              <p className="text-sm text-gray-600">Secure, contactless payment processing</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Design Philosophy</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold">Simplicity First</h4>
              <p className="text-gray-600">Minimal steps from discovery to reservation completion</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold">Speed & Efficiency</h4>
              <p className="text-gray-600">Quick booking process optimized for mobile use</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold">Social Integration</h4>
              <p className="text-gray-600">Built-in features for group coordination and sharing</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">User Journey</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span>Discover venues based on location and preferences</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span>Check real-time availability and pricing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span>Invite friends and coordinate group size</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <span>Complete reservation with one tap</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <span>Receive confirmation and venue details</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-600">3.2s</div>
                <div className="text-sm text-gray-600">Average booking time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">89%</div>
                <div className="text-sm text-gray-600">User retention rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">4.7/5</div>
                <div className="text-sm text-gray-600">App store rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ReservationProject;
