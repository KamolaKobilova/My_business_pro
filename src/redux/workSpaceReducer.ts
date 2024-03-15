import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

type InitialState = {
  workspaceId: string | null
}

const initialState: InitialState = { workspaceId: null }

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    saveWorkspace(state, action: PayloadAction<string>) {
      state.workspaceId = action.payload
    },
  },
})

export const { saveWorkspace } = workspaceSlice.actions
export default workspaceSlice.reducer

export const selectWorkspaces = (state: RootState) => state.workspace
