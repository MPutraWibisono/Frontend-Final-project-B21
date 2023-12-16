import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Home";
import {
  ForgotOTP,
  ForgotPass,
  LoginPage,
  RegisterPage,
  RegisterOTP,
} from "./pages/Auth";
import CourseClass from "./pages/Dashboard/";
import { ChangePass, MyProfile, PurchaseHistory } from "./pages/Profile";
import Detail from "./pages/DetailPage";
import { Dashboard, KelolaKelas } from "./pages/DashboardAdmin";
import Payment from "./pages/Payment/PaymentDetail";
import PaymentSucces from "./pages/Payment/PaymentSucces";
import Notification from "./pages/Payment/Notification";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/class" element={<CourseClass />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/register/otp" element={<RegisterOTP />} />
        <Route path="/auth/resetpassword" element={<ForgotPass />} />
        <Route path="/auth/otp" element={<ForgotOTP />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/changepassword" element={<ChangePass />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard/kelola-kelas" element={<KelolaKelas />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/success" element={<PaymentSucces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
