import React from "react";
import {
  FooterContainer,
  FooterList,
  FooterItem,
  NestedList,
} from "./FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <FooterList>
        <FooterItem>
          <span>Delivery</span>
          <NestedList>
            <li>Delivery cost and area</li>
            <li>Payment methods</li>
            <li>Delivery times</li>
            <li>Complaints and returns</li>
          </NestedList>
        </FooterItem>

        <FooterItem>
          <span>Our Offer</span>
          <NestedList>
            <li>Special discounts</li>
            <li>Product categories</li>
            <li>Seasonal offers</li>
            <li>Bundle deals</li>
          </NestedList>
        </FooterItem>

        <FooterItem>
          <span>About Us</span>
          <NestedList>
            <li>Our history</li>
            <li>Our mission</li>
            <li>Team</li>
            <li>Career</li>
          </NestedList>
        </FooterItem>

        <FooterItem>
          <span>Info</span>
          <NestedList>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookies policy</li>
            <li>FAQ</li>
          </NestedList>
        </FooterItem>

        <FooterItem>
          <span>Contact</span>
          <NestedList>
            <li>Email us</li>
            <li>Call us</li>
            <li>Support hours</li>
            <li>Location</li>
          </NestedList>
        </FooterItem>
      </FooterList>
    </FooterContainer>
  );
}

export default Footer;
