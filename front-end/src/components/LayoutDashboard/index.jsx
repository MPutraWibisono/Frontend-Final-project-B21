/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";

const LayoutDashboard = ({ children, noSearch }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sidebar = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      title: "Kelola Kelas",
      path: "/admin/dashboard/kelola-kelas",
    },
  ];

  const onLogout = () => {
    dispatch(logout());

    // Redirect to login admin
    navigate("/admin/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <div className="w-[300px] fixed top-0 left-0 h-[100vh] bg-darkGrayish py-5">
        <img src={logo} alt="DemyU" className="w-[150px] mx-auto my-5" />
        {sidebar.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`w-full block py-3 px-10 ${
              isActive(item.path)
                ? "bg-pinkTone"
                : "hover:bg-pinkTone/60 transition-all"
            }`}
          >
            <p className="font-semibold text-white">{item.title}</p>
          </Link>
        ))}
        <button
          onClick={() => onLogout()}
          className="w-full py-3 px-10 hover:bg-pinkTone/60 transition-all"
        >
          <p className="font-semibold text-white text-start">Logout</p>
        </button>
      </div>
      <section className="ml-[300px]">
        <div className="w-full bg-paleOrange shadow-md flex items-center justify-between px-12 py-5">
          <h1 className="text-darkGrayish text-2xl">Hi, Admin!</h1>
          {!noSearch && (
            <div className="relative shadow rounded-md">
              <input type="text" placeholder="Cari" className="input w-72 " />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button className="btn btn-square btn-sm group text-white bg-darkGrayish hover:bg-darkGrayish/80">
                  <BiSearchAlt className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-5 mx-12">{children}</div>
      </section>
    </div>
  );
};

export default LayoutDashboard;
