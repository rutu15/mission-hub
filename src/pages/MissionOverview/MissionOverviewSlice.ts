import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MissionData } from "../../utils/types";
import axios from "axios";
import { Dispatch } from "redux";

export interface MissionOverviewState {
  data: MissionData[];
  loading: boolean;
  error: string | null;
}

const initialState: MissionOverviewState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get<MissionData[]>(
      "https://missionhub-api-1.onrender.com/data"
    ); 
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure("Failed to load data"));
  }
};

export const missionOverviewSlice = createSlice({
  name: "missionOverviewData",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    fetchDataSuccess: (state, action: PayloadAction<MissionData[]>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, fetchDataSuccess, fetchDataFailure } =
  missionOverviewSlice.actions;

export default missionOverviewSlice.reducer;
