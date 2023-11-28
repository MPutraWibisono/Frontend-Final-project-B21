import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Kelas from "./pages/Kelas";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Kelas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
