import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MissionCard from "../../components/MissionCard/MissionCard";
import ErrorHandling from "../../components/ErrorHandling/ErrorHandling";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
import Loader from "../../components/Loader/Loader";
import { fetchData } from "./MissionOverviewSlice";
import { RootState, AppDispatch } from "../../app/store";
import { MissionData } from "../../utils/types";
import { statusOptions } from "../../utils/constants";
import "./MissionOverview.css";


const MissionOverview = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.missionOverview
  );

  const [search, setSearch] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const handleSelectStatus = (value: string) => {
    setSelectedStatus(value);
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      await dispatch(fetchData());
    };
    fetchDataAsync();
  }, [dispatch]);

  let filteredMissions: MissionData[] = [];
  if (data) {
    filteredMissions = data.filter((mission: MissionData) => {
      const isStatusMatch =
        selectedStatus === "" || mission.status === selectedStatus;
      const isSearchMatch = mission.missionName
        .toLowerCase()
        .includes(search.toLowerCase());
      return isStatusMatch && isSearchMatch;
    });
  }

  return (
    <main className="main">
      <div className="content">
        {!loading && (
          <>
            <h1 className="overview-title"> Your Launchpad to Space Exploration</h1>
            <div className="search-filter">
              <Search value={search} onChange={setSearch} />
              <Filter options={statusOptions} onSelect={handleSelectStatus} />
            </div>
          </>
        )}
        <div className="cards-wrapper">
          {loading && <Loader />}
          {!loading && error && <ErrorHandling />}
          {!loading && !error && filteredMissions.length === 0 && (
            <NoDataFound />
          )}
          {!loading &&
            !error &&
            filteredMissions.map((mission: MissionData, index: number) => (
              <MissionCard
                key={index}
                missionId={mission.id}
                status={mission.status}
                description={mission.description}
                missionName={mission.missionName}
                image={mission.mainImage}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default MissionOverview;
