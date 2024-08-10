import "./App.css";
import ShowCase from "./components/showCase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import PredictionPage from "./Pages/PredictionPage";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDown from "./components/DropDown";
import WorkAnalysis from "./Pages/WorkAnalysis";
import WorkType from "./Pages/WorkType";
import NewsPage from "./Pages/NewsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Work-analysis" element={<WorkAnalysis />} />,
        <Route path="/news" element={<NewsPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/Work-type" element={<WorkType />} />
      </Routes>
    </Router>
  );
}

export default App;
