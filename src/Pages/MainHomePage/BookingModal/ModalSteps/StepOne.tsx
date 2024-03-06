import { Form } from "antd";
import {
  CustomTimePicker,
  NextPreviousButton,
  WeekDaysButton,
} from "../BookingStyles";
import { WEEKDAYS } from "../constants/weekDays";

const StepOne = ({
  currentStep,
  nextStep,
  prevStep,
  selectedDays,
  handleDayClick,
}: any) => {
  return (
    <>
      {currentStep === 1 && (
        <Form>
          <Form.Item
            name="field2"
            label="Field 2"
            rules={[{ required: true, message: "Please input Field 2!" }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CustomTimePicker format="HH:mm" placeholder="Start Time" />
              <CustomTimePicker format="HH:mm" placeholder="End Time" />
            </div>
          </Form.Item>
          <Form.Item
            name="weekdays"
            label="Select Weekdays"
            rules={[
              {
                required: true,
                message: "Please select weekdays!",
              },
            ]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <div>
              {WEEKDAYS.map((day) => (
                <WeekDaysButton
                  key={day}
                  type={selectedDays.includes(day) ? "primary" : "default"}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </WeekDaysButton>
              ))}
            </div>
          </Form.Item>
          <Form.Item>
            <NextPreviousButton
              variant="right"
              type="primary"
              onClick={prevStep}
            >
              Previous
            </NextPreviousButton>

            <NextPreviousButton
              variant="left"
              type="primary"
              onClick={nextStep}
            >
              Next
            </NextPreviousButton>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default StepOne;
