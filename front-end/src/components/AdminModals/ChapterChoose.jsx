/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ChapterChoose = ({ onSetIdChap, id, chapter, setIsOpen2 }) => {
  const [chapterIWant, setChapterIWant] = useState([]);

  useEffect(() => {
    const chapterEffect = chapter.filter((item) => item.courseId == id);
    setChapterIWant(chapterEffect);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const idChap = event.target.chapterId.value;
    onSetIdChap(idChap);
    setIsOpen2("3");
  };

  return (
    <>
      <form className="w-full flex flex-col gap-2 my-6" onSubmit={handleSubmit}>
        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Pilih Chapter</span>
          </div>
          <select
            className="input input-bordered w-full"
            id="chapterId"
            name="chapterId"
          >
            {chapterIWant.map((chapter, index) => (
              <option value={chapter.id} key={index}>
                {chapter.name}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Lanjut
          </button>
        </div>
      </form>
    </>
  );
};

export default ChapterChoose;
