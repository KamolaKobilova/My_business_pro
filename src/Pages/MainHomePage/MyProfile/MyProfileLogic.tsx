import React from "react";
import { useState } from "react";
import {
  ScrollingBlock,
  ScrollingBlockWrp,
  ScrollingBlockContent,
} from "./stylesForMyProfile";
import { FaRegClock, FaPencilAlt } from "react-icons/fa";

export const GeneralInformation = () => {
  return (
    <>
      <ScrollingBlockWrp variant="little">
        <div className="header">
          <h3>Set up your profile</h3>
        </div>
        <ScrollingBlock>
          <ScrollingBlockContent>
            <h3>Name</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Email</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Contact number</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Primary work space</h3>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Role</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Status</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Birth date</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Gender</h3>
            <p></p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <h3>Additional information</h3>
            <p></p>
          </ScrollingBlockContent>
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  );
};
export const WorkHours = () => {
  return (
    <>
      <ScrollingBlockWrp>
        <div className="header">
          <h3>Change work hours</h3>
        </div>
        <ScrollingBlock>
          <div className="internal-header">
            <h3>Work hours</h3>
          </div>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Monday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Tuesday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Wednesday</p>
            </div>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Thursday</p>
            </div>
            <p>Dinora</p>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Friday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Saturday</p>
            </div>
          </ScrollingBlockContent>
          <ScrollingBlockContent>
            <div className="hour">
              <FaRegClock size={20} color="grey" />
              <p>Sunday</p>
            </div>
          </ScrollingBlockContent>
        </ScrollingBlock>
      </ScrollingBlockWrp>
    </>
  );
};
export const Services = () => {
  return (
    <ScrollingBlockWrp>
      <div className="header">
        <h3>Specify services</h3>
      </div>
      <h1>Services</h1>
    </ScrollingBlockWrp>
  );
};

export const Settings = () => {
  return (
    <ScrollingBlockWrp>
      <div className="header">
        <h3>Manage page elements</h3>
      </div>
    </ScrollingBlockWrp>

    //     <div className="first">
    //         <p>1</p>
    //  <p>1</p>
    //          <p>1</p>
    //          <p>1</p>
    //          <p>1</p>
    //          <p>1</p>
    //          <p>1</p>
    //          <p>1</p>
    //     </div>
    //     <div className="second">
    //            <p>2</p>
    //  <p>3</p>
    //          <p>4</p>
    //          <p>5</p>
    //          <p>6</p>
    //          <p>7</p>
    //          <p>8</p>
    //          <p>9</p>
    //     </div>
  );
};
