/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import {
  IoPencilSharp,
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
import { getCourse, getHistory } from "../../redux/actions/courseActions";

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
  const { history, course } = useSelector((state) => state.course);
  const [order, setOrder] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getHistory(setErrors, errors));
    dispatch(getCourse(setErrors, errors));
  }, [dispatch]);

  useEffect(() => {
    if (history.length > 0) {
      const paid = history
        .filter((item) => item?.status == "PAID")
        .map((course) => course?.courseId);

      const unpaid = history
        .filter((item) => item?.status == "UNPAID")
        .map((course) => course?.courseId);

      const paidCourse = course
        .filter((item) => paid.includes(item?.id))
        .map((orderItem) => ({
          ...orderItem,
          status: "PAID",
        }));

      const unpaidCourse = course
        .filter((item) => unpaid.includes(item?.id))
        .map((orderItem) => ({
          ...orderItem,
          status: "UNPAID",
        }));

      const merge = [...unpaidCourse, ...paidCourse];
      setOrder(merge);
    }
  }, [course, history]);

  return (
    <>
      <div className="pt-20">
        {/* Header */}
        <div className="md:px-[100px] px-5 py-16 shadow-md bg-paleOrange">
          {/* LINK KEMBALI */}
          <Link
            to="/myclass"
            className="flex gap-5 lg:ml-20 relative top-[-40px]"
          >
            <ArrowLeftIcon className="w-5 font-extrabold " />
            <h1 className="font-bold">Kembali ke Beranda</h1>
          </Link>
        </div>

        <div className="sm:flex pb-5 items-start justify-center relative top-[-65px]">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-md flex flex-col w-full sm:w-3/4 border border-pinkTone">
            <div className="bg-darkGrayish text-white p-5 flex items-center justify-center rounded-t-lg">
              <h1 className="text-xl tracking-tight">Akun</h1>
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
                {history.length == 0 ? (
                  <>
                    <div className="text-center flex justify-center pt-10">
                      Ikuti kursusnya dulu Yuk!
                    </div>
                    <div className="w-full flex justify-center pt-3">
                      <Link to={"/myclass"} className="btn w-1/3">
                        LIHAT KURSUS
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {order.map((order, index) => (
                      <CardPurchase
                        key={index}
                        id={order.id}
                        image={order.imageUrl}
                        title={order.category.name}
                        rating={order.rating}
                        description={order.name}
                        instructor={order.author}
                        level={order.level}
                        modules={order.modul}
                        duration={order.totalDuration}
                        order={order.status}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
