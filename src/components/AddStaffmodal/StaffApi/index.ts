import { useCreateStaffMutation, useGetServiceQuery } from "../../../features/apiSlice";

type StaffType = {
  firstName: string;
  email: string;
  phone: number;
  role: string;
  datebirth: number;
  foor: string;
  service: string;
};

const StaffApi = () => {
  const [createStaff] = useCreateStaffMutation();
  const { data: serviceData } = useGetServiceQuery('');
  const service =  serviceData?.payload?? [];
  const serviceId = service.length > 0 ?service[0]._id: ""
  const handleSubmit = async (value: StaffType) => {
    try {
      const staffData: StaffType = {
        firstName: value.firstName,
        email: value.email,
        phone: value.phone,
        role: value.role,
        datebirth: value.datebirth,
        foor: value.foor,
        service: serviceId
      };

      const staffResult = await createStaff(staffData);
      if ("error" in staffResult) {
        console.error("Failed to save service:", staffResult.error);
        return;
      }
      console.log("Staff created successfully");
      



    } catch (error) {
      console.log("Error:", error);
    }
  };

  return { handleSubmit , service};
};

export default StaffApi;
