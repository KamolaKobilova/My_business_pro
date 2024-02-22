import {
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "../../MyProfile/stylesForMyProfile";

export const StaffInformation = ({ staffData, activeIndex }: any) => {
  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Set Up Staff Profile</h3>
      </div>
      <ScrollingBlock variant="little">
        <ScrollingBlockContent>
          <h3>Name</h3>
          <p>{staffData[activeIndex]?.name}</p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Email Address</h3>
          <p>{staffData[activeIndex]?.email}</p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Contact Number</h3>
          <p>{staffData[activeIndex]?.phoneNumber}</p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Primary Workspace</h3>
          <p></p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Role</h3>
          <p>{staffData[activeIndex]?.role}</p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Designation</h3>
          <p></p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Date of Birth</h3>
          <p>{staffData[activeIndex]?.dob}</p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Gender</h3>
          <p>{staffData[activeIndex]?.gender}</p>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Status</h3>
        </ScrollingBlockContent>
        <ScrollingBlockContent>
          <h3>Additional Information</h3>
          <p></p>
        </ScrollingBlockContent>
      </ScrollingBlock>
    </ScrollingBlockWrp>
  );
};
