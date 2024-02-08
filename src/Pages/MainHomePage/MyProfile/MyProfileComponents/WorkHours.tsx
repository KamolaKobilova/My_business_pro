import {
  ScrollingBlock,
  ScrollingBlockWrp,
  ScrollingBlockContent,
} from "../stylesForMyProfile";
import { FaRegClock } from "react-icons/fa";

export const WorkHours = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <ScrollingBlockWrp>
        <div className="header">
          <h3>Change work hours</h3>
        </div>
        <ScrollingBlock>
          {daysOfWeek.map((day, index) => (
            <ScrollingBlockContent key={index}>
              <div className="hour">
                <FaRegClock size={20} color="grey" />
                <p>{day}</p>
              </div>
            </ScrollingBlockContent>
          ))}
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  );
};
