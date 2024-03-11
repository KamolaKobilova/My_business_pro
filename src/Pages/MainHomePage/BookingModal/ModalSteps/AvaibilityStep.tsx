import { Form } from "antd"
import {
  CustomTimePicker,
  NextPreviousButton,
  WeekDaysButton,
} from "../BookingStyles"
import { WEEKDAYS } from "../constants/weekDays"

const AvaibilityStep = ({
  nextStep,
  prevStep,
  selectedDays,
  setSelectedDays,
  handleDayClick,
  form,
  updateFormData,
}: any) => {
  const handleTimeChange = (field: string) => (time: any) => {
    // console.log(time)
    form.setFieldsValue({ [field]: time })
    updateFormData({ [field]: time })
  }

  const handleWeekDaysChange = (day: string) => {
    let updatedSelectedDays = [...selectedDays]
    if (updatedSelectedDays.includes(day)) {
      updatedSelectedDays = updatedSelectedDays.filter(
        (selectedDay) => selectedDay !== day
      )
    } else {
      updatedSelectedDays.push(day)
    }
    setSelectedDays(updatedSelectedDays)
    form.setFieldsValue({ weekDays: updatedSelectedDays })
    updateFormData({ weekDays: updatedSelectedDays })
  }
  return (
    <>
      <Form.Item
        name="duration"
        label="Duration"
        rules={[{ required: true, message: "Please select duration " }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomTimePicker
            format="HH:mm"
            placeholder="Start Time"
            onChange={handleTimeChange("startTime")}
          />
          <CustomTimePicker
            format="HH:mm"
            placeholder="End Time"
            onChange={handleTimeChange("endTime")}
          />
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
              onClick={() => handleWeekDaysChange(day)}
            >
              {day}
            </WeekDaysButton>
          ))}
        </div>
      </Form.Item>
      <Form.Item>
        <NextPreviousButton variant="right" type="primary" onClick={prevStep}>
          Previous
        </NextPreviousButton>

        <NextPreviousButton variant="left" type="primary" onClick={nextStep}>
          Next
        </NextPreviousButton>
      </Form.Item>
    </>
  )
}

export default AvaibilityStep
