import { Rule } from "antd/es/form";
type BookingModalType = {
  name?: string;
  label?: string;
  rules?: Rule[];
  placeholder?: string;
  selectorOptions?: { value: string; label: string }[];
};
type OptionsType = {
  value: string;
  label: string;
};

export const CurrencyOptions: OptionsType[] = [
  { value: "UZS", label: "UZS - Uzbekistan Sum" },
  { value: "USD", label: "USD - United States Dollar" },
  { value: "EUR", label: "EUR - Euro" },
];

export const BOOKING_MODAL_ITEMS: BookingModalType[] = [
  {
    name: "input1",
    label: "Business Name",
    rules: [{ required: true, message: "Please input Field 1!" }],
    placeholder: "Enter Business Name",
  },
  {
    name: "input2",
    label: "Time Zone",
    rules: [{ required: true, message: "Please select Time Zone!" }],
    placeholder: "Select Time Zone",
    selectorOptions: [
      { value: "UTC", label: "UTC" },
      { value: "GMT", label: "GMT" },
    ],
  },
  {
    name: "input3",
    label: "Currency",
    rules: [{ required: true, message: "Please select Currency!" }],
    placeholder: "Select Currency",
    selectorOptions: CurrencyOptions,
  },
];
