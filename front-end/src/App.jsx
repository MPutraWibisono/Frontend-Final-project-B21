import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";
import {
  ForgotOTP,
  ForgotPass,
  LoginPage,
  RegisterPage,
  RegisterOTP,
  EmailInput,
} from "./pages/Auth";
import CourseClass from "./pages/Dashboard/CourseClass";
import MyClass from "./pages/Dashboard/MyClass";
import { ChangePass, MyProfile, PurchaseHistory } from "./pages/Profile";
import Detail from "./pages/DetailPage";
import { Dashboard, KelolaKelas, LoginAdmin } from "./pages/DashboardAdmin";
import Payment from "./pages/Payment/PaymentDetail";
import PaymentSucces from "./pages/Payment/PaymentSucces";
import Notification from "./pages/Payment/Notification";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Navigate } from "react-router-dom";
import Protected from "./components/Protected";
import NoAccessToken from "./components/NoAccessToken";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/class"
            element={
              <NoAccessToken>
                <CourseClass />
              </NoAccessToken>
            }
          />
          <Route
            path="/myclass"
            element={
              <Protected>
                <MyClass />
              </Protected>
            }
          />
          <Route
            path="/class/:category"
            element={
              <NoAccessToken>
                <CourseClass />
              </NoAccessToken>
            }
          />
          <Route path="/details/:courseId" element={<Detail />} />
          <Route
            path="/auth/login"
            element={
              <NoAccessToken>
                <LoginPage />
              </NoAccessToken>
            }
          />
          <Route
            path="/auth/register"
            element={
              <NoAccessToken>
                <RegisterPage />
              </NoAccessToken>
            }
          />
          <Route
            path="/auth/otp"
            element={
              <NoAccessToken>
                <RegisterOTP />
              </NoAccessToken>
            }
          />
          <Route
            path="/auth/forgot-password"
            element={
              <NoAccessToken>
                <EmailInput />
              </NoAccessToken>
            }
          />
          <Route
            path="/auth/forgot-otp"
            element={
              <NoAccessToken>
                <ForgotOTP />
              </NoAccessToken>
            }
          />
          <Route
            path="/auth/reset-password"
            element={
              <NoAccessToken>
                <ForgotPass />
              </NoAccessToken>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <MyProfile />
              </Protected>
            }
          />
          <Route
            path="/notifications"
            element={
              <Protected>
                <Notification />
              </Protected>
            }
          />
          <Route
            path="/changepassword"
            element={
              <Protected>
                <ChangePass />
              </Protected>
            }
          />
          <Route
            path="/purchasehistory"
            element={
              <Protected>
                <PurchaseHistory />
              </Protected>
            }
          />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/dashboard/kelola-kelas"
            element={<KelolaKelas />}
          />
          <Route
            path="/payment"
            element={
              <Protected>
                <Payment />
              </Protected>
            }
          />
          <Route
            path="/payment/success"
            element={
              <Protected>
                <PaymentSucces />
              </Protected>
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
