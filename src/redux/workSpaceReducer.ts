import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

type Workspace = {
  id: string
  name: string
  startTime: string
  endTime: string
  weekDays: string[]
}

const initialState: Workspace[] = []

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    saveWorkspace(state, action: PayloadAction<Workspace>) {
      state.push(action.payload)
    },
  },
})

export const { saveWorkspace } = workspaceSlice.actions
export default workspaceSlice.reducer

export const selectWorkspaces = (state: RootState) => state.workspace
