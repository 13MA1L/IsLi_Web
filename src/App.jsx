import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Sortiment from "./pages/Sortiment.jsx";
import Projekte from "./pages/Projekte.jsx";
import Kontakt from "./pages/Kontakt.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sortiment" element={<Sortiment />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </>
  );
}