import { MissionStatus } from "../../../utils/types";
import "./Checklist.css";

interface ChecklistItem {
  itemName: string;
  status: "Checked" | "unchecked";
}

interface ChecklistProps {
  checklistItems: ChecklistItem[];
  onToggle: (index: number) => void;
  missionStatus: string;
}

const Checklist = ({
  checklistItems,
  onToggle,
  missionStatus,
}: ChecklistProps) => {
  return (
    <div className="checklist-item">
      <div className="checklist-title">
        <h1> Spacefaring Assurance: Comprehensive Pre-Launch Systems Verification</h1>
      </div>
      
      {checklistItems.map((item: ChecklistItem, index: number) => (
        <div className="checkbox-wrapper" key={index}>
          <input
            id={item.itemName}
            type="checkbox"
            checked={item.status === "Checked"}
            disabled={
              missionStatus !== MissionStatus.ReadyforLaunch ||
              item.status === "Checked"
            }
            onChange={() => onToggle(index)}
          />
          <label htmlFor={item.itemName}>
            <div className="tick-mark"></div>
          </label>
          <span className="lable-name">{item.itemName}</span>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
