/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CourseCard from "../../components/CourseCard/Card";
import filtered from "../../data/filter.json";
import { IoSearch } from "react-icons/io5";
// import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getCourse } from "../../redux/actions/courseActions";
import Loading from "../../components/Loading";
import FilterSection from "../../components/FilterSection";
import { useSearchParams } from "react-router-dom";

const CourseClass = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [filterOptions, setFilterOptions] = useState(filtered);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const dispatch = useDispatch();
  const { course, category } = useSelector((state) => state.course);
  // const { category } = useParams();
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors));
    dispatch(getCategory(setErrors));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var i = 1;
  useEffect(() => {
    if (i == 1) {
      const cat = category.find((item) => item.id == categoryId);
      handleCheckboxChange("Kategori", cat?.name);
      i += 1;
    }
  }, []);

  const handleCheckboxChange = (sectionTitle, optionLabel) => {
    setFilterOptions((prevOptions) =>
      prevOptions.map((section) =>
        section.title === sectionTitle
          ? {
              ...section,
              options: section.options.map((option) =>
                option.label === optionLabel
                  ? { ...option, checked: !option.checked }
                  : sectionTitle === "Filter"
                  ? { ...option, checked: false }
                  : option
              ),
            }
          : section
      )
    );
  };

  // Handle pencarian berdasarkan query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Mereset filter
  const resetFilters = () => {
    setFilterOptions(filtered);
  };

  const handleDeleteFilter = () => {
    resetFilters();
  };

  const handleClassType = (e) => {
    setSelectedFilter(e);
  };

  const filteredClasses = course.filter((course) => {
    // filter berdasarkan kelas dan kategori yang dipilih
    const isCategorySelected = filterOptions[1].options.some(
      (category) => category.checked
    );

    // filter berdasarkan kategori yang dipilih
    if (isCategorySelected) {
      const selectedCategories = filterOptions[1].options
        .filter((category) => category.checked)
        .map((category) => category.label.toLowerCase());

      if (!selectedCategories.includes(course?.category?.name.toLowerCase())) {
        return false;
      }
    }

    // filter berdasarkan jenis kelas Premium/Gratis
    if (
      selectedFilter !== "All" ||
      selectedFilter !== "Progress" ||
      selectedFilter !== "Selesai"
    ) {
      if (
        (selectedFilter === "Premium" && course.type === "FREE") ||
        (selectedFilter === "Gratis" && course.type === "PREMIUM")
      ) {
        return false;
      }
    }
    // filter berdasarkan level kesulitan yang dipilih
    const isLevelSelected = filterOptions[2].options.some(
      (level) => level.checked
    );

    if (isLevelSelected) {
      const selectedLevel = filterOptions[2].options
        .filter((level) => level.checked)
        .map((level) => level.label.toLowerCase());

      if (!selectedLevel.includes(course?.level.toLowerCase())) {
        return false;
      }
    }

    if (searchQuery) {
      const courseName = course?.name?.toLowerCase();
      const searchLower = searchQuery.toLowerCase();

      if (!(courseName && courseName.includes(searchLower))) {
        return false;
      }
    }

    return true;
  });

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (course.length === 0) {
    return <Loading />;
  }

  return (
    <div className="bg-paleOrange text-white pt-20">
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/4 overflow-hidden rounded text-black lg:mr-4">
          <div className="text-3xl font-bold text-black my-7 text-center lg:text-start">
            Topik Kelas
          </div>
          <div className="lg:hidden collapse bg-white collapse-plus">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Pilih Filter
            </div>
            <div className="collapse-content container mx-auto px-4 flex flex-col space-y-4 bg-white lg:h-fit rounded-xl">
              {/* hidden md:block */}
              {filterOptions.map((filter) => (
                <FilterSection
                  key={filter.title}
                  {...filter}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
              <button
                onClick={handleDeleteFilter}
                className="text-sm font-semibold leading-6 text-red-500"
              >
                Hapus Filter
              </button>
            </div>
          </div>
          <div className="hidden lg:block container mx-auto p-4 flex flex-col space-y-4 bg-white lg:h-fit rounded-xl border border-slate-200 ">
            {/* hidden md:block */}
            {filterOptions.map((filter) => (
              <FilterSection
                key={filter.title}
                {...filter}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
            <div className="w-full flex justify-center">
              <button
                onClick={handleDeleteFilter}
                className="text-sm font-semibold leading-6 text-red-500"
              >
                Hapus Filter
              </button>
            </div>
          </div>
        </div>
        <div className="container flex flex-col justify-between">
          <div>
            <div className="flex items-center my-4 mx-auto md:mx-0 md:ms-auto justify-end">
              <div className="relative flex items-center me-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Cari Kelas..."
                  className="p-3 px-6 pr-14 border border-pinkTone outline-0 text-black rounded-2xl text-sm"
                />
                <div className="absolute right-2 ">
                  <IoSearch className="h-6 w-6 text-pinkTone me-3" />
                </div>
              </div>
            </div>
            <div className="mx-auto p-4 flex flex-col">
              <div className="flex justify-center space-x-4 mb-4 overflow-x-auto py-3 ps-16">
                <button
                  value={"All"}
                  onClick={(e) => handleClassType(e.currentTarget.value)}
                  className={` inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide  transition-[width] duration-300 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none  ${
                    selectedFilter === "All"
                      ? "w-64 bg-pink hover:bg-pink text-white"
                      : "w-32 bg-pinkTone hover:bg-pink/60 text-white"
                  }`}
                >
                  <span>All</span>
                </button>
                <button
                  value={"Premium"}
                  onClick={(e) => handleClassType(e.currentTarget.value)}
                  className={` inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide  transition-[width] duration-300 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none  ${
                    selectedFilter === "Premium"
                      ? "w-64 bg-pink hover:bg-pink text-white"
                      : "w-32 bg-pinkTone hover:bg-pink/60 text-white"
                  }`}
                >
                  <span>Kelas Premium</span>
                </button>
                <button
                  value={"Gratis"}
                  onClick={(e) => handleClassType(e.currentTarget.value)}
                  className={` inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide  transition-[width] duration-300 rounded-full focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:border-pinkTone disabled:bg-pinkTone disabled:shadow-none  ${
                    selectedFilter === "Gratis"
                      ? "w-64 bg-pink hover:bg-pink text-white"
                      : "w-32 bg-pinkTone hover:bg-pink/60 text-white"
                  }`}
                >
                  <span>Kelas Gratis</span>
                </button>
              </div>

              <div className="flex flex-row flex-wrap justify-around gap-5 p-2">
                {filteredClasses.map((course) => (
                  <div
                    className="sm:w-[270px] lg:w-[290px] xl:w-[270px] w-full"
                    key={course?.id}
                  >
                    <CourseCard
                      id={course?.id}
                      image={course?.imageUrl}
                      title={course?.category?.name}
                      rating={course?.rating}
                      description={course?.name}
                      instructor={course?.author}
                      level={course?.level}
                      modules={course?.modul}
                      duration={course?.totalDuration}
                      type={course?.type}
                      price={course?.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="join self-center ">
            <button className="join-item btn text-white bg-pinkTone col-start-3">
              Previous
            </button>
            <button className="join-item btn text-white bg-pinkTone">
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseClass;
