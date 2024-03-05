import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StaffMember {
  id: number;
  name: string;
  email: string;
}

interface StaffState {
  staffData: StaffMember[];
  activeIndex: number | null;
}

const initialState: StaffState = {
  staffData: [],
  activeIndex: null,
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    addStaffMember(state, action: PayloadAction<StaffMember>) {
      state.staffData.push(action.payload);
      state.activeIndex = state.staffData.length - 1;
    },
    deleteStaffMember(state, action: PayloadAction<number>) {
      const indexToDelete = action.payload;
      state.staffData = state.staffData.filter(
        (member, index) => index !== indexToDelete
      );
      if (state.activeIndex === indexToDelete) {
        state.activeIndex = null;
      } else if (
        state.activeIndex !== null &&
        state.activeIndex > indexToDelete
      ) {
        state.activeIndex--;
      }
    },
    setActiveIndex(state, action: PayloadAction<number | null>) {
      state.activeIndex = action.payload;
    },
  },
});

export const { addStaffMember, deleteStaffMember, setActiveIndex } =
  staffSlice.actions;

export default staffSlice.reducer;
