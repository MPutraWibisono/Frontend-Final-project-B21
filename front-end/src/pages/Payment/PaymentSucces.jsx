/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import gambarBayar from "../../assets/images/berhasilBayar.svg";

const PembayaranSukses = () => {
  const [id, setId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("id")) {
      const id = localStorage.getItem("id");
      setId(id);
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("id");
  };

  return (
    <div className="pt-20">
      {/* NOTIFIKASI BERHASIL PEMBAYARAN */}
      <div className="md:px-[100px] px-5 py-6 shadow-md">
        {/* LINK KEMBALI */}
        <div className="bg-alertGreen mx-auto px-5 py-3 rounded-xl md:w-[800px] mt-2">
          <h1 className="text-center text-white font-bold md:text-[16px] text-[12px]">
            Terimakasih atas pembayaran transaksi
          </h1>
        </div>
      </div>

      {/* MAIN */}
      <div className=" items-center w-full text-center mb-10">
        <h1 className="font-bold text-darkGrayish text-[64px]">Selamat!</h1>
        <img
          src={gambarBayar}
          width={200}
          height={200}
          alt="gambar shopping cart"
          className="mx-auto"
        />

        <h2 className="font-bold mt-3 md:text-[16px] text-[14px]">
          Transaksi pembayaran kelas premium berhasil!
        </h2>
        <p className="mb-10 md:text-[14px] text-[12px] font-bold">
          E-receipt telah dikirimkan ke email.
        </p>

        <button
          href=""
          className="bg-pinkTone text-white px-[100px] py-2 mb-10 rounded-[15px]"
        >
          <Link
            to={`/details/${id}`}
            onClick={() => handleDelete()}
            className="font-bold"
          >
            Mulai Belajar
          </Link>
        </button>
        <Link
          to="/myclass"
          onClick={() => handleDelete()}
          className="font-semibold text-creame05"
        >
          <h3>Kembali Ke Beranda</h3>
        </Link>
      </div>
    </div>
  );
};

export default PembayaranSukses;
