/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import { TbFilter } from "react-icons/tb";
import LayoutDashboard from "../../components/LayoutDashboard";
import tableHead from "../../data/tableHead.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/actions/courseActions";
import { getUsers } from "../../redux/actions/authActions";
import AdminActive from "../../components/AdminActive";
import { getAllOrder } from "../../redux/actions/paymentActions";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.profile);
  const { users } = useSelector((state) => state.auth);
  const { order } = useSelector((state) => state.payment);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getCourse(setErrors, errors));
    dispatch(getUsers());
    dispatch(getAllOrder());
  }, [dispatch, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user?.user?.role == "user") {
      navigate("/");
    }
  }, [user]);

  const TimeChanger = (time) => {
    const inputDate = new Date(time);

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };

    const formattedDateTime = inputDate.toLocaleDateString("id-ID", options);
    return formattedDateTime;
  };

  return (
    <LayoutDashboard noSearch>
      <AdminActive course={course} users={users} />
      <div className="overflow-x-auto mt-10 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Status Pembayaran</p>
          {/* <button className="flex items-center btn btn-sm btn-outline btn-primary rounded-full">
            <TbFilter className="h-6 w-6 " />
            <p className="font-medium">Filter</p>
          </button> */}
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
            {order.map((body, index) => (
              <>
                {course
                  .filter((item) => item.id === body.courseId)
                  .map((body2) => (
                    <tr key={index} className="font-medium">
                      <td className="text-center">{body.userId}</td>
                      <td>{body2?.category?.name}</td>
                      <td>{body2?.name}</td>
                      <td
                        className={`font-semibold ${
                          body.status === "UNPAID"
                            ? "text-red-500 "
                            : "text-green-500"
                        }`}
                      >
                        {body.status}
                      </td>
                      <td className="text-center">
                        {body2.type == "FREE" || body.status == "UNPAID"
                          ? "-"
                          : body.payment_method}
                      </td>
                      <td>{TimeChanger(body.updatedAt)}</td>
                    </tr>
                  ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutDashboard>
  );
};

export default Dashboard;
