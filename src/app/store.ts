import { configureStore } from '@reduxjs/toolkit';
import missionOverviewReducer  from "../pages/MissionOverview/MissionOverviewSlice";
import missionDetailReducer from "../pages/MissionDetails/MissionDetailsSlice"


export const store = configureStore({
  reducer: {
    missionOverview: missionOverviewReducer,
    missionDetail: missionDetailReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
