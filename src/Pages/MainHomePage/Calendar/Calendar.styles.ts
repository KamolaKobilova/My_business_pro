import styled from "styled-components";
import Calendar from "react-calendar";
import { Select } from "antd";
export const FullPageCalendar = styled.div`
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  .custom-calendar {
    width: 1000%;
    max-width: 1400px;
  }
  .react-calendar__tile {
    width: 100% !important;
    aspect-ratio: 1.3;
    background-color: white;
    border: 1px solid #cbc8c8;
    font-size: 15px;
    text-align: right;
    vertical-align: top;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: #f6f3f3;
    }
  }
`;
export const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;

  .react-calendar__navigation {
    margin-left: 500px;
    width: 20%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .react-calendar__navigation button {
    background-color: transparent;
    border: none;
    color: #333;
    font-size: 25px;
    padding: 5px 8px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ddd;
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    text-decoration: unset;
    overflow: visible;
    white-space: normal;
    margin: 10px 0;
    color: #333;
    font-size: 20px;
  }
`;
export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 40px 100px 100px 50px;

  .name {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .name p {
    color: #656464;
    font-size: 20px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`;
export const CustomSelect = styled.div``;

export const SelectOptions = styled(Select)`
  position: absolute;
  top: 100%;
  width: 500px;
`;
