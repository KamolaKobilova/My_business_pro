import { useGetStaffQuery } from "../../../../features/apiSlice"
import { ScrollingBlockWrp } from "../../MyProfile/MyProfile.styles"

export const StaffAssigned = () => {
  const { data: staffData } = useGetStaffQuery("")
  const staff = staffData?.payload ?? []
  console.log(staff)
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Staff Assigned</h3>
      </div>
    </ScrollingBlockWrp>
  )
}
