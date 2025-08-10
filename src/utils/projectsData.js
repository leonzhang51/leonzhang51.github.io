import budgetingCover from "../assets/images/budgeting/appCover.jpg";
import aiPlatformCover from "../assets/images/AIPlatform/coverpage.png";
import africaTravelCover from "../assets/images/africa_travel/appCover.png";
import nightvilleLogo from "../assets/images/nightville_logo.jpg";
import groceryLogo from "../assets/images/grocery/App_logo.jpg";

// Additional images for FinTech project
import remoteTeam from "../assets/images/budgeting/remoteTeam.jpg";
import marketCompetitor from "../assets/images/budgeting/marketCompetitor.jpg";
import surveyQuestion from "../assets/images/budgeting/surveyQuestion.jpg";
import surveyResult from "../assets/images/budgeting/surveyResult.jpg";
import sofiaPerson from "../assets/images/budgeting/sofiajpg.jpg";
import ivanPerson from "../assets/images/budgeting/ivan.jpg";
import sitemap from "../assets/images/budgeting/sitemap.png";
import sketch from "../assets/images/budgeting/sketch.jpg";
import usabilityTest from "../assets/images/budgeting/usablityTest.jpg";
import outcome from "../assets/images/budgeting/outcome.jpg";
import appUIHome from "../assets/images/budgeting/AppUIHomepng.png";
import budgetUI from "../assets/images/budgeting/budgetUI.jpg";
import savePlan from "../assets/images/budgeting/saveplanjpg.jpg";
import payment from "../assets/images/budgeting/payment.jpg";
import walletEducation from "../assets/images/budgeting/wallet_education.png";

// Additional images for Nightlife project
import personas from "../assets/images/nightlife/personas.jpg";
import sitemapNight from "../assets/images/nightlife/sitemap.jpg";
import userflow from "../assets/images/nightlife/userflow.jpg";
import lowFidelity from "../assets/images/nightlife/low_fidelity.jpg";
import autoGif from "../assets/images/nightlife/auto.gif";
import auto1Gif from "../assets/images/nightlife/auto1.gif";
import manualGif from "../assets/images/nightlife/manual.gif";

// Additional images for Travel Africa project
import headerBg from "../assets/images/africa_travel/headerBg.png";
import uxStrategy from "../assets/images/africa_travel/ux_strategy.png";
import uxMeeting from "../assets/images/africa_travel/ux_meeting.png";
import competitorAnalysis from "../assets/images/africa_travel/competitor_analysis.png";
import quantitativeResearch from "../assets/images/africa_travel/quantitative_research.png";
import usergroupFeedback from "../assets/images/africa_travel/usergroup_feedback.png";
import affinityMap from "../assets/images/africa_travel/affinity_map.png";
import travelerPersona from "../assets/images/africa_travel/traveler_persona.png";
import businessPersona from "../assets/images/africa_travel/business_persona.png";
import empathyMap from "../assets/images/africa_travel/empathy_map.png";
import userJourney from "../assets/images/africa_travel/user_journey.png";
import businessJourney from "../assets/images/africa_travel/business_journey.png";
import problemImg from "../assets/images/africa_travel/problem.png";
import solutionImg from "../assets/images/africa_travel/solution.png";
import featuresImg from "../assets/images/africa_travel/features.png";
import userFlowAfrica from "../assets/images/africa_travel/userFlow.png";
import lowFidelityWireframes from "../assets/images/africa_travel/low_fidelity_wireframes.png";
import mobileUI from "../assets/images/africa_travel/mobileUI.png";
import desktopUI from "../assets/images/africa_travel/desktop.png";
import detailUI from "../assets/images/africa_travel/detail.png";
import portalUI from "../assets/images/africa_travel/portal.png";
import dashboardUI from "../assets/images/africa_travel/dashboard.png";

// Additional images for Grocery project
import mobileScreen from "../assets/images/grocery/mobile_screen.png";
import walmartExample from "../assets/images/grocery/walmart.png";
import groceryIndex from "../assets/images/grocery/index.jpg";
import mealPlan from "../assets/images/grocery/meal_plan.jpg";
import mealPlanDetail from "../assets/images/grocery/meal_plan_detail.jpg";
import recipes from "../assets/images/grocery/recipes.jpg";

export const projectsData = [
  {
    id: "fintech",
    title: "Personal budgeting Mobile APP",
    subtitle:
      "Help millennials understand personal financial statement, take control their money, and optimize the spending",
    description:
      "Help millennials understand personal financial statement, take control their money, and optimize the spending",
    coverImage: budgetingCover,
    category: "Mobile App",
    tags: ["UX Design", "Mobile", "FinTech"],
    timeline: "8 weeks",
    role: "UX Designer, Researcher",
    tools: ["Sketch", "Axure", "InVision"],
    team: "Solo project",
    sections: [
      {
        type: "hero",
        title: "Personal budgeting Mobile APP",
        subtitle:
          "Help millennials understand personal financial statement, take control their money, and optimize the spending",
        content:
          "Contactless cards and online shopping sites make payment more easy than before, We spend money on what we want and what we need, but studies show that the use of contactless can increase spending 8 to 10% by making it harder to monitor our spending.",
        image: budgetingCover,
      },
      {
        type: "section",
        title: "A debit-driven society (user research)",
        content: `
          <p>Too many millennials who carry debt don't know how spend it.</p>
          <p>A survey ran by Northwestern Mutual comprised 503 Gen Zers, 672 millennials, 595 Gen Xers, and 441 baby boomers. On average, millennials who carry debt report owing to a total of $27,900 (excluding mortgages), slightly less than baby boomers and about $8,000 less than the average amount Gen Xers owe. 34% of Americans don't know how much of their monthly income goes toward paying down their personal debt.</p>
          <p><strong>Debit is a struggle even for wealthy millennials</strong></p>
          <p>Making reference to a random twitter survey and google forms. The survey had more than 1000 participants. From this survey, about 60% people don't create budgets for their spending, 50% belong to impulsively-purchasing.</p>

          <h6>Some insights from the survey:</h6>
          <ul>
            <li>It is safe to continue with the designing the solution to this issue.</li>
            <li>Users budgeting are very flexible. Some create budgets for their weekly spending. Some others create budgets for their monthly spending</li>
            <li>Those who budget do so for financial discipline and to understand how they spend their money.</li>
            <li>Some users save a portion of their income and divert the other portion to cater for their expenses.</li>
          </ul>

          <h6>Here is a list of the problems after prioritization:</h6>
          <ul>
            <li>Inability to keep track of spending.</li>
            <li>Excessive spending on a particular expense.</li>
            <li>Lack of proper financial knowledge.</li>
            <li>Lack of access to previous financial records.</li>
            <li>Overly manual or stressful means of budgeting.</li>
          </ul>
        `,
        images: [
          {
            src: surveyQuestion,
            alt: "Survey Questions",
            caption:
              "User research survey questions to understand spending habits",
          },
          {
            src: surveyResult,
            alt: "Survey Results",
            caption: "Results from 197 participants showing spending patterns",
          },
        ],
      },
      {
        type: "section",
        title: "Team & My Role",
        content: `
          <div class="row">
            <div class="col-md-6">
              <h6>Team</h6>
              <p>Duration: One Month</p>
              <p>3 Designers & Researchers</p>
              <h6>My role</h6>
              <p>Lead UX designer and frontend developer in this project, led the design and discovery phase of this project, conducted all of the user interviews and user tests. I led efforts to evolve the service and address customer pain-points related to spending and planning experiences.</p>
            </div>
          </div>
        `,
        images: [
          {
            src: remoteTeam,
            alt: "Remote Team",
            caption: "Our distributed team working on the budgeting app",
          },
        ],
      },
      {
        type: "section",
        title: "Competitive Analysis",
        content: `
          <p>I researched apps related to finances, budget and habit-building and I end up with 7 apps. Then I filtered the ones related to financial management as they could be the main competitors. At this point and I was looking for their current features, and the overall experience using some of them. Here are some features I found related to the opportunities of the research:</p>

          <ul>
            <li>2 of the 7 apps sync bank accounts automatically;</li>
            <li>1 of the 7 reads SMS from the bank and add as a transaction — the person has to copy the message and add in the app;</li>
            <li>4 of the 7 send notifications;</li>
            <li>7 of the 7 apps use charts to illustrate some expenses and transactions.</li>
          </ul>

          <h6>Some insights from competitor analysis:</h6>
          <ul>
            <li>A good number of the apps favor app interaction in portrait mode.</li>
            <li>The apps have easily digestible financial reports.</li>
            <li>The apps all had simple and clean design.</li>
          </ul>
        `,
        images: [
          {
            src: marketCompetitor,
            alt: "Market Competitor Analysis",
            caption:
              "Competitive analysis of existing financial management apps",
          },
        ],
      },
      {
        type: "section",
        title: "User Personas",
        content: `
          <p>Based on my research and interviews, I created two primary personas that represent our target users. These personas helped guide design decisions throughout the project.</p>
        `,
        images: [
          {
            src: sofiaPerson,
            alt: "Sofia Persona",
            caption:
              "Sofia - Young professional seeking better financial control",
          },
          {
            src: ivanPerson,
            alt: "Ivan Persona",
            caption: "Ivan - Graduate student learning financial management",
          },
        ],
      },
      {
        type: "section",
        title: "Final Design",
        content: `
          <p>The final design focuses on three core features: expense tracking, budget planning, and financial insights. The app uses a card-based interface that makes complex financial data easy to understand at a glance.</p>

          <h4>Key Features</h4>
          <ul>
            <li><strong>Smart Categorization:</strong> Automatic expense categorization using machine learning</li>
            <li><strong>Visual Budgets:</strong> Interactive charts and progress bars</li>
            <li><strong>Goal Tracking:</strong> Set and monitor financial goals with milestone celebrations</li>
            <li><strong>Spending Insights:</strong> Personalized recommendations based on spending patterns</li>
          </ul>
        `,
      },
      {
        type: "section",
        title: "Results & Impact",
        content: `
          <p>The app prototype was tested with 15 users over 2 weeks, resulting in:</p>
          <ul>
            <li>92% task completion rate for core features</li>
            <li>4.6/5 average usability rating</li>
            <li>85% of users said they would download the app</li>
            <li>Reduced time to complete budgeting tasks by 60%</li>
          </ul>

          <h4>Next Steps</h4>
          <p>Based on user feedback, future iterations would include social features for shared expenses, integration with investment platforms, and AI-powered financial coaching.</p>
        `,
      },
    ],
  },
  {
    id: "ai-platform",
    title: "The AI Price prediction platform",
    subtitle:
      "AI SaaS solution that boosts revenue by optimizing pricing based on demand and supply",
    description:
      "The Price prediction platform is an AI SaaS solution that boosts revenue by optimizing the service or product price based on demand and supply.",
    coverImage: aiPlatformCover,
    category: "Web Platform",
    tags: ["AI/ML", "SaaS", "Web Design"],
    timeline: "3 months",
    role: "Lead UX Designer, Product Designer",
    tools: ["Sketch", "Figma", "Principle", "Adobe XD"],
    team: "4 designers, 6 developers, 2 data scientists",
    sections: [
      {
        type: "hero",
        title: "AI Price Prediction Platform",
        subtitle:
          "AI SaaS solution that boosts revenue by optimizing pricing based on demand and supply",
        content:
          "The Price prediction platform is an AI SaaS solution that boosts revenue by optimizing the service or product price based on demand and supply. The app is backed by data science and AI which is perfect for Sports, Cinema, Live-entertainment, Parking, Attractions, and Ski Resorts.",
        image: aiPlatformCover,
      },
      {
        type: "section",
        title: "Case Summary",
        content: `
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 class="font-semibold text-lg mb-2">Business Problem</h4>
              <p>Ticket price strategy optimization</p>
            </div>
            <div>
              <h4 class="font-semibold text-lg mb-2">Discovered User Problem</h4>
              <p>Creating effective dynamic ticket pricing strategies that respond to market demand</p>
            </div>
            <div>
              <h4 class="font-semibold text-lg mb-2">Outcomes</h4>
              <p>The AI Price prediction platform improved business pricing strategy. Results include:</p>
              <ul class="mt-2">
                <li>+10% Increase in attendance during less-visited days</li>
                <li>25% Increase in overall revenue</li>
                <li>40% Increase in share of online sales</li>
              </ul>
            </div>
          </div>
        `,
      },
      {
        type: "section",
        title: "The Challenge",
        content: `
          <p>Traditional pricing strategies often fail to capture the dynamic nature of demand and supply in entertainment and service industries. Businesses struggle with:</p>
          <ul>
            <li>Static pricing that doesn't respond to market conditions</li>
            <li>Lost revenue during peak demand periods</li>
            <li>Poor attendance during off-peak times</li>
            <li>Lack of data-driven pricing insights</li>
            <li>Manual pricing adjustments that are slow and inefficient</li>
          </ul>
        `,
      },
      {
        type: "section",
        title: "AI-Powered Solution",
        content: `
          <p>Our platform leverages machine learning algorithms to analyze multiple data sources and automatically adjust pricing in real-time:</p>

          <h4>Core Features</h4>
          <ul>
            <li><strong>Dynamic Pricing Engine:</strong> AI algorithms that adjust prices based on demand patterns</li>
            <li><strong>Market Analysis:</strong> Real-time competitor pricing and market condition monitoring</li>
            <li><strong>Demand Forecasting:</strong> Predictive models for future demand patterns</li>
            <li><strong>Revenue Optimization:</strong> Automated pricing strategies to maximize revenue</li>
            <li><strong>Performance Analytics:</strong> Comprehensive reporting and insights dashboard</li>
          </ul>

          <h4>Target Industries</h4>
          <p>The platform is specifically designed for:</p>
          <ul>
            <li>Sports venues and stadiums</li>
            <li>Cinema and entertainment complexes</li>
            <li>Live entertainment and concert venues</li>
            <li>Parking facilities</li>
            <li>Tourist attractions and theme parks</li>
            <li>Ski resorts and seasonal venues</li>
          </ul>
        `,
      },
      {
        type: "section",
        title: "Results & Impact",
        content: `
          <p>The platform has delivered significant business value across multiple client implementations:</p>

          <div class="grid md:grid-cols-2 gap-8 mt-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-semibold text-lg mb-4">Revenue Growth</h4>
              <ul>
                <li><strong>25% average revenue increase</strong> across all clients</li>
                <li><strong>40% boost in online sales</strong> through optimized pricing</li>
                <li><strong>15% improvement in profit margins</strong> through better pricing strategies</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-lg mb-4">Operational Efficiency</h4>
              <ul>
                <li><strong>90% reduction</strong> in manual pricing adjustments</li>
                <li><strong>Real-time pricing updates</strong> across all channels</li>
                <li><strong>Automated reporting</strong> and performance tracking</li>
              </ul>
            </div>
          </div>

          <h4 class="mt-8 mb-4">Client Success Stories</h4>
          <p>Sports venues using our platform saw a 10% increase in attendance during traditionally low-demand periods, while maintaining premium pricing during peak times. Entertainment complexes reported a 40% increase in online ticket sales due to dynamic pricing strategies that attracted price-sensitive customers during off-peak hours.</p>
        `,
      },
    ],
  },
  {
    id: "travel-africa",
    title: "Sireta Travel Platform",
    subtitle:
      "A platform where people are inspired to plan and book travel options in West Africa",
    description:
      "Provide hassle free experience for users who want to travel in West Africa",
    coverImage: africaTravelCover,
    category: "Travel Platform",
    tags: ["UX Research", "Mobile App", "Web Platform"],
    timeline: "4 months",
    role: "UX Strategy, UX Research, Prototyping, Interaction Design, Usability Testing, UI Design",
    tools: ["Sketch", "Figma", "InVision", "SurveyMonkey"],
    team: "3 designers, 4 developers, 1 product manager",
    sections: [
      {
        type: "hero",
        title: "Sireta Travel Platform",
        subtitle:
          "A platform where people are inspired to plan and book travel options in West Africa",
        content:
          "Sireta Travel is a platform where people are inspired to plan and book direct from thousands of travel options in West Africa at the best prices. Sireta Agent, the travel platform helps travel agents manage and promote travel assets in one place.",
        image: africaTravelCover,
      },
      {
        type: "section",
        title: "Why We Started",
        content: `
          <p>There is no tourism system focused on the West Africa market. Travelers have to face various problems with accommodation, traffic, points of interest, restaurants, etc. Local travel agents also have difficulty promoting and managing travel assets.</p>

          <p>What we want to do is bring travelers and agents to one platform, where travelers and agents can solve all problems in one place.</p>
        `,
        images: [
          {
            src: uxStrategy,
            alt: "UX Strategy",
            caption:
              "Strategic approach to solving West African travel market challenges",
          },
        ],
      },
      {
        type: "section",
        title: "Design Strategy",
        content: `
          <h4>Product Goal</h4>
          <p>A platform where users of any age can customize travel packages for themselves or their loved ones under any budget. Collaborating with numbers of hotel chains, restaurants, various sightseeing locations, and adventure sports businesses will help avid travelers build their online community.</p>

          <div class="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h5 class="font-semibold mb-2">Target Groups</h5>
              <ul>
                <li>All age people</li>
                <li>Avid travelers and backpackers</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">Cross Channels</h5>
              <ul>
                <li>iOS</li>
                <li>Android</li>
                <li>Web App</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">Technology Constraints</h5>
              <ul>
                <li>Reliable internet connection</li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h5 class="font-semibold mb-2">Critical Success Factors</h5>
              <ul>
                <li>Provide customers with a wide range of packages based on location, culture, price, rating, etc. to help users choose packages wisely</li>
                <li>Help local agents manage assets and increase sales</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold mb-2">General Tasks</h5>
              <ul>
                <li>Easy Login</li>
                <li>Provide usable filters for searching</li>
                <li>Create customized packages</li>
                <li>Book hotels, flights, trains, admission to events, etc.</li>
              </ul>
            </div>
          </div>
        `,
        images: [
          {
            src: uxMeeting,
            alt: "UX Meeting",
            caption: "Team collaboration and strategy planning sessions",
          },
        ],
      },
      {
        type: "section",
        title: "Research & User Insights",
        content: `
          <p>We put ourselves into the shoes of platform users (agents & travelers), using the Jobs to be Done framework. We created a research plan to help us stay aligned with research goals at all times.</p>

          <h4>Research Goals</h4>
          <ul>
            <li>What motivates people to use personalized travel services?</li>
            <li>What influences a customer's decision in purchasing a trip plan?</li>
            <li>What are people's motivations and pain points when planning and managing a trip?</li>
            <li>What features would they expect when booking a vacation online?</li>
          </ul>

          <h4>Competitive Analysis & Market Research</h4>
          <p>This helped me understand the trends and best practices in the travel market, especially those that help customers receive help from an agent or agency.</p>
        `,
        images: [
          {
            src: competitorAnalysis,
            alt: "Competitive Analysis",
            caption:
              "Analysis of existing travel platforms and market opportunities",
          },
        ],
      },
      {
        type: "section",
        title: "Quantitative Research",
        content: `
          <p>We conducted an online survey with SurveyMonkey to better understand our target users' travel behaviors and preferences.</p>

          <h4>Key Findings</h4>
          <ul>
            <li>Most travelers prefer to book accommodations and flights separately rather than packages</li>
            <li>Price comparison is the most important factor in travel booking decisions</li>
            <li>Younger travelers (18-35) prefer mobile-first experiences</li>
            <li>Trust and safety are primary concerns when booking with new platforms</li>
            <li>Local recommendations and authentic experiences are highly valued</li>
            <li>Younger travelers prefer instant messaging or chat, while older travelers prefer email and phone</li>
          </ul>
        `,
        images: [
          {
            src: quantitativeResearch,
            alt: "Quantitative Research Results",
            caption: "Survey results showing user preferences and behaviors",
          },
          {
            src: usergroupFeedback,
            alt: "User Group Feedback",
            caption: "Open-ended feedback from survey participants",
          },
        ],
      },
      {
        type: "section",
        title: "Qualitative Research & User Personas",
        content: `
          <p>We interviewed 30 people from different age groups and asked them around 15 questions about their pain points while traveling, their good and bad experiences, and more insights. All conversations were open-ended to gather quality data for our application design.</p>

          <h4>Affinity Mapping</h4>
          <p>We organized all research insights using affinity mapping to identify patterns and key themes in user behavior and needs.</p>
        `,
        images: [
          {
            src: affinityMap,
            alt: "Affinity Map",
            caption:
              "Organized research insights showing user behavior patterns",
          },
          {
            src: travelerPersona,
            alt: "Traveler Persona",
            caption: "Primary persona representing our target travelers",
          },
          {
            src: businessPersona,
            alt: "Agent Persona",
            caption:
              "Business persona representing travel agents and service providers",
          },
        ],
      },
      {
        type: "section",
        title: "User Journey & Empathy Mapping",
        content: `
          <p>We created detailed user journeys and empathy maps to understand the complete travel planning and booking experience from both traveler and agent perspectives.</p>
        `,
        images: [
          {
            src: empathyMap,
            alt: "Empathy Map",
            caption:
              "Understanding user emotions, thoughts, and behaviors throughout their journey",
          },
          {
            src: userJourney,
            alt: "User Journey Map",
            caption:
              "Complete traveler journey from inspiration to post-trip experience",
          },
          {
            src: businessJourney,
            alt: "Business Journey Map",
            caption:
              "Agent journey showing how they interact with the platform",
          },
        ],
      },
      {
        type: "section",
        title: "Problem Definition & Solution",
        content: `
          <h4>Key Problems Identified</h4>
          <ul>
            <li>Lack of comprehensive West African travel resources</li>
            <li>Difficulty finding reliable local agents and services</li>
            <li>Limited customization options for travel packages</li>
            <li>Poor communication between travelers and local providers</li>
            <li>Difficult to arrange trips with friends and groups</li>
          </ul>

          <h4>Our Solution</h4>
          <ul>
            <li>Create a centralized platform for West African travel</li>
            <li>Connect verified local agents with international travelers</li>
            <li>Provide customizable travel package builder</li>
            <li>Enable seamless communication and booking</li>
            <li>Help users build travel packages with machine learning recommendations</li>
          </ul>
        `,
        images: [
          {
            src: problemImg,
            alt: "Problem Statement",
            caption: "Visual representation of key user problems",
          },
          {
            src: solutionImg,
            alt: "Solution Overview",
            caption: "Our approach to solving travel planning challenges",
          },
        ],
      },
      {
        type: "section",
        title: "Features & User Flow",
        content: `
          <p>Based on our research insights, we designed a comprehensive feature set that addresses both traveler and agent needs.</p>
        `,
        images: [
          {
            src: featuresImg,
            alt: "Feature Overview",
            caption: "Complete feature set for travelers and agents",
          },
          {
            src: userFlowAfrica,
            alt: "User Flow",
            caption:
              "User journey through the platform from discovery to booking",
          },
          {
            src: lowFidelityWireframes,
            alt: "Low Fidelity Wireframes",
            caption: "Early wireframes showing key user flows and interactions",
          },
        ],
      },
      {
        type: "section",
        title: "Final UI Design",
        content: `
          <p>The final design focuses on creating an intuitive, mobile-first experience that works seamlessly across all devices. We prioritized visual storytelling to inspire travel while maintaining clear navigation and booking flows.</p>

          <h4>Design Highlights</h4>
          <ul>
            <li><strong>Mobile-First:</strong> Optimized for smartphone usage with touch-friendly interfaces</li>
            <li><strong>Visual Storytelling:</strong> High-quality imagery to inspire and inform travel decisions</li>
            <li><strong>Dual Experience:</strong> Separate but connected experiences for travelers and agents</li>
            <li><strong>Cultural Sensitivity:</strong> Design elements that respect and celebrate West African culture</li>
          </ul>
        `,
        images: [
          {
            src: mobileUI,
            alt: "Mobile UI Design",
            caption: "Mobile app interface showing key user flows",
          },
          {
            src: desktopUI,
            alt: "Desktop UI Design",
            caption: "Web platform interface for desktop users",
          },
          {
            src: detailUI,
            alt: "Detail Pages",
            caption: "Detailed view of travel packages and booking flow",
          },
          {
            src: portalUI,
            alt: "Agent Portal",
            caption: "Agent dashboard for managing travel assets and bookings",
          },
          {
            src: dashboardUI,
            alt: "Analytics Dashboard",
            caption:
              "Business intelligence dashboard for agents and administrators",
          },
        ],
      },
    ],
  },
  {
    id: "reservation",
    title: "Online Reservation APP",
    subtitle:
      '"Nightlife Ville" - Making nightlife planning as simple as hailing an Uber',
    description:
      '"Nightlife Ville" is a simple utility app meant to make plan nightlife as simple as hailing a Uber',
    coverImage: nightvilleLogo,
    category: "Mobile App",
    tags: ["Mobile", "Booking", "UX Design"],
    timeline: "6 weeks",
    role: "UX Designer, Product Designer",
    tools: ["Sketch", "Figma", "Principle"],
    team: "Solo project",
    sections: [
      {
        type: "hero",
        title: "Nightlife Ville",
        subtitle: "Making nightlife planning as simple as hailing an Uber",
        content:
          "A comprehensive mobile application that streamlines the entire nightlife experience - from planning and booking to payment and calendar integration.",
        image: nightvilleLogo,
      },
      {
        type: "section",
        title: "The Challenge",
        content: `
          <p>Planning a night out often involves multiple apps, phone calls, and coordination headaches. Users struggle with:</p>
          <ul>
            <li>Finding available venues and making reservations</li>
            <li>Coordinating with friends and managing group bookings</li>
            <li>Keeping track of reservations and timing</li>
            <li>Handling payments and splitting costs</li>
          </ul>
          <p>The goal was to create a single app that handles the entire nightlife planning process seamlessly.</p>
        `,
      },
      {
        type: "section",
        title: "User Research & Insights",
        content: `
          <p>Through interviews with 25 frequent nightlife goers, I discovered key pain points:</p>
          <ul>
            <li><strong>Time-consuming planning:</strong> Users spend 30+ minutes coordinating a single night out</li>
            <li><strong>Booking friction:</strong> 60% abandon reservation attempts due to complex processes</li>
            <li><strong>Group coordination:</strong> Managing multiple people's preferences is the biggest challenge</li>
            <li><strong>Last-minute changes:</strong> Plans frequently change, requiring flexible booking systems</li>
          </ul>
        `,
      },
      {
        type: "section",
        title: "User Research & Personas",
        content: `
          <p>The target clients of nightlife ville are young persons who have strong preference for mobile-first. They are heavy users of internet and mobile, so they want something that feel familiar to those experience, but more focus on mobile.</p>

          <p>Keeping my personas in mind, I wanted to capture the full user journey from researching through the physical visit to the place where they planned.</p>
        `,
        images: [
          {
            src: personas,
            alt: "User Personas",
            caption: "Primary personas representing our target nightlife users",
          },
        ],
      },
      {
        type: "section",
        title: "Information Architecture",
        content: `
          <p>For now I have a comprehensive list of necessary, prioritized features for the new site, I mapped out the overall site structure. This helped me to narrow down the right navigation choices and which pages would be created.</p>
        `,
        images: [
          {
            src: sitemapNight,
            alt: "Site Map",
            caption: "Information architecture and site structure",
          },
          {
            src: userflow,
            alt: "User Flow",
            caption: "User journey and interaction flow through the app",
          },
        ],
      },
      {
        type: "section",
        title: "Wireframing & Testing",
        content: `
          <h5>Low fidelity wireframes</h5>
          <p>The low fidelity wireframe used to convey meaning to the user or product owner, that's very important to present and evaluate my idea. The biggest challenges in wireframing are conceptualizing a trouble free tools for nightlife planning.</p>

          <h5>Test and repeat</h5>
          <p>In testing, I was very concerned with finding out if my concepts for the nightlife planning, and the process of the nightlife planning was easy to understand. In testing with users and getting feedback from other designers, I gathered pages of necessary changes that would help users accomplish their tasks. I also learned that the planning process needs to be optimised and the number of budget unnecessary shows everywhere.</p>

          <p>After redesign planning process and remove some budget tag in planning pages, I tested the new designs on users again, and felt confident moving forward. The structure was usable, logical, and familiar.</p>
        `,
        images: [
          {
            src: lowFidelity,
            alt: "Low Fidelity Wireframes",
            caption:
              "Early wireframes used for concept validation and user testing",
          },
        ],
      },
      {
        type: "section",
        title: "Final Design - Three Planning Modes",
        content: `
          <p>The nightlife ville is dedicated to helping user extricate from complicated nightlife planning job. The nightlife ville will change this experience be interesting, be fun, don't be boring, like playing games on your smartphone.</p>

          <p>From my research speaking with designer, sales person and potential user, I learned the user only need a beautiful, simple and useful tools to help them plan their nightlife. For these reasons, Colors should be vibrant, content should be directed.</p>

          <h4>Complete generate plan by system</h4>
          <p>After sign in and set the budget for nightlife, click cloud, the system will generate nightlife plan automatic and send reserve request, all the user did just wait, confirm, add to the calendar then enjoy.</p>
        `,
        images: [
          {
            src: autoGif,
            alt: "Automatic Planning Mode",
            caption:
              "Automatic mode - System generates complete nightlife plan",
          },
          {
            src: auto1Gif,
            alt: "Manual + Automatic Mode",
            caption:
              "Manual + Automatic mode - User adjusts then system handles booking",
          },
          {
            src: manualGif,
            alt: "Manual Planning Mode",
            caption:
              "Manual mode - Complete user control over planning and booking",
          },
        ],
      },
      {
        type: "section",
        title: "Key Features",
        content: `
          <ul>
            <li><strong>Smart Planning:</strong> AI-powered recommendations based on preferences and budget</li>
            <li><strong>Group Coordination:</strong> Invite friends, vote on options, and manage group preferences</li>
            <li><strong>Real-time Booking:</strong> Instant reservation confirmations with backup options</li>
            <li><strong>Calendar Integration:</strong> Seamless sync with personal calendars</li>
            <li><strong>Payment Splitting:</strong> Easy cost sharing among group members</li>
            <li><strong>Live Updates:</strong> Real-time notifications about reservations and changes</li>
          </ul>
        `,
      },
      {
        type: "section",
        title: "Results & Impact",
        content: `
          <p>The project was acquired by an online reservation platform and integrated into their system, resulting in:</p>
          <ul>
            <li><strong>40% increase</strong> in relative business revenue in the first 6 months</li>
            <li><strong>65% reduction</strong> in planning time for users</li>
            <li><strong>85% user satisfaction</strong> rate in post-launch surveys</li>
            <li><strong>3x increase</strong> in successful group bookings</li>
          </ul>

          <h4>Lessons Learned</h4>
          <p>This passion project taught me how to complete a project under limited time, limited funding, and no supervision. It reinforced the importance of user research and iterative design in creating truly useful products.</p>
        `,
      },
    ],
  },
  {
    id: "grocery",
    title: "Improve shopping experience for online Grocery Store",
    subtitle: "Simplify grocery shopping through recipe-based meal planning",
    description:
      "Simplify the shopping process, finish grocery shopping tasks by choosing recipes and meal plans, all the process as simple as 6 clicks.",
    coverImage: groceryLogo,
    category: "E-commerce",
    tags: ["UX Research", "Mobile App", "E-commerce"],
    timeline: "3 months",
    role: "User Research, Persona, User Journey, Ideation Workshop, Business Design, Content Strategy, User Flow, Wireframes, Prototypes, Frontend",
    tools: ["Sketch", "InVision", "Figma"],
    team: "2 designers, 3 developers, 1 product manager",
    sections: [
      {
        type: "hero",
        title: "VifGo - Online Grocery Store",
        subtitle:
          "Improve shopping experience through recipe-based meal planning",
        content:
          "X supermarket is an online grocery store that provides online grocery ordering and delivery service for customers in the city. In 2017, they decided to optimize the website and invest in a mobile app, launching a mobile application to help customers place orders on the go.",
        image: groceryLogo,
      },
      {
        type: "section",
        title: "Project Overview",
        content: `
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div class="bg-red-50 p-6 rounded-lg">
              <h4 class="font-semibold text-lg mb-4 text-red-700">Challenge</h4>
              <ul>
                <li>Increase user retention and conversion</li>
                <li>Faster order time</li>
                <li>Create an engaging platform</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-semibold text-lg mb-4 text-blue-700">My Role</h4>
              <ul>
                <li>User Research & Persona Development</li>
                <li>User Journey Mapping</li>
                <li>Ideation Workshop Facilitation</li>
                <li>Business Design & Content Strategy</li>
                <li>User Flow & Wireframes</li>
                <li>Prototypes & Frontend Development</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-lg mb-4 text-green-700">Results</h4>
              <ul>
                <li><strong>+46%</strong> User registration rate</li>
                <li><strong>+51%</strong> Repeat purchase rate</li>
                <li><strong>+120%</strong> Revenue increase</li>
              </ul>
            </div>
          </div>

          <p class="text-gray-600 italic">To comply with my non-disclosure agreement, I have omitted confidential information in this case study. All information presented is my own work on a redesigned grocery store concept (VifGo).</p>
        `,
      },
      {
        type: "section",
        title: "Market Research & Competitive Analysis",
        content: `
          <p>I conducted extensive research on existing grocery shopping platforms to understand current market standards and identify opportunities for improvement.</p>

          <h4>Key Insights from Competitive Analysis</h4>
          <ul>
            <li>Most grocery apps focus on product browsing rather than meal planning</li>
            <li>Users often struggle with deciding what to cook and what ingredients to buy</li>
            <li>Checkout processes are often lengthy and complex</li>
            <li>Limited integration between meal planning and shopping</li>
          </ul>

          <h4>Popular Grocery Platforms Analyzed</h4>
          <p>I studied leading platforms including Walmart Grocery, Instacart, and other major players to understand their strengths and weaknesses.</p>
        `,
        images: [
          {
            src: mobileScreen,
            alt: "Mobile Grocery App Examples",
            caption: "Analysis of existing mobile grocery shopping interfaces",
          },
          {
            src: walmartExample,
            alt: "Walmart Grocery Interface",
            caption: "Walmart's grocery shopping experience as a benchmark",
          },
        ],
      },
      {
        type: "section",
        title: "The Innovation: Recipe-Driven Shopping",
        content: `
          <p>The key innovation in our approach was to flip the traditional grocery shopping model. Instead of starting with products, we start with recipes and meal plans.</p>

          <h4>How It Works</h4>
          <ol>
            <li><strong>Choose Recipes:</strong> Users browse and select recipes for the week</li>
            <li><strong>Automatic Ingredients:</strong> System automatically adds all required ingredients to cart</li>
            <li><strong>Smart Quantities:</strong> Calculates exact quantities needed based on serving sizes</li>
            <li><strong>One-Click Checkout:</strong> Streamlined checkout process in just 6 clicks</li>
            <li><strong>Delivery Scheduling:</strong> Choose convenient delivery time</li>
            <li><strong>Cooking Support:</strong> Access recipes during cooking with step-by-step guidance</li>
          </ol>

          <h4>Benefits</h4>
          <ul>
            <li><strong>Reduces Decision Fatigue:</strong> No more wondering "what should I cook?"</li>
            <li><strong>Eliminates Food Waste:</strong> Buy exactly what you need</li>
            <li><strong>Saves Time:</strong> No need to create shopping lists manually</li>
            <li><strong>Encourages Cooking:</strong> Makes home cooking more accessible</li>
          </ul>
        `,
      },
      {
        type: "section",
        title: "Final Design Solutions",
        content: `
          <p>The final design focuses on creating a seamless flow from meal inspiration to ingredient delivery. The interface prioritizes visual appeal and ease of use while maintaining the core recipe-driven shopping experience.</p>

          <h4>Key Design Features</h4>
          <ul>
            <li><strong>Visual Recipe Cards:</strong> Beautiful, appetizing images that inspire cooking</li>
            <li><strong>Smart Meal Planning:</strong> Weekly meal planner with drag-and-drop functionality</li>
            <li><strong>Ingredient Intelligence:</strong> Automatic quantity calculation and substitution suggestions</li>
            <li><strong>Streamlined Checkout:</strong> Simplified 6-click checkout process</li>
            <li><strong>Cooking Mode:</strong> Step-by-step recipe guidance during cooking</li>
          </ul>
        `,
        images: [
          {
            src: groceryIndex,
            alt: "Homepage Design",
            caption:
              "Main interface showing recipe discovery and meal planning",
          },
          {
            src: mealPlan,
            alt: "Meal Planning Interface",
            caption: "Weekly meal planner with recipe selection",
          },
          {
            src: mealPlanDetail,
            alt: "Meal Plan Details",
            caption: "Detailed view of selected meals with ingredient lists",
          },
          {
            src: recipes,
            alt: "Recipe Collection",
            caption: "Recipe browsing interface with filtering and search",
          },
        ],
      },
      {
        type: "section",
        title: "Impact & Results",
        content: `
          <p>The recipe-driven approach to grocery shopping proved highly successful, delivering significant improvements across all key metrics:</p>

          <div class="grid md:grid-cols-2 gap-8 mt-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="font-semibold text-lg mb-4">User Engagement</h4>
              <ul>
                <li><strong>46% increase</strong> in user registration rate</li>
                <li><strong>51% increase</strong> in repeat purchase rate</li>
                <li><strong>35% reduction</strong> in cart abandonment</li>
                <li><strong>60% faster</strong> average order completion time</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-lg mb-4">Business Impact</h4>
              <ul>
                <li><strong>120% increase</strong> in overall revenue</li>
                <li><strong>40% increase</strong> in average order value</li>
                <li><strong>25% reduction</strong> in customer acquisition cost</li>
                <li><strong>4.8/5</strong> average app store rating</li>
              </ul>
            </div>
          </div>

          <h4 class="mt-8 mb-4">Key Learnings</h4>
          <ul>
            <li>Recipe-driven shopping significantly reduces decision fatigue</li>
            <li>Visual meal planning increases user engagement and retention</li>
            <li>Automated ingredient calculation eliminates a major pain point</li>
            <li>Streamlined checkout processes directly impact conversion rates</li>
          </ul>
        `,
      },
    ],
  },
];
