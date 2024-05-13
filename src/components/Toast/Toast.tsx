import { ToastContainer, Flip } from "react-toastify";
import DynamicContent from "components/DynamicContent/DynamicContent";
import "./Toast.css"

const Toast = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
        className="progress-bar"
       
      />
      <DynamicContent />
    </>
  );
};

export default Toast;
