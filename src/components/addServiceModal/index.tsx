import React from "react";
import { Modal, Button, Form, Input, Select, message, TimePicker } from "antd";
import { ModalContent } from "../AddStaffmodal/stylesForModal";
import {
  useCreateServiceMutation,
  useGetAllServicesQuery,
  useGetWorkSpaceQuery,
} from "../../features/apiSlice";
const { Item } = Form;
const { Option } = Select;

interface FormValues {
  name?: string;
  duration?: number;
  unit?: string;
  workspace?: string;
  staff?: string;
}
type WorkSpaceTypes = {
  name?: string;
  email?: string;
  status?: string;
  description?: string;
  id?: string;
};

const AddServiceModal = ({ isOpen, onClose }: any) => {
  const [form] = Form.useForm();
  const [createService, { isLoading: isCreating }] = useCreateServiceMutation();
  const { data: workSpaceData, isLoading } = useGetWorkSpaceQuery("");
  const workspaces = workSpaceData?.payload ?? [];

  const handleSubmit = async (values: FormValues) => {
    try {
      const result = await createService({
        ...values,
        // duration: values.duration?.hour() * 60 + values.duration?.minute(),
      });
      //   onAdd();
      form.resetFields();
      onClose();
    } catch (error: any) {
      message.error("Couldn't create service!");
    }
  };

  return (
    <Modal
      title="Title"
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={form.submit}
          loading={isCreating}
        >
          Add
        </Button>,
      ]}
    >
      <Form form={form} onFinish={handleSubmit}>
        <ModalContent>
          <Item name="workspace">
            <Select placeholder="Choose workspace">
              {workspaces.map((workspace: WorkSpaceTypes, index: number) => (
                <Option key={`${workspace?.id ?? index}`}>
                  {workspace?.name}
                </Option>
              ))}
            </Select>
          </Item>
          <Item
            name="name"
            rules={[
              { required: true, message: "Please enter name of the service" },
            ]}
          >
            <Input placeholder="Name of the service" />
          </Item>
          <Item name="staff">
            <Select placeholder="Staff"></Select>
          </Item>

          <div className="duration">
            <Item
              name="duration"
              label="Duration"
              rules={[{ required: true }]}
              initialValue={form.getFieldValue("duration")}
            >
              <TimePicker
                placeholder="Select duration"
                format="HH:mm"
                onChange={(time) => form.setFieldsValue({ duration: time })}
              />
            </Item>
          </div>
        </ModalContent>
      </Form>
    </Modal>
  );
};

export default AddServiceModal;
