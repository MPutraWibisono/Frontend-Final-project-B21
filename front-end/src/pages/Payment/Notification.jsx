import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotif } from "../../redux/actions/notifActions";
import Loading from "../../components/Loading";

const Notifikasi = () => {
  const dispatch = useDispatch();
  const { notifikasi } = useSelector((state) => state.notif);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(getNotif());
  }, [dispatch]);

  const TimeChanger = (time) => {
    const inputDate = new Date(time);

    const options = {
      year: "numeric",
      month: "long", // menggunakan 'long' untuk mendapatkan nama bulan
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };

    const formattedDateTime = inputDate.toLocaleDateString("id-ID", options);
    return formattedDateTime;
  };

  if (notifikasi.length === 0) {
    return <Loading />;
  }

  return (
    <div className="pt-20">
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
      {/* NOTIFIKASI  */}
      <div>
        <div className=" flex flex-col md:w-[70vw] w-[80vw] mx-auto rounded-[20px] shadow-2xl relative top-[-65px]">
          <div className="text-center bg-darkGrayish text-white p-5 rounded-t-[20px]">
            <h1 className="text-xl tracking-tight">Notifikasi</h1>
          </div>
          <div className="h-[300px] md:p-10 p-2 flex flex-col-reverse justify-end">
            {/* tulisan Notifikasi */}
            {notifikasi.slice(-5).map((item, index) => (
              <div className="flex justify-between mt-2" key={index}>
                {/* isi content */}
                <div className="flex gap-5 leading-snug">
                  {/* logo Bell */}
                  <div className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] rounded-full bg-darkGrayish relative flex-shrink-0 mt-1">
                    <BellIcon className="text-white md:w-[15px] w-[10px] mx-auto absolute top-[2px] left-[2.5px]" />
                  </div>
                  {/* Judul */}
                  <div>
                    <h1 className="font-bold text-darkGrayish ">
                      {item?.title}
                    </h1>
                    {/* Berita */}
                    <h2 className="font-bold text-[10px]">
                      {item?.description}
                    </h2>
                  </div>
                </div>
                {/* tanggal */}
                <div className="flex flex-shrink-0 gap-1">
                  <p className="text-[10px] opacity-70 flex-shrink-0 text-darkRed">
                    {TimeChanger(item?.createdAt)}
                  </p>
                  <div className="w-[5px] h-[5px] rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifikasi;
