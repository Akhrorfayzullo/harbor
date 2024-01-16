import React from "react";
import { CardImg, CenterDiv, Genh1 } from "../styled/styled";

export default function Footer() {
  return (
    <div>
      <CenterDiv $footer>
        <CenterDiv $footerWrap>
          <CenterDiv $innerfooter={true}>
            <CardImg $footerWrap />
            <Genh1>© 2020 Career Karma</Genh1>
            <CenterDiv $noname>
              <div>
                <Genh1 $noname>Privacy</Genh1>
                <Genh1 $noname>Journal</Genh1>
              </div>
              <div>
                <Genh1 $noname>Terms</Genh1>
                <Genh1 $noname>Contact</Genh1>
              </div>
              <div>
                <Genh1 $noname>FAQ</Genh1>
                <Genh1 $noname>Shop</Genh1>
              </div>
            </CenterDiv>
          </CenterDiv>
          <CenterDiv $footerhome>
            <Genh1>Home</Genh1>
            <Genh1>About</Genh1>
            <Genh1>Risks</Genh1>
          </CenterDiv>
          <CenterDiv $footerhome>
            <CardImg $x />
            <CardImg $insta />
            <CardImg $facebook />
          </CenterDiv>
        </CenterDiv>
      </CenterDiv>
    </div>
  );
}
