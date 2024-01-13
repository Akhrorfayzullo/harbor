import React from "react";
import { Genh1, NavWrapper, Smalldiv } from "../styled/styled";
import harborimg from "../assets/Rectangle.png";

export default function Navbar() {
  return (
    <div>
      <NavWrapper $outer={true}>
        <img src={harborimg} alt="no img" />
        <NavWrapper $inner={true}>
          <Smalldiv>
            <Genh1>Home</Genh1>
          </Smalldiv>
          <Smalldiv>
            <Genh1>About</Genh1>
          </Smalldiv>
          <Smalldiv>
            <Genh1>Know Your Risks</Genh1>
          </Smalldiv>
          <Smalldiv>
            <Genh1>For Work</Genh1>
          </Smalldiv>
          <Smalldiv>
            <Genh1>Journal</Genh1>
          </Smalldiv>
          <Smalldiv>
            <Genh1>Shop</Genh1>
          </Smalldiv>
        </NavWrapper>
      </NavWrapper>
    </div>
  );
}
