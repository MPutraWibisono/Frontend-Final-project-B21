/* eslint-disable react/prop-types */
import { LuUsers2 } from "react-icons/lu";

const AdminActive = ({ course, users }) => {
  return (
    <div className="grid grid-cols-3 gap-6 pt-3">
      <div className="bg-pink flex items-center justify-start p-6 rounded-xl gap-3">
        <div className="bg-white p-3 rounded-3xl">
          <LuUsers2 className="h-10 w-10 text-darkBlue05" />
        </div>
        <div className="text-white">
          <p className="text-2xl">
            {users.filter((user) => user.role === "user").length}
          </p>
          <p className="text-xl font-semibold">Active Users</p>
        </div>
      </div>
      <div className="bg-pink flex items-center justify-start p-6 rounded-xl gap-3">
        <div className="bg-white p-3 rounded-3xl">
          <LuUsers2 className="h-10 w-10 text-customEmerald01" />
        </div>
        <div className="text-white">
          <p className="text-2xl">{course.length}</p>
          <p className="text-xl font-semibold">Active Class</p>
        </div>
      </div>
      <div className="bg-pink flex items-center justify-start p-6 rounded-xl gap-3">
        <div className="bg-white p-3 rounded-3xl">
          <LuUsers2 className="h-10 w-10 text-darkBlue05" />
        </div>
        <div className="text-white">
          <p className="text-2xl">
            {course.filter((course) => course.type === "PREMIUM").length}
          </p>
          <p className="text-xl font-semibold">Premium Class</p>
        </div>
      </div>
    </div>
  );
};

export default AdminActive;
