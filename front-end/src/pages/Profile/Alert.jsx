import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Alert = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white px-4 py-2 rounded-md mt-4`}
      style={{ display: visible ? "block" : "none" }}
    >
      {message}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
