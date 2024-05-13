import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "redux";

import { MissionData } from "../../utils/types";
import { ChecklistItem } from "../../utils/types";

export interface MissionDetailsState {
  data: MissionData | null;
  loading: boolean;
  error: string | null;
}

const initialState: MissionDetailsState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchMissionDetails =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get<MissionData>(
        `https://missionhub-api-1.onrender.com/data/${id}`
      );
      dispatch(fetchMissionDetailsSuccess(response.data));
    } catch (error) {
      dispatch(fetchMissionDetailsFailure("Failed to load mission details"));
    }
  };

export const toggleChecklistItem =
  (index: number) => (dispatch: Dispatch, getState: any) => {
    const currentState = getState();
    const currentChecklistItems =
      currentState.missionDetail.data.checklistItems;
    const updatedChecklistItems = currentChecklistItems.map(
      (item: ChecklistItem, i: number) =>
        i === index
          ? {
              ...item,
              status: item.status === "unchecked" ? "Checked" : "unchecked",
            }
          : item
    );
    dispatch(updateChecklistItems(updatedChecklistItems));
  };

export const missionDetailsSlice = createSlice({
  name: "missionDetails",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    fetchMissionDetailsSuccess: (state, action: PayloadAction<MissionData>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchMissionDetailsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateChecklistItems: (state, action: PayloadAction<ChecklistItem[]>) => {
      if(state?.data) state.data.checklistItems = action.payload;
    },
  },
});

export const {
  setLoading,
  fetchMissionDetailsSuccess,
  fetchMissionDetailsFailure,
  updateChecklistItems,
} = missionDetailsSlice.actions;

export default missionDetailsSlice.reducer;
