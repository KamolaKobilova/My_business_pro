import {
  useCreateServiceMutation,
  useGetWorkSpaceQuery,
} from "../../features/apiSlice"
import { message } from "antd"
export type ServiceValuesType = {
  name?: string
  duration?: number
  unit?: string
  workspace?: string
}
export type WorkSpaceTypes = {
  name?: string
  email?: string
  status?: string
  description?: string
  _id?: string
}
export type StaffType = {
  name?: string
  email?: string
  _id?: string
  phone?: number
  role: string
}
const ServiceApi = () => {
  const { data: workSpaceData, isLoading } = useGetWorkSpaceQuery("")
  const WORKSPACES = workSpaceData?.payload ?? []
  const workspaceId = WORKSPACES.length > 0 ? WORKSPACES[0]._id : ""
  const [createService] = useCreateServiceMutation()

  const handleSubmit = async (values: ServiceValuesType) => {
    const serviceData: ServiceValuesType = {
      name: values?.name,
      duration: 60,
      //   duration: values.duration,
      unit: "hour",
      workspace: workspaceId,
    }

    const serviceResult = await createService(serviceData)

    if ("error" in serviceResult) {
      message.error("Failed to save service")
      return
    }
    message.success("Service created successfully")
  }
  return { handleSubmit, WORKSPACES, isLoading }
}
export default ServiceApi
