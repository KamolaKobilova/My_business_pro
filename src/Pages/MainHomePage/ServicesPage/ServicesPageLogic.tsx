import React from "react";
import {
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "../MyProfile/stylesForMyProfile";

export const ServiceInf = () => {
  return (
    <>
      <ScrollingBlockWrp variant="little">
        <div className="header">
          <h3>Define This Service</h3>
        </div>
        <ScrollingBlock variant="little">
          <ScrollingBlockContent>
            <h3>Name Of The Service</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Allocated Workspace</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Contact Number</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Service Type</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Preferred Meeting Mode</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Reference Color</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Duration</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Price</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Pre-buffer</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Post-buffer</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Include Buffer Time In Calendar Invite</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Description</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Visibility</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Status</h3>
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
