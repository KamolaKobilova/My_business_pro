import React from "react";
import {
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "../MyProfile.tsx/stylesForMyProfile";

// export const ServicesPageLogic = () => {
//   return (
//     <>
//           <ScrollingBlockWrp variant="little">

//       </ScrollingBlockWrp>
//     </>
//   );
// };

export const ServiceInf = () => {
  return (
    <>
      <ScrollingBlockWrp variant="little">
        <div className="header">
          <h3>Define This Service</h3>
        </div>
        <ScrollingBlock variant="little">
          <ScrollingBlockContent>
            <h3>Name</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Email Address</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Contact Number</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Primary Workspace</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Role</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Designation</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Date of Birth</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Gender</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Status</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Additional Information</h3>
            <p></p>
          </ScrollingBlockContent>
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  );
};
export const StaffAssig = () => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Staff Assigned</h3>
      </div>
    </ScrollingBlockWrp>
  );
};
export const ServiceAvailability = () => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Service Availability</h3>
      </div>
    </ScrollingBlockWrp>
  );
};
export const ServiceNotifications = () => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Configure Notifications</h3>
      </div>
    </ScrollingBlockWrp>
  );
};

export const ServicePreferences = () => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Set Service Preferences</h3>
      </div>
    </ScrollingBlockWrp>
  );
};
export const BookingForm = () => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Know Your Customers</h3>
      </div>
    </ScrollingBlockWrp>
  );
};
