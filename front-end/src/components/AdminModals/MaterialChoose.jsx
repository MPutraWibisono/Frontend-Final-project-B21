/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const MaterialChoose = ({ onSetIdMat, idChapter, material, setIsOpen2 }) => {
  const [materialIWant, setMaterialIWant] = useState([]);

  useEffect(() => {
    const materialEffect = material.filter(
      (item) => item.chapterId == idChapter
    );
    setMaterialIWant(materialEffect);
  }, [material]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const idMat = event.target.materialId.value;
    onSetIdMat(idMat);
    setIsOpen2("4");
  };

  return (
    <>
      <form className="w-full flex flex-col gap-2 my-6" onSubmit={handleSubmit}>
        <label className="form-control w-full relative">
          <div className="label">
            <span className="font-medium">Pilih Material</span>
          </div>
          <select
            className="input input-bordered w-full"
            id="materialId"
            name="materialId"
          >
            {materialIWant.map((material, index) => (
              <option value={material.id} key={index}>
                {material.name}
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

export default MaterialChoose;
