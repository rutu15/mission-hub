import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Milestone } from "../../../utils/types";
import { colors } from "../../../utils/constants";
import { getMilestoneStatusColor } from "../../../utils/constants";
import "./MissionMilestone.css";

interface MissionMilestoneProps {
  data: Milestone[];
}
const MissionMilestone = ({ data }: MissionMilestoneProps) => {
  return (
    <div className="milestone-container">
      <div className="milestone-title">
        <h1>Milestones Unlocked!</h1>
      </div>
      <VerticalTimeline>
        {data?.map((item: Milestone, index: number) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: colors.beigeWhite,
                color: colors.black,
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${colors.beigeWhite}`,
              }}
              dateClassName="milestone-date"
              date={item.date}
              iconStyle={{ background: colors.beigeWhite, color: colors.black }}
            >
              <div className="milestone-card">
                <h2 className="vertical-timeline-element-subtitle">
                  {item.name}
                </h2>
                <h3
                  className={`vertical-timeline-element-title ${getMilestoneStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </h3>
              </div>
              <p className="milestone-description">{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default MissionMilestone;
