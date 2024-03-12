import React from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import './style.css';
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Index: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...formItemLayout}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="WorkSpace"
        name="workspace"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Select className="select">
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Service"
        name="service"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Select className="select">
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Assign Staff"
        name="staff"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Select className="select">
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="DatePicker"
        name="datePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <DatePicker className="selects" />
      </Form.Item>

      <Form.Item
        label="Notes"
        name="notes"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input.TextArea className="notes" />
      </Form.Item>
      <Form.Item
        label="RangePicker"
        name="rangePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <RangePicker className="selectss" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
