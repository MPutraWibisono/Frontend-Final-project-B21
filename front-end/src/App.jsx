import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Kelas from "./pages/Kelas";
import KelasPremium from "./pages/KelasPremium";
import KelasGratis from "./pages/KelasGratis";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Kelas />} />
        <Route path="/kelasPremium" element={<KelasPremium />} />
        <Route path="/kelasGratis" element={<KelasGratis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
