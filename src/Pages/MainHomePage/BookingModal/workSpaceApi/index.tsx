import React from "react"
import { useDispatch } from "react-redux"
import {
  useCreateServiceMutation,
  useCreateWorkSpaceMutation,
  useGetWorkSpaceQuery,
} from "../../../../features/apiSlice"
import { saveWorkspace } from "../../../../redux/workSpaceReducer"
import { WEEKDAYS } from "../constants/weekDays"

type WorkSpaceType = {
  name?: string
  startTime?: string
  endTime?: string
  weekDays?: string[]
}
interface ServiceValues {
  name?: string
  duration?: string
  unit?: string
  workspace?: string
  staff?: string
}

const WorkSpaceApi = () => {
  const dispatch = useDispatch()
  const [createWorkSpace] = useCreateWorkSpaceMutation()
  const [createService] = useCreateServiceMutation()

  const WEEK_DAYS_SHORT: { [x: string]: string } = {
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  }
  const handleSubmit = async (values: WorkSpaceType) => {
    try {
      const weekDaysIds =
        values.weekDays?.map((day) => {
          return WEEK_DAYS_SHORT[day]
        }) ?? []

      const data = {
        name: values.name,
        startTime: values.startTime,
        endTime: values.endTime,
        weekDays: weekDaysIds,
      }

      const workspaceResult = await createWorkSpace(data)

      if ("error" in workspaceResult) {
        console.error("Failed to save workspace:", workspaceResult.error)
        return
      }

      const workspace = workspaceResult.data

      dispatch(saveWorkspace(workspace))

      const serviceValues: ServiceValues = {
        name: "Some Service Name",
        duration: "60",
        unit: "minutes",
        workspace: workspace.id,
        staff: "Some Staff ID",
      }

      const serviceResult = await createService(serviceValues)

      if ("error" in serviceResult) {
        console.error("Failed to save service:", serviceResult.error)
        return
      }
      console.log("Service created successfully:")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return { handleSubmit }
}

export default WorkSpaceApi
