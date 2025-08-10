import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProgressBar from "./components/ProgressBar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ProgressBar />
        <Header />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
