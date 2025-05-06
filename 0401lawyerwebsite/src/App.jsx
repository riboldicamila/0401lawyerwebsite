import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
// import Nosotros from './pages/Nosotros';
// import Servicios from './pages/Servicios';
// import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
