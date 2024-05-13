import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NoDataFound from "../../components/NoDataFound/NoDataFound";
import Loader from "../../components/Loader/Loader";
import ErrorHandling from "../../components/ErrorHandling/ErrorHandling";
import { RootState, AppDispatch } from "../../app/store";
import LeftArrow from "../../assets/media/LeftArrow";
import { getStatusClassName } from "../../utils/constants";
import { ChecklistItem, MissionStatus } from "utils/types";
import {
  fetchMissionDetails,
  toggleChecklistItem,
} from "./MissionDetailsSlice";
import MissionMilestone from "./MissionMilestone/MissionMilestone";
import Checklist from "./Checklist/Checklist";
import "./MissionDetails.css";
import CountDown from "./Countdown/Countdown";
import InfoCards from "./InfoCards/InfoCards";


const MissionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.missionDetail
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMissionDetails(id));
    }
  }, [id, dispatch]);

  const handleToggle = (index: number) => {
    dispatch(toggleChecklistItem(index));
  };

  const isChecklistCompleted = data?.checklistItems.every(
    (item: ChecklistItem) => item.status === "Checked"
  );

  return (
    <main className="mission-container">
      <div className="mission-content">
        <div className="back-arrow" onClick={() => navigate("/")}>
          <LeftArrow />
        </div>
        {loading && <Loader />}
        {!loading && error && <ErrorHandling />}
        {!loading && !!!data && <NoDataFound />}
        {!loading && !error && data && (
          <>
            <div className="back-arrow" onClick={() => navigate("/")}>
              <LeftArrow />
            </div>
            {!loading &&
            !error &&
            data &&
            isChecklistCompleted &&
            data.status === MissionStatus.ReadyforLaunch ? (
              <div className="countdown-container">
                <CountDown data={data.steps} />
              </div>
            ) : (
              <>
                <div className="mission-sub-container">
                  <div className="mission-info">
                    <div className="mission-info-up">
                      <h2 className="mission-name">{data.missionName}</h2>
                      <span
                        className={`mission-status ${getStatusClassName(
                          data.status
                        )}`}
                      >
                        {data.status}
                      </span>
                    </div>
                    <div className="mission-info-down">
                      <p className="misson-description">{data.description}</p>
                    </div>
                  </div>

                  <img src={data.mainImage} alt={data.missionName} />
                  <div className="mission-cards">
                    <InfoCards
                      status={data.status}
                      title="Launch Date"
                      content={data.launchDate}
                    />
                    <InfoCards
                      status={data.status}
                      title="Expected Duration"
                      content={data.expectedDuration}
                    />
                    <InfoCards
                      status={data.status}
                      title="Current Locations"
                      content={data.currentLocation}
                    />

                    <InfoCards
                      status={data.status}
                      title="Trajectory"
                      content={data.trajectory}
                    />
                  </div>
                </div>
                <div className="mission-milestone">
                  <MissionMilestone data={data.milestones} />
                  <Checklist
                    checklistItems={data.checklistItems}
                    onToggle={handleToggle}
                    missionStatus={data.status}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default MissionDetails;
