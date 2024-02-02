import React from "react";
import { useState } from "react";
import {
  Button,
  ScrollingBlock,
  ScrollingBlockWrp,
  ScrollingBlockContent,
} from "./stylesForMyProfile";

export const ButtonContainer = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <Button active={activeButton === 1} onClick={() => handleButtonClick(1)}>
        General Information
      </Button>
      <Button active={activeButton === 2} onClick={() => handleButtonClick(2)}>
        Work Hours
      </Button>
      <Button active={activeButton === 3} onClick={() => handleButtonClick(3)}>
        Services
      </Button>
      <Button active={activeButton === 4} onClick={() => handleButtonClick(4)}>
        Booking Page Settings
      </Button>
    </div>
  );
};
export const GeneralInformation = () => {
  return (
    <>
      <ScrollingBlockWrp>
        <div className="header">
          <h3>Set up your profile</h3>
        </div>
        <ScrollingBlock>
          <ScrollingBlockContent>
            <h3>Name:</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Email:</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Contact number</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Minor work space</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Role</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Email</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Birth date</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Status</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Additional information</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  );
};
