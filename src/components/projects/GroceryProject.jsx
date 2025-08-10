import groceryLogo from "../../assets/images/grocery/App_logo.jpg";

function GroceryProject() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Recipe-Based Grocery Shopping</h1>
      
      <div className="mb-8">
        <img 
          src={groceryLogo} 
          alt="Grocery Shopping App"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="prose max-w-none">
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Project Overview</h2>
          <p className="text-lg text-gray-700">
            Simplify the shopping process by starting with recipes and meal plans. 
            Complete your grocery shopping in as few as 6 clicks through intelligent automation.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">The Problem</h3>
          <p className="text-gray-600 mb-4">
            Traditional grocery shopping is time-consuming and often results in impulse purchases, 
            forgotten items, and food waste. Users struggle to plan meals and create efficient shopping lists.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Innovation Approach</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Recipe-Driven Shopping</h4>
              <p className="text-sm text-gray-600">Start with what you want to cook, not what to buy</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Smart Ingredient Lists</h4>
              <p className="text-sm text-gray-600">Automatically generate shopping lists from meal plans</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Meal Planning Integration</h4>
              <p className="text-sm text-gray-600">Plan entire weeks of meals with nutritional balance</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">6-Click Checkout</h4>
              <p className="text-sm text-gray-600">Streamlined process from meal selection to purchase</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">User Flow: 6 Clicks to Complete Shopping</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span>Select meal preferences and dietary restrictions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span>Choose recipes for the week from personalized suggestions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span>Review auto-generated shopping list with quantities</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <span>Adjust quantities or substitute ingredients if needed</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <span>Select delivery time and confirm cart</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
              <span>Complete secure payment and scheduling</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>AI-powered recipe recommendations based on preferences</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Automatic nutritional analysis and balancing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Smart inventory management to avoid duplicate purchases</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Seasonal ingredient suggestions and local sourcing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Integration with popular recipe platforms and meal kits</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">User Benefits</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Time Savings</h4>
              <p className="text-gray-600">Reduce shopping time by 70% through automation</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Reduced Food Waste</h4>
              <p className="text-gray-600">Buy exactly what you need based on planned meals</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Better Nutrition</h4>
              <p className="text-gray-600">Balanced meal planning with nutritional guidance</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">70%</div>
                <div className="text-sm text-gray-600">Time savings per shopping trip</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">40%</div>
                <div className="text-sm text-gray-600">Reduction in food waste</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">4.6/5</div>
                <div className="text-sm text-gray-600">User satisfaction rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GroceryProject;
