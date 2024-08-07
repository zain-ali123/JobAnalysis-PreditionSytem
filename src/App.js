import "./App.css";
import ShowCase from "./components/showCase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import PredictionPage from "./components/PredictionPage/PredictionPage";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/News";
import DropDown from "./components/DropDown";
import WorkAnalysis from "./Pages/WorkAnalysis";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Work-analysis" element={<WorkAnalysis/>}/>,
        <Route path="/news" element={<News />} />
        <Route path="/prediction" element={<PredictionPage/>}/>
        <Route path="/dropdown" element={<DropDown/>}/>
      </Routes>
    </Router>
  );
}

export default App;
