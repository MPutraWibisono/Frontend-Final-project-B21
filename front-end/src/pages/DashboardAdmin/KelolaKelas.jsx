import { Fragment, useState, useEffect } from "react";
import { TbFilter } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlinePlusCircle } from "react-icons/ai";
import LayoutDashboard from "../../components/LayoutDashboard";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCourse } from "../../redux/actions/courseActions";
import Loading from "../../components/Loading";
import tableHead from "../../data/tableHead.json";

const KelolaKelas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     navigate("/admin/login");
  //   }
  // }, [token, navigate]);

  if (errors.isError) {
    return <h1 className="h-screen w-full">{errors.message}</h1>;
  }

  if (course.length === 0) {
    return <Loading />;
  }
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
          <p className="text-xl font-semibold">Kelola Kelas</p>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="flex items-center btn btn-sm btn-primary rounded-full"
            >
              <AiOutlinePlusCircle className="h-5 w-5 " />
              <p className="font-medium">Tambah</p>
            </button>
            <button className="flex groupitems-center btn btn-sm btn-outline btn-primary rounded-full ">
              <TbFilter className="h-5 w-5 " />
              <p className="font-medium">Filter</p>
            </button>
          </div>
        </div>
        <table className="table ">
          <thead className="bg-darkMagenta/20 text-black">
            <tr>
              {tableHead.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {course.map((course, index) => {
              return (
                <tr key={index} className="font-medium">
                  <td>{course.id}</td>
                  <td>{course.category.name}</td>
                  <td>{course.name}</td>
                  <td
                    className={`${
                      course.type === "PREMIUM"
                        ? "text-darkBlue05"
                        : "text-green-500"
                    }`}
                  >
                    {course.type}
                  </td>
                  <td>{course.level}</td>
                  <td>{course.price}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => {
                        alert(`Ubah ${course.id}`);
                      }}
                      className="btn btn-sm btn-primary rounded-full text-white"
                    >
                      Ubah
                    </button>
                    <button
                      onClick={() => {
                        alert(`Hapus ${course.id}`);
                      }}
                      className="btn btn-sm btn-error rounded-full text-white"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold text-center leading-6 text-darkBlue05"
                  >
                    Tambah Kelas
                  </Dialog.Title>
                  <form className="w-full flex flex-col gap-2 my-6">
                    <label className="form-control w-full relative">
                      <div className="label">
                        <span className="font-medium">Nama Kelas</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Nama Kelas"
                        className="input input-bordered w-full"
                        name="namaKelas"
                      />
                    </label>

                    <label className="form-control w-full relative">
                      <div className="label">
                        <span className="font-medium">Kategori</span>
                      </div>
                      <select
                        className="input input-bordered w-full"
                        name="kategori"
                      >
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Front-End Development">
                          Front-End Development
                        </option>
                        <option value="Back-End Development">
                          Back-End Development
                        </option>
                        <option value="Mobile Development">
                          Mobile Development
                        </option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="Cyber Security">Cyber Security</option>
                      </select>
                    </label>

                    <label className="form-control w-full relative">
                      <div className="label">
                        <span className="font-medium">Tipe Kelas</span>
                      </div>
                      <select
                        className="input input-bordered w-full"
                        name="tipeKelas"
                      >
                        <option value="Gratis">Gratis</option>
                        <option value="Premium">Premium</option>
                      </select>
                    </label>

                    <label className="form-control w-full relative">
                      <div className="label">
                        <span className="font-medium">Level</span>
                      </div>
                      <select
                        className="input input-bordered w-full"
                        name="level"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advance">Advance</option>
                      </select>
                    </label>

                    <label className="form-control w-full relative">
                      <div className="label">
                        <span className="font-medium">Harga</span>
                      </div>
                      <input
                        type="number"
                        placeholder="Harga"
                        className="input input-bordered w-full"
                        name="harga"
                      />
                    </label>

                    <label className="form-control w-full relative">
                      <div className="label">
                        <span className="font-medium">Materi</span>
                      </div>
                      <textarea
                        type="number"
                        placeholder="Materi"
                        className="textarea textarea-bordered"
                        name="materi"
                      ></textarea>
                    </label>

                    <label className="form-control w-full relative">
                      <div className="label">
                        <span className="font-medium">Upload Vidio</span>
                      </div>
                      <input
                        type="file"
                        className="file-input file-input-bordered w-full"
                      />
                    </label>
                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-primary w-full"
                      onClick={() => {
                        alert("hello");
                        setIsOpen(false);
                      }}
                    >
                      Simpan
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </LayoutDashboard>
  );
};

export default KelolaKelas;
