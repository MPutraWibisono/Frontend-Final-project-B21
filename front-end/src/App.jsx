import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./pages/Homepage";
import NavbarComponent from "./components/NavbarComponent";
import Kelas from "./pages/Kelas";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/kelas" element={<Kelas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
