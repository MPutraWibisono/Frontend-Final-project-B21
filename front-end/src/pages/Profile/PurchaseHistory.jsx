import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
  IoArrowBackSharp,
  IoSettingsOutline,
  IoCartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
// import CourseCard from "../../components/CourseCard/Card";
import CardPurchase from "../../components/CourseCard/CardPurchase";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getHistory } from "../../redux/actions/courseActions";
import { IoIosStar } from "react-icons/io";
import { RiBookLine, RiTimeFill } from "react-icons/ri";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());

    // Redirect to home page
    navigate("/");
  };

  return (
    <ul className="col-span-1 p-4 w-full sm:w-1/2">
      {/* Konten Sidebar */}
      <li
        style={{ marginTop: "2rem" }}
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
      >
        <Link to="/profile">
          <div className="flex items-center">
            <IoPencilSharp className="text-pinkTone mr-2" />
            <span>Profil Saya</span>
          </div>
        </Link>
      </li>
      <li
        style={{ marginTop: "2rem" }}
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
      >
        <Link to="/changepassword">
          <div className="flex items-center">
            <IoSettingsOutline className="text-pinkTone mr-2" />
            <span>Ubah Password</span>
          </div>
        </Link>
      </li>
      <li
        style={{ marginTop: "2rem" }}
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
      >
        <Link to="/purchasehistory">
          <div className="flex items-center">
            <IoCartOutline className="text-pinkTone mr-2" />
            <span>Riwayat Pembayaran</span>
          </div>
        </Link>
      </li>
      <li
        style={{ marginTop: "2rem" }}
        className="text-base sm:text-xs md:text-sm lg:text-1xl flex items-center justify-between  border-b"
      >
        <div className="flex items-center cursor-pointer" onClick={onLogout}>
          <IoLogOutOutline className="text-pinkTone mr-2" />
          <span>Keluar</span>
        </div>
      </li>
      <p className="text-xs sm:text-sm text-gray-500 mt-5 p-5 text-center">
        Versi 1.0.0
      </p>
    </ul>
  );
};

const PurchaseHistory = () => {
  const dispatch = useDispatch();
  // const { userId } = useParams();
  const { history } = useSelector((state) => state.course);

  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [order, setOrder] = useState([]);

  useEffect(() => {
    dispatch(getHistory(setErrors, errors));
  }, [dispatch]);
  // useEffect(() => {
  //   if (course.length > 0) {
  //     setCourse(course.find((item) => item.id == courseId));
  //   }
  // }, [course, courseId]);
  useEffect(() => {
    if (history.length > 0) {
      setOrder(history.filter((item) => item.isPaid === true));
    }
  }, [history]);

  if (history.length === 0) {
    return (
      <div className="pt-20 text-center">
        <h1 className="text-2xl font-semibold mt-5 py-2">
          Tidak ada riwayat Pembayaran
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="pt-20">
        {/* Header */}
        <Disclosure className="bg-paleOrange h-20">
          <div className="flex items-center w-full">
            <IoArrowBackSharp className="h-6 w-6 text-pinkTone mt-1" />
            <div className="text-1xl text-pinkTone mt-1 ml-2">
              <Link to="/">Kembali ke Beranda</Link>
            </div>
          </div>
        </Disclosure>

        {/* Main Container */}
        <div className="sm:flex pb-5 items-start justify-center">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col w-full sm:w-3/4 border border-pinkTone">
            <div className="bg-pinkTone text-white p-4 flex items-center justify-center rounded-t-lg">
              <h1 className="text-2xl tracking-tight">Akun</h1>
            </div>
            <div className="sm:flex">
              {/* Sidebar */}
              <Sidebar />

              {/* Content */}
              <div className="container mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-semibold mt-5 py-2">
                    Riwayat Pembayaran
                  </div>
                </div>

                {order?.map((order) => (
                  <CardPurchase
                    order={order}
                    key={order.id}
                    image={order?.image}
                    title={order?.category?.name}
                    rating={order?.rating}
                    description={order?.name}
                    instructor={order?.author}
                    level={order?.level}
                    modules={order?.modul}
                    duration={order?.durasi}
                    orderStatus={order?.status}
                  />
                ))}
                <div className=" overflow-hidden rounded-2xl bg-white text-slate-500 shadow-md shadow-slate-200 py-4">
                  <figure>
                    <img
                      src={order?.image}
                      alt="card image"
                      className="aspect-video w-full object-cover h-[100px]"
                    />
                  </figure>
                  <div className="px-4 py-2 sm:h-34 lg:h-36 h-36 flex flex-col content-start">
                    <div className="flex">
                      <h3 className="text-sm font-bold text-slate-700 w-4/5">
                        {order.title}
                      </h3>
                      <div className="ms-auto flex items-center text-xs">
                        <IoIosStar className="text-yellow-400 pe-1 min-w-fit" />
                        {order.rating}
                      </div>
                    </div>
                    <p className="text-xs font-normal text-slate-700 w-4/5 ">
                      {order.description}
                    </p>
                    <p className="text-xs text-slate-400">By {order.author}</p>
                    <div className="flex justify-between py-1 text-[10px] ">
                      <span className="text-center sm:flex sm:text-start items-center gap-1">
                        <RiBookLine className="text-darkGrayish w-full sm:w-fit text-center" />
                        <p>{order.modul} </p>
                      </span>
                      <span className="text-center sm:flex sm:text-start items-center gap-1">
                        <RiTimeFill className="text-darkGrayish w-full sm:w-fit text-center" />
                        <p>{order.durasi} </p>
                      </span>
                    </div>
                    <div className="mt-auto">
                      {order.status === "PAID" ? (
                        <div className="text-xs w-auto btn btn-xs sm:btn-sm inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-full bg-pinkTone px-4 font-medium tracking-wide text-white transition duration-300 hover:bg-pink focus:bg-darkMagenta focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                          {order.status}
                        </div>
                      ) : (
                        <Link to="/PaymentDetail ">
                          <button className="text-xs w-auto btn btn-xs sm:btn-sm inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-full bg-pinkTone px-4 font-medium tracking-wide text-white transition duration-300 hover:bg-pink focus:bg-darkMagenta focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                            Waiting for Payment
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/*<!-- End Basic blog card --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
