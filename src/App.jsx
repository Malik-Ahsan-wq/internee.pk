import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import InternshipPage from "./Components/InternshipPage";
import Navbar from "./Components/Navbar";
import Graduate from "./Components/Graduate";
import Student from "./Components/Student";
import Graphic from "./Components/Graphic";
import Portal from "./Components/Portal";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internshipPage" element={<InternshipPage />} />
        <Route path="/graduate" element={<Graduate />} />
        <Route path="/student" element={<Student />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/portal" element={<Portal />} />
      
      </Routes>
    </>
  );
}

export default App;
