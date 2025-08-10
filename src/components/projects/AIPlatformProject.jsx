import aiPlatformCover from "../../assets/images/AIPlatform/coverpage.png";

function AIPlatformProject() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">AI Price Prediction Platform</h1>
      
      <div className="mb-8">
        <img 
          src={aiPlatformCover} 
          alt="AI Price Prediction Platform"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="prose max-w-none">
        <div className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Project Overview</h2>
          <p className="text-lg text-gray-700">
            An AI SaaS solution that boosts revenue by optimizing service or product prices 
            based on demand and supply patterns using machine learning algorithms.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Business Challenge</h3>
          <p className="text-gray-600 mb-4">
            Businesses struggle to set optimal prices that maximize revenue while remaining competitive. 
            Traditional pricing strategies often miss market opportunities and fail to respond to 
            real-time demand fluctuations.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Dynamic Price Optimization</h4>
              <p className="text-sm text-gray-600">Real-time price adjustments based on market conditions</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Demand Forecasting</h4>
              <p className="text-sm text-gray-600">ML-powered predictions of future demand patterns</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Competitive Intelligence</h4>
              <p className="text-sm text-gray-600">Monitor competitor pricing and market positioning</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Revenue Impact Modeling</h4>
              <p className="text-sm text-gray-600">Simulate pricing scenarios and predict revenue outcomes</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Machine Learning</h4>
              <p className="text-gray-600">Python, TensorFlow, scikit-learn for predictive modeling</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Backend</h4>
              <p className="text-gray-600">Node.js, Express, PostgreSQL for data processing</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Frontend</h4>
              <p className="text-gray-600">React, D3.js for interactive dashboards and visualizations</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Real-time price optimization engine</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Advanced analytics dashboard</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>A/B testing framework for pricing strategies</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>API integration for existing e-commerce platforms</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">23%</div>
                <div className="text-sm text-gray-600">Average revenue increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">45%</div>
                <div className="text-sm text-gray-600">Faster pricing decisions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">92%</div>
                <div className="text-sm text-gray-600">Prediction accuracy</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AIPlatformProject;
