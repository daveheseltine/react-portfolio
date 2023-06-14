import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages:
import Home from "./pages/Home.js"

// Components:
import Header from "./components/Header.js"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home/>} />
      </Routes>
    </Router>
  );
}


export default App;

