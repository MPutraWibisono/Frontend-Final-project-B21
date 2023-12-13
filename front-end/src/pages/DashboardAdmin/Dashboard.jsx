import { TbFilter } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import LayoutDashboard from "../../components/LayoutDashboard";

const Dashboard = () => {
  const tableHead = [
    "ID",
    "Kategori",
    "Kelas Premium",
    "Status",
    "Metode Pembayaran",
    "Tanggal Bayar",
  ];

  const tableBody = [
    {
      idUser: "johndoe123",
      category: "UI/UX Design",
      premiumClass: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      paymentMethod: "Credit Card",
      date: "21 Sep, 2023 at 2:00 AM",
    },
    {
      idUser: "johndoe123",
      category: "UI/UX Design",
      premiumClass: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      paymentMethod: "Credit Card",
      date: "21 Sep, 2023 at 2:00 AM",
    },
    {
      idUser: "johndoe123",
      category: "UI/UX Design",
      premiumClass: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      paymentMethod: "Credit Card",
      date: "21 Sep, 2023 at 2:00 AM",
    },
    {
      idUser: "johndoe123",
      category: "UI/UX Design",
      premiumClass: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      paymentMethod: "Credit Card",
      date: "21 Sep, 2023 at 2:00 AM",
    },
    {
      idUser: "johndoe123",
      category: "UI/UX Design",
      premiumClass: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      paymentMethod: "Credit Card",
      date: "21 Sep, 2023 at 2:00 AM",
    },
    {
      idUser: "johndoe123",
      category: "UI/UX Design",
      premiumClass: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      paymentMethod: "Credit Card",
      date: "21 Sep, 2023 at 2:00 AM",
    },
  ];

  return (
    <LayoutDashboard>
      <div className="grid grid-cols-3 gap-6 pt-3">
        <div className="bg-pink flex items-center justify-start p-6 rounded-xl gap-3">
          <div className="bg-white p-3 rounded-3xl">
            <LuUsers2 className="h-10 w-10 text-darkBlue05" />
          </div>
          <div className="text-white">
            <p className="text-2xl">450</p>
            <p className="text-xl font-semibold">Active Users</p>
          </div>
        </div>
        <div className="bg-pink flex items-center justify-start p-6 rounded-xl gap-3">
          <div className="bg-white p-3 rounded-3xl">
            <LuUsers2 className="h-10 w-10 text-customEmerald01" />
          </div>
          <div className="text-white">
            <p className="text-2xl">450</p>
            <p className="text-xl font-semibold">Active Class</p>
          </div>
        </div>
        <div className="bg-pink flex items-center justify-start p-6 rounded-xl gap-3">
          <div className="bg-white p-3 rounded-3xl">
            <LuUsers2 className="h-10 w-10 text-darkBlue05" />
          </div>
          <div className="text-white">
            <p className="text-2xl">450</p>
            <p className="text-xl font-semibold">Premium Class</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-10 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Status Pembayaran</p>
          <button className="flex items-center btn btn-sm btn-outline btn-primary rounded-full">
            <TbFilter className="h-6 w-6 " />
            <p className="font-medium">Filter</p>
          </button>
        </div>
        <table className="table ">
          <thead className="bg-darkMagenta/20 text-black">
            <tr>
              {tableHead.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((body, index) => {
              return (
                <tr key={index} className="font-medium">
                  <td>{body.idUser}</td>
                  <td>{body.category}</td>
                  <td>{body.premiumClass}</td>
                  <td
                    className={`${
                      body.status === "BELUM BAYAR"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {body.status}
                  </td>
                  <td>{body.paymentMethod}</td>
                  <td>{body.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </LayoutDashboard>
  );
};

export default Dashboard;
