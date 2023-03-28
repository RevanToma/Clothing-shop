import toast from "react-hot-toast";

export const ToastNotification = (
  message,
  success = false,
  duration = 1500
) => {
  const config = {
    style: {
      padding: "10px",
      width: "100%",
      color: success ? "#408029" : "#FF4B4B",
      fontSize: "1.2rem",
      fontWeight: "600",
      fontFamily: "Poppins",
    },

    position: "top-center",
    duration,
  };
  if (success) {
    toast.success(message, { ...config });
  } else {
    toast.error(message, { ...config });
  }
};

export default ToastNotification;
