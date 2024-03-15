import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  useCreateServiceMutation,
  useCreateWorkSpaceMutation,
} from "../../features/apiSlice"
import { saveWorkspace } from "../../redux/workSpaceReducer"
import { RootState } from "../../redux/store"

type WorkSpaceType = {
  name?: string
  startTime?: string
  endTime?: string
  weekDays?: string[]
  serviceName?: string
  serviceDuration?: string
}

interface ServiceValuesType {
  name?: string
  duration?: string
  unit?: string
  workspace?: string
}

const WorkSpaceApi = () => {
  const dispatch = useDispatch()
  const workspaceId = useSelector(
    (state: RootState) => state.workspace.workspaceId
  )

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
      dispatch(saveWorkspace(workspace.payload._id))

      const serviceData: ServiceValuesType = {
        name: values?.serviceName,
        duration: "60",
        // duration: values?.serviceDuration,
        unit: "hour",
        workspace: workspaceId || "",
      }

      const serviceResult = await createService(serviceData)

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
