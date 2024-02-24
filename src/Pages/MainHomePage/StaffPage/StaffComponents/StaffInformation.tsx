import {
  ScrollingBlock,
  ScrollingBlockContent,
  ScrollingBlockWrp,
} from "../../MyProfile/stylesForMyProfile";

export const StaffInformation = ({ staffData, activeIndex }: any) => {
  const informationFields = [
    { title: "Name", key: "name" },
    { title: "Email Address", key: "email" },
    { title: "Contact Number", key: "phoneNumber" },
    { title: "Primary Workspace", key: "primaryWorkspace" },
    { title: "Role", key: "role" },
    { title: "Designation", key: "designation" },
    { title: "Date of Birth", key: "dob" },
    { title: "Gender", key: "gender" },
    { title: "Status", key: "status" },
    { title: "Additional Information", key: "additionalInformation" },
  ];

  return (
    <ScrollingBlockWrp variant="little">
      <div className="header">
        <h3>Set Up Staff Profile</h3>
      </div>
      <ScrollingBlock variant="little">
        {informationFields.map((field) => (
          <ScrollingBlockContent key={field.key}>
            <h3>{field.title}</h3>
            <p>{staffData[activeIndex]?.[field.key]}</p>
          </ScrollingBlockContent>
        ))}
      </ScrollingBlock>
    </ScrollingBlockWrp>
  );
};
