import { useNavigate } from "react-router-dom";

import "./PageNotFound.css";
import LeftArrow from "assets/media/LeftArrow";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <span className="back-arrow-icon" onClick={() => navigate("/")}>
        <LeftArrow />
      </span>
      <div className="not-found">Page Not Found!</div>
    </div>
  );
};

export default PageNotFound;
