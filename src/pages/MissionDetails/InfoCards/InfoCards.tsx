import { getStatusClassName } from "../../../utils/constants";
import "./InfoCards.css";

interface InfoCardProps {
  title: string | null;
  content: string | null;
  status: string | null;
}

const InfoCard = ({ status, title, content }: InfoCardProps) => {
  return (
    <div className="info-card">
      <div className="inner-info-card">
        <div className={`info-bg ${getStatusClassName(status)}`}></div>
        <div className="info-title">{title}</div>
        <div className="info-description">{content}</div>
      </div>
    </div>
  );
};

export default InfoCard;
