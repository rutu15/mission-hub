import { useNavigate } from "react-router-dom";

import { getStatusClassName } from "../../utils/constants";
import "./MissionCard.css";


interface CardProps {
  status: string;
  description: string;
  missionName: string;
  image: string;
  missionId: number;
}

const MissionCard = ({
  status,
  description,
  missionName,
  image,
  missionId,
}: CardProps) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/mission/${missionId}`);
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-image">
        <img src={image} alt="Alt text" className="card-image" />
      </div>
      <div className="card-content">
        <div className="first">
          <div className="card-title">{missionName}</div>
          <div className={`card-status ${getStatusClassName(status)}`}>
            <span>{status}</span>
          </div>
        </div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};

export default MissionCard;
