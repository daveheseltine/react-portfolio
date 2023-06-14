import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages:
import Home from "./pages/Home.js"
import Work from "./pages/Work.js"
import CV from "./pages/CV.js"

// Components:
import Navbar from "./components/Navbar.js"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/Work" element={<Work/>} />
        <Route path="/CV" element={<CV/>} />
      </Routes>
    </Router>
  );
}


export default App;

