import {
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "../../MyProfile/MyProfile.styles"
import { FaRegClock } from "react-icons/fa"

export const WorkingHours = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  return (
    <>
      <ScrollingBlockWrp variant="little">
        <div className="header">
          <h3>Change work hours</h3>
        </div>
        <ScrollingBlock variant="little">
          {daysOfWeek.map((day) => (
            <ScrollingBlockContent key={day}>
              <div className="hour">
                <FaRegClock size={20} color="grey" />
                <p>{day}</p>
              </div>
            </ScrollingBlockContent>
          ))}
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  )
}
