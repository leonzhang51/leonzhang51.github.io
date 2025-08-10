import budgetingCover from "../../assets/images/budgeting/appCover.jpg";

function FintechProject() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Personal Budgeting Mobile APP</h1>
      
      <div className="mb-8">
        <img 
          src={budgetingCover} 
          alt="Personal Budgeting App"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="prose max-w-none">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Project Overview</h2>
          <p className="text-lg text-gray-700">
            Help millennials understand personal financial statement, take control their money, 
            and optimize the spending through an intuitive mobile application.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
          <p className="text-gray-600 mb-4">
            Many millennials struggle with personal finance management, lacking the tools and 
            insights needed to make informed spending decisions and build long-term financial health.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Smart Expense Tracking</h4>
              <p className="text-sm text-gray-600">Automatic categorization and real-time expense monitoring</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Budget Optimization</h4>
              <p className="text-sm text-gray-600">AI-powered spending recommendations and budget adjustments</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Financial Insights</h4>
              <p className="text-sm text-gray-600">Visual analytics and spending pattern analysis</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Goal Tracking</h4>
              <p className="text-sm text-gray-600">Set and monitor financial goals with progress indicators</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Design Process</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">1. User Research</h4>
              <p className="text-gray-600">Conducted interviews with 25+ millennials to understand financial pain points</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">2. Wireframing & Prototyping</h4>
              <p className="text-gray-600">Created low and high-fidelity prototypes for user testing</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">3. User Testing</h4>
              <p className="text-gray-600">Iterative testing with target users to refine the experience</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-gray-600">User engagement increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">60%</div>
                <div className="text-sm text-gray-600">Better budget adherence</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">4.8/5</div>
                <div className="text-sm text-gray-600">User satisfaction rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FintechProject;
