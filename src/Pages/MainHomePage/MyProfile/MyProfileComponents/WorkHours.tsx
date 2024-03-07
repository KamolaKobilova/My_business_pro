import {
  ScrollingBlock,
  ScrollingBlockWrp,
  ScrollingBlockContent,
} from "../MyProfile.styles"
import { FaRegClock } from "react-icons/fa"

export const WorkHours = () => {
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
      <ScrollingBlockWrp>
        <div className="header">
          <h3>Change work hours</h3>
        </div>
        <ScrollingBlock>
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
