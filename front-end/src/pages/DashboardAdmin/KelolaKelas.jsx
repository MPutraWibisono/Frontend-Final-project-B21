/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState, useEffect } from "react";
import { useFormik } from "formik";
import { TbFilter } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourse,
  getCategory,
  getChapter,
  getMaterial,
} from "../../redux/actions/courseActions";
import LayoutDashboard from "../../components/LayoutDashboard";
import Loading from "../../components/Loading";
import tableHead from "../../data/tableHeadKelola.json";
import CourseModal from "../../components/AdminModals/CourseModal";
import MaterialModal from "../../components/AdminModals/MaterialModal";
import ChapterModal from "../../components/AdminModals/ChapterModal";
import { toastNotify } from "../../libs/utils";
import { axiosInstance } from "../../libs/axios";
import CourseChoose from "../../components/AdminModals/CourseChoose";
import ChapterChoose from "../../components/AdminModals/ChapterChoose";
import CourseEdit from "../../components/AdminModals/CourseEdit";
import { useNavigate } from "react-router-dom";
import ChapterEdit from "../../components/AdminModals/ChapterEdit";
import MaterialChoose from "../../components/AdminModals/MaterialChoose";
import MaterialEdit from "../../components/AdminModals/MaterialEdit";

const KelolaKelas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState("1");
  const [tambah, setTambah] = useState("");
  const [edit, setEdit] = useState("");
  const [id, setId] = useState("");
  const [idChapter, setIdChapter] = useState("");
  const [idMaterial, setIdMaterial] = useState("");
  const dispatch = useDispatch();
  const { course, category, chapter, material } = useSelector(
    (state) => state.course
  );
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (user?.user?.role == "user") {
      navigate("/");
    }
  }, [user]);

  const [search, setSearch] = useState("");
  const [searchTemp, setSearchTemp] = useState("");

  useEffect(() => {
    dispatch(getCategory(setErrors, errors));
    dispatch(getChapter(setErrors, errors));
    dispatch(getMaterial(setErrors, errors));
  }, [dispatch, isOpen]);

  useEffect(() => {
    dispatch(getCourse(setErrors, errors, search));
  }, [dispatch, search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (edit != "") {
      const courses = course.filter((item) => item.id == id);
      const courseBefore = courses[0];
      formik.setFieldValue("name", courseBefore.name);
      formik.setFieldValue("price", courseBefore.price);
      formik.setFieldValue("modul", courseBefore.modul);
      formik.setFieldValue("rating", courseBefore.rating);
      formik.setFieldValue("description", courseBefore.description);
      formik.setFieldValue("author", courseBefore.author);
      formik.setFieldValue("group_url", courseBefore.groupUrl);
      formik.setFieldValue("level", courseBefore.level);
      formik.setFieldValue("type", courseBefore.type);
      formik.setFieldValue("category_id", courseBefore.categoryId);
      formik.setFieldValue("image", courseBefore.imageUrl);
      setImage(courseBefore.imageUrl);
      formik.setFieldValue("target", courseBefore.target);
    }
  }, [edit]);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      modul: "",
      rating: "",
      target: "",
      description: "",
      author: "",
      group_url: "",
      level: "",
      type: "",
      category_id: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("modul", values.modul);
      formData.append("rating", values.rating);
      formData.append("description", values.description);
      formData.append("author", values.author);
      formData.append("group_url", values.group_url);
      formData.append("level", values.level);
      formData.append("type", values.type);
      formData.append("category_id", values.category_id);
      formData.append("target[0]", values.target);

      try {
        const token = localStorage.getItem("token");
        if (tambah != "") {
          const res = await axiosInstance.post(
            "/api/v1/course/create",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toastNotify({
            type: "success",
            message: "Berhasil menambahkan kelas",
          });

          formik.resetForm();

          dispatch(getCourse(setErrors, errors, search));

          return res.data;
        } else if (edit != "") {
          const res = await axiosInstance.patch(
            `/api/v1/course/${id}`,
            {
              name: values.name,
              price: values.price,
              modul: values.modul,
              rating: values.rating,
              description: values.description,
              author: values.author,
              group_url: values.group_url,
              level: values.level,
              type: values.type,
              category_id: values.category_id,
              image: image,
              "target[0]": values.target,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toastNotify({
            type: "success",
            message: "Berhasil mengedit kelas",
          });
          return res.data;
        }
      } catch (error) {
        toastNotify({
          type: "error",
          message: error.response?.data?.error || "Gagal memperbarui kelas",
        });
      } finally {
        setLoading(false);
        setIsOpen(false);
        setTambah("");
        setEdit("");
      }
    },
  });

  const handleTambah = (e) => {
    setTambah(e);
    setIsOpen(true);
  };

  const handleEdit = (id, e) => {
    setEdit(e);
    setId(id);
    setIsOpen(true);
  };

  const handleTambah2 = (e) => {
    setIsOpen2(e);
  };

  const handleDeleteCourse = async (id) => {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.delete(`/api/v1/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toastNotify({
      type: "info",
      message: "Berhasil menghapus kelas",
    });

    dispatch(getCourse(setErrors, errors, search));

    return res.data;
  };

  const handleSetId = (value) => {
    setId(value);
  };

  const handleSetIdChap = (value) => {
    setIdChapter(value);
  };

  const handleSetIdMat = (value) => {
    setIdMaterial(value);
  };

  if (errors.isError) {
    return <h1 className="h-screen w-full">{errors.message}</h1>;
  }

  if (
    category.length === 0 &&
    course.length === 0 &&
    chapter.length === 0 &&
    material.length === 0
  ) {
    return <Loading />;
  }

  return (
    <LayoutDashboard noSearch>
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
        <form
          className="relative w-1/3"
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(searchTemp);
          }}
        >
          <input
            type="text"
            placeholder="Cari Kelas"
            className="input w-full input-bordered"
            value={searchTemp}
            onChange={(e) => setSearchTemp(e.target.value)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button
              type="submit"
              className="btn btn-square btn-sm group text-white bg-darkBlue05 hover:bg-darkBlue05/80 "
            >
              <BiSearchAlt className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Kelola Kelas</p>
          <div className="flex gap-3">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center btn btn-sm btn-primary rounded-full m-1"
              >
                <AiOutlinePlusCircle className="h-5 w-5 " />
                <p className="font-medium">Tambah</p>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    value={"Course"}
                    onClick={(e) => {
                      handleTambah(e.currentTarget.value);
                      setEdit("");
                      formik.resetForm();
                    }}
                  >
                    Course
                  </button>
                </li>
                <li>
                  <button
                    value={"Chapter"}
                    onClick={(e) => {
                      handleTambah(e.currentTarget.value);
                    }}
                  >
                    Chapter
                  </button>
                </li>
                <li>
                  <button
                    value={"Material"}
                    onClick={(e) => {
                      handleTambah(e.currentTarget.value);
                    }}
                  >
                    Material
                  </button>
                </li>
              </ul>
            </div>

            <button className="flex groupitems-center btn btn-sm btn-outline btn-primary rounded-full m-1">
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
            {course.length === 0 && search !== "" && (
              <tr>
                <td colSpan={7} className="text-center">
                  <p className="text-sm font-medium">Kelas tidak ditemukan</p>
                </td>
              </tr>
            )}
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
                    <div className="dropdown">
                      <div
                        tabIndex={1}
                        role="button"
                        onClick={() => setId(course?.id)}
                        className="btn btn-sm btn-primary rounded-full text-white"
                      >
                        Ubah
                      </div>
                      <ul
                        tabIndex={1}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button
                            value={"Course"}
                            onClick={(e) =>
                              handleEdit(course.id, e.currentTarget.value)
                            }
                          >
                            Course
                          </button>
                        </li>
                        <li>
                          <button
                            value={"Chapter"}
                            onClick={(e) =>
                              handleEdit(course.id, e.currentTarget.value)
                            }
                          >
                            Chapter
                          </button>
                        </li>
                        <li>
                          <button
                            value={"Material"}
                            onClick={(e) =>
                              handleEdit(course.id, e.currentTarget.value)
                            }
                          >
                            Material
                          </button>
                        </li>
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        handleDeleteCourse(course.id);
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
            setIsOpen2("1");
            setTambah("");
            setEdit("");
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
                  {tambah == "Course" && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-center leading-6 text-darkBlue05"
                      >
                        Tambah Course
                      </Dialog.Title>

                      <CourseModal
                        formik={formik}
                        loading={loading}
                        category={category}
                        setImage={setImage}
                      />
                    </>
                  )}
                  {tambah == "Chapter" && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-center leading-6 text-darkBlue05"
                      >
                        Tambah Chapter
                      </Dialog.Title>
                      {isOpen2 == "1" && (
                        <CourseChoose
                          onSetId={handleSetId}
                          course={course}
                          setIsOpen2={handleTambah2}
                        />
                      )}
                      {isOpen2 == "2" && (
                        <ChapterModal
                          setIsOpen2={handleTambah2}
                          id={id}
                          setIsOpen={setIsOpen}
                        />
                      )}
                    </>
                  )}
                  {tambah == "Material" && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-center leading-6 text-darkBlue05"
                      >
                        Tambah Material
                      </Dialog.Title>
                      {isOpen2 == "1" && (
                        <CourseChoose
                          onSetId={handleSetId}
                          course={course}
                          setIsOpen2={handleTambah2}
                        />
                      )}
                      {isOpen2 == "2" && (
                        <ChapterChoose
                          onSetIdChap={handleSetIdChap}
                          id={id}
                          chapter={chapter}
                          setIsOpen2={handleTambah2}
                        />
                      )}
                      {isOpen2 == "3" && (
                        <MaterialModal
                          setIsOpen2={handleTambah2}
                          idChapter={idChapter}
                          setIsOpen={setIsOpen}
                        />
                      )}
                    </>
                  )}
                  {edit == "Course" && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-center leading-6 text-darkBlue05"
                      >
                        Edit Course
                      </Dialog.Title>
                      <CourseEdit
                        formik={formik}
                        loading={loading}
                        category={category}
                        image={image}
                        setImage={setImage}
                      />
                    </>
                  )}
                  {edit == "Chapter" && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-center leading-6 text-darkBlue05"
                      >
                        Edit Chapter
                      </Dialog.Title>
                      {isOpen2 == "1" && (
                        <ChapterChoose
                          onSetIdChap={handleSetIdChap}
                          id={id}
                          chapter={chapter}
                          setIsOpen2={handleTambah2}
                        />
                      )}
                      {isOpen2 == "3" && (
                        <ChapterEdit
                          setIsOpen2={handleTambah2}
                          idChapter={idChapter}
                          setIsOpen={setIsOpen}
                          chapter={chapter}
                        />
                      )}
                    </>
                  )}
                  {edit == "Material" && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold text-center leading-6 text-darkBlue05"
                      >
                        Edit Material
                      </Dialog.Title>
                      {isOpen2 == "1" && (
                        <ChapterChoose
                          onSetIdChap={handleSetIdChap}
                          id={id}
                          chapter={chapter}
                          setIsOpen2={handleTambah2}
                        />
                      )}
                      {isOpen2 == "3" && (
                        <MaterialChoose
                          onSetIdMat={handleSetIdMat}
                          idChapter={idChapter}
                          material={material}
                          setIsOpen2={handleTambah2}
                        />
                      )}
                      {isOpen2 == "4" && (
                        <MaterialEdit
                          setIsOpen2={handleTambah2}
                          idMaterial={idMaterial}
                          idChapter={idChapter}
                          material={material}
                          setIsOpen={setIsOpen}
                        />
                      )}
                    </>
                  )}
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
