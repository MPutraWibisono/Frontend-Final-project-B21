import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavbarComponent from "./components/NavbarComponent";
import CourseClass from "./pages/CourseClass";
import FreeClass from "./pages/FreeClass";
import PremiumClass from "./pages/PremiumClass";
import { LoginPage, RegisterOTP, RegisterPage } from "./pages/Auth";
import ForgotPass from "./pages/Auth/ForgotPass";
import ForgotOTP from "./pages/Auth/ForgotOTP";
import PaymentDetails from "./pages/PaymentDetails";
import PaymentSucces from "./pages/PaymentSucces";
import Notification from "./pages/Notification";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/class" element={<CourseClass />} />
        <Route path="/premium" element={<PremiumClass />} />
        <Route path="/free" element={<FreeClass />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/register/otp" element={<RegisterOTP />} />
        <Route path="/auth/resetpassword" element={<ForgotPass />} />
        <Route path="/auth/otp" element={<ForgotOTP />} />
        <Route path="/payment" element={<PaymentDetails />} />
        <Route path="/paymentsucces" element={<PaymentSucces />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
