import { createSlice } from "@reduxjs/toolkit";
import { addDays } from "date-fns";

const initialState = {
  data: [],
  filteredData: [],
  dateObject: [
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ],
  statusFilter: [],
  machineFilterData: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setDate(state, action) {
      state.dateObject = [action.payload];
    },

    setMachineFilterData(state, action) {
      const payload = action.payload;
      const index = state.statusFilter.indexOf(payload);

      if (index === -1) {
        state.statusFilter.push(payload);
      } else {
        state.statusFilter.splice(index, 1);
      }
    },
    setStatusFilter(state, action) {
      const payload = action.payload;
      const index = state.statusFilter.indexOf(payload);
      index === -1 ? state.statusFilter.push(payload) : state.statusFilter.splice(index, 1);
    },
    filterData(state, action) {
      const { status } = action.payload;
      state.filteredData = state.data.filter((item) => item.status === status);
    },
    resetState(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setData,
  setDate,
  filterData,
  setStatusFilter,
  resetState,
  setMachineFilterData,
} = dataSlice.actions;

export default dataSlice.reducer;
