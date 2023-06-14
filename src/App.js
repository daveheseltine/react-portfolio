import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js"
import Projects from "./pages/Projects.js"
import Navbar from "./components/Navbar.js"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}


export default App;

