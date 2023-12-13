import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Home/Homepage";
import {
  ForgotOTP,
  ForgotPass,
  LoginPage,
  RegisterPage,
  RegisterOTP,
} from "./pages/Auth";
import CourseClass from "./pages/Dashboard/";
import {
  Account,
  ChangePass,
  MyProfile,
  PurchaseHistory,
} from "./pages/Profile";
import Detail from "./pages/DetailPage/Detail";
import { Dashboard, KelolaKelas } from "./pages/DashboardAdmin";

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
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/changepassword" element={<ChangePass />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/kelola-kelas" element={<KelolaKelas />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
