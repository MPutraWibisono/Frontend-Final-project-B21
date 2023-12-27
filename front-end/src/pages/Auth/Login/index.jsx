import { useState } from "react";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { Link } from "react-router-dom";
import logo4 from "../../../assets/images/logo4.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authActions";
import GoogleLogin from "../../Auth/GoogleLogin";

const LoginPage = () => {
  //useState untuk password
  const [passValue, setPassValue] = useState({
    password: "",
    showPass: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [token, navigate]);

  const onLogin = async (event) => {
    event.preventDefault();
    dispatch(login(Email, passValue.password, navigate));
    // dispatch(getUser());
  };
  //useState untuk Email
  const [Email, setEmail] = useState("");

  //handle onchange password
  const handlePass = (event) => {
    setPassValue({ ...passValue, password: event.target.value });
  };

  //buat ganti dari type password ke type text
  const toggleVisibility = () => {
    setPassValue({ ...passValue, showPass: !passValue.showPass });
  };
  // buat nyobain alert validasi
  // const Dummy = {
  //   Email: "coba1",
  //   password: "cobaan",
  // };
  //function buat bikin alert
  // const showAlert = (message, type = "info", duration = 1500) => {
  //   const tempatAlert = document.querySelector(".tempatAlert");
  //   const alertElement = document.createElement("div");
  //   alertElement.classList.add("custom-alert");
  //   alertElement.classList.add("text-white");
  //   alertElement.classList.add("rounded-xl");
  //   alertElement.classList.add("w-[250px]");
  //   alertElement.classList.add("text-center");
  //   alertElement.classList.add("py-2");
  //   alertElement.classList.add("px-5");
  //   alertElement.classList.add("text-xs");
  //   alertElement.classList.add("mx-auto");

  //   if (type === "success") {
  //     alertElement.classList.add("bg-alertGreen");
  //   } else if (type === "error") {
  //     alertElement.classList.add("bg-alertRed");
  //   }

  //   alertElement.textContent = message;
  //   tempatAlert.appendChild(alertElement);

  //   setTimeout(() => {
  //     alertElement.style.display = "none";
  //     tempatAlert.removeChild(alertElement);
  //   }, duration);
  // };

  // const inputEmailMerah = () => {
  //   const emailInput = document.querySelector("#emailInput");
  //   emailInput.classList.add("border-red-500");

  //   setTimeout(() => {
  //     emailInput.classList.remove("border-red-500");
  //   }, 3000);
  // };
  // const inputPassMerah = () => {
  //   const passInput = document.querySelector("#passInput");
  //   passInput.classList.add("border-red-500");

  //   setTimeout(() => {
  //     passInput.classList.remove("border-red-500");
  //   }, 3000);
  // };
  // const validasi = () => {
  //   if (Email === Dummy.Email && passValue.password !== Dummy.password) {
  //     inputPassMerah();
  //     showAlert("Password salah!", "error");
  //   } else if (Email === Dummy.Email && passValue.password === Dummy.password) {
  //     showAlert("Berhasil masuk", "success");
  //   } else if (Email !== Dummy.Email && passValue.password === Dummy.password) {
  //     inputEmailMerah();
  //     showAlert("Email tidak terdaftar!", "error");
  //   } else if (Email === "" && passValue.password === "") {
  //     showAlert("Email dan Password tidak boleh kosong!", "error");
  //     inputEmailMerah();
  //     inputPassMerah();
  //   } else {
  //     showAlert("Email tidak terdaftar atau Password salah!", "error");
  //     inputEmailMerah();
  //     inputPassMerah();
  //   }
  // };
  return (
    <div className=" flex flex-col lg:flex-row w-full min-h-screen mx-auto max-w-7xl lg:max-w-[96rem]">
      {/* Bagian Kiri */}
      <div className="bg-white w-full p-8 lg:p-16 flex items-center justify-center overflow-hidden">
        <div className="w-full sm:w-2/3 lg:w-2/3 text-black">
          <h1 className="font-bold text-[28px] text-darkGrayish lg:mb-12 text-center mb-6">
            Masuk
          </h1>
          <form onSubmit={onLogin}>
            {/* Email/No telp */}
            <div className="flex flex-col">
              <p className="float-left pb-2 font-medium">Email/No Telpon</p>
              <input
                type="text"
                name="Email"
                placeholder="Email atau Nomor telepon"
                id="emailInput"
                className="emailInput float-left border rounded-xl w-full p-2 text-black mb-4"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col">
              <div>
                <p className="float-left pb-2 font-medium">Password</p>
                <p className="float-right">
                  <Link
                    to="/auth/otp"
                    className="text-darkGrayish font-medium text-xs"
                  >
                    Lupa Password
                  </Link>
                </p>
              </div>
              <div className="relative">
                <input
                  type={passValue.showPass ? "text" : "password"}
                  name="password"
                  id="passInput"
                  placeholder="Password"
                  className="float-left border rounded-xl w-full p-2 text-black mb-6"
                  value={passValue.password}
                  onChange={handlePass}
                  required
                />
                <button
                  className="absolute right-3 top-1.5"
                  onClick={toggleVisibility}
                >
                  {!passValue.showPass ? (
                    <PiEye color="grey" size={30} />
                  ) : (
                    <PiEyeSlash color="grey" size={30} />
                  )}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              className="btn border-0 bg-pinkTone hover:bg-pinkTone/80 text-slate-100 self-center w-full"
              onClick={onLogin}
            >
              Masuk
            </button>
            <br />
          </form>

          <p className="text-black items-center text-center mt-6">
            Belum punya akun?{" "}
            <Link to="/auth/register" className="text-darkGrayish font-bold">
              Daftar di sini
            </Link>
          </p>
          <div className="d-flex gap-3 justify-content-evenly flex-wrap">
            <GoogleLogin buttonText={"Login with Google"} />
          </div>

          {/* div kosong buat tempat alert */}
          <div className="tempatAlert fixed bottom-6 lg:bottom-4 lg:left-[29%] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full lg:w-auto sm:bottom-2 "></div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="bg-paleOrange w-10/12 items-center justify-center hidden lg:flex">
        <Link to="/">
          <img
            src={logo4}
            alt="DemyU Course"
            className="mx-auto w-full"
            width={300}
            height={300}
          />
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
