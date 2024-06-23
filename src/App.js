import "./App.css";
import ShowCase from "./components/showCase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage/landingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/News";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
