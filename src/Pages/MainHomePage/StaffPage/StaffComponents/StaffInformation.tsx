import {
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "../../MyProfile/MyProfile.styles"
import { STAFF_INFORMATION_FIELDS } from "./constants"

export const StaffInformation = ({ staffData, activeIndex }: any) => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Set Up Staff Profile</h3>
      </div>
      <ScrollingBlock variant="little">
        {STAFF_INFORMATION_FIELDS.map((field) => (
          <ScrollingBlockContent key={field.key}>
            <h3>{field.title}</h3>
            <p>{staffData[activeIndex]?.[field.key]}</p>
          </ScrollingBlockContent>
        ))}
      </ScrollingBlock>
    </ScrollingBlockWrp>
  )
}
