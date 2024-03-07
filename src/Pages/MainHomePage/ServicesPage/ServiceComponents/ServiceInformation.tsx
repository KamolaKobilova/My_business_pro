import {
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "../../MyProfile/MyProfile.styles"
import { SERVICE_INFORMATION_FIELDS } from "./constants"

export const ServiceInformation = () => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Define This Service</h3>
      </div>
      <ScrollingBlock variant="little">
        {SERVICE_INFORMATION_FIELDS.map((field) => (
          <ScrollingBlockContent key={field.key}>
            <h3>{field.title}</h3>
            <p>{[field.key]}</p>
          </ScrollingBlockContent>
        ))}
      </ScrollingBlock>
    </ScrollingBlockWrp>
  )
}
