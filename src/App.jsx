import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import InternshipPage from "./Components/InternshipPage";
import Navbar from "./Components/Navbar";
import Graduate from "./Components/Graduate";
import Student from "./Components/Student";
import Graphic from "./Components/Graphic";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internshipPage" element={<InternshipPage />} />
     <Route path="/graduate" element={<Graduate/>}/>
     <Route path="/student" element={<Student/>}/>
     <Route path="/graphic" element={<Graphic/>}/>
      </Routes>
    </>
  );
}

export default App;
