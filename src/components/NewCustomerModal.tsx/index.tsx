  import { Modal,Form } from "antd"
import { TO_DO_MODAL_FIELDS } from "../../Pages/MainHomePage/ToDoModal/constants"
import { CustomButton, } from "../../Pages/MainHomePage/ToDoModal/Todo.style"

const { useForm } = Form

const NewCustomerModal = ({handleClearList,handleTaskSubmit}:any) => {
   const [form] = useForm()

return(
<Modal
        title={<div className="customTitle">+ New Customer</div>}
        open={form.getFieldValue("showTodoListModal")}
        onCancel={() => form.setFieldsValue({ showTodoListModal: false })}
        footer={[
          <div>
            <CustomButton key="clear" onClick={handleClearList}>
              Clear
            </CustomButton>
            <CustomButton
              className="antBtn"
              key="save"
              onClick={handleTaskSubmit}
            >
              Save
            </CustomButton>
          </div>,
        ]}
        width={500}
      >
        <Form form={form} layout="vertical">
          {TO_DO_MODAL_FIELDS.map((field) => (
            <Form.Item
              key={field.name}
              label={field.label}
              name={field.name}
              rules={field.rules}
            >
              {field.element || <></>}
            </Form.Item>
          ))}
        </Form>
    </Modal>
)
}
export default NewCustomerModal