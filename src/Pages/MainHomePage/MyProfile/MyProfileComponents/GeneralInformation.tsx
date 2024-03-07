import React from "react"
import {
  ScrollingBlockWrp,
  ScrollingBlock,
  ScrollingBlockContent,
} from "../MyProfile.styles"

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
  )
}
