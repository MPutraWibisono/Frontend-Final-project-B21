/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";
import {
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
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Protected, ProtectedAdmin } from "./components/Protected";
import { NoAccessToken, NoAccessTokenAdmin } from "./components/NoAccessToken";
import NotFound from "./pages/NotFound";

const NavFoot = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <NavFoot>
                  <NoAccessToken>
                    <Homepage />
                  </NoAccessToken>
                </NavFoot>
              }
            />
            <Route
              path="/class"
              element={
                <NavFoot>
                  <NoAccessToken>
                    <CourseClass />
                  </NoAccessToken>
                </NavFoot>
              }
            />
            <Route
              path="/myclass"
              element={
                <NavFoot>
                  <Protected>
                    <MyClass />
                  </Protected>
                </NavFoot>
              }
            />
            <Route
              path="/details/:courseId"
              element={
                <NavFoot>
                  <Detail />
                </NavFoot>
              }
            />
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
              path="/auth/resetpassword"
              element={
                <NoAccessToken>
                  <ForgotPass />
                </NoAccessToken>
              }
            />
            <Route
              path="/profile"
              element={
                <NavFoot>
                  <Protected>
                    <MyProfile />
                  </Protected>
                </NavFoot>
              }
            />
            <Route
              path="/notifications"
              element={
                <NavFoot>
                  <Protected>
                    <Notification />
                  </Protected>
                </NavFoot>
              }
            />
            <Route
              path="/changepassword"
              element={
                <NavFoot>
                  <Protected>
                    <ChangePass />
                  </Protected>
                </NavFoot>
              }
            />
            <Route
              path="/purchasehistory"
              element={
                <NavFoot>
                  <Protected>
                    <PurchaseHistory />
                  </Protected>
                </NavFoot>
              }
            />
            <Route
              path="/admin/login"
              element={
                <NoAccessTokenAdmin>
                  <LoginAdmin />
                </NoAccessTokenAdmin>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedAdmin>
                  <Dashboard />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/admin/dashboard/kelola-kelas"
              element={
                <ProtectedAdmin>
                  <KelolaKelas />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/payment"
              element={
                <NavFoot>
                  <Protected>
                    <Payment />
                  </Protected>
                </NavFoot>
              }
            />
            <Route
              path="/payment/success"
              element={
                <NavFoot>
                  <Protected>
                    <PaymentSucces />
                  </Protected>
                </NavFoot>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
