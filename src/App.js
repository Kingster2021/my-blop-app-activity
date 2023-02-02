import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";
import "./css/style.css"
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
// import Main from "./pages/layout/Main";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="projects" element={<Project />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App;
