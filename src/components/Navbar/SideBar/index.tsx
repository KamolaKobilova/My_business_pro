import React from "react";
import {
  DropdownMenu,
  DropdownContent,
  IconsForNavbar,
  DropdownMiniBlock,
} from "../StylesForNavbar/index";

type SideBarProps = {
  isMenuOpen: boolean;
};

const SideBar = ({ isMenuOpen }: SideBarProps) => (
  <DropdownMenu isOpen={isMenuOpen}>
    <DropdownContent>
      <IconsForNavbar src="/assets/NavbarImg/crm.png" alt="Crm" />
      <DropdownMiniBlock>
        <h3>CRM</h3>
        <p>
          Comprehensive CRM platform for <br />
          customer-facing teams
        </p>
      </DropdownMiniBlock>
    </DropdownContent>

    <DropdownContent>
      <IconsForNavbar src="/assets/NavbarImg/mail.png" alt="E-mail" />
      <DropdownMiniBlock>
        <h3>Mail</h3>
        <p>
          Secure email service for teams of all
          <br /> sizes
        </p>
      </DropdownMiniBlock>
    </DropdownContent>

    <DropdownContent>
      <IconsForNavbar src="/assets/NavbarImg/book.png" alt="Booking" />
      <DropdownMiniBlock>
        <h3>Books</h3>
        <p>
          Powerful financial platform for
          <br /> growing businesses
        </p>
      </DropdownMiniBlock>
    </DropdownContent>
    <DropdownContent>
      <IconsForNavbar src="assets/NavbarImg/analytics.png" alt="Booking" />
      <DropdownMiniBlock>
        <h3>Analytics</h3>
        <p>
          Create custom reports and
          <br /> dashboards from any data
        </p>
      </DropdownMiniBlock>
    </DropdownContent>
  </DropdownMenu>
);

export default SideBar;
