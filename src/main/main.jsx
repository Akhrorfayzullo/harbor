import React from "react";
import {
  BtnStore,
  CenterDiv,
  Genh1,
  MobileCard,
  TitleH1,
} from "../styled/styled";
import apple from "../assets/image 2.png";
import android from "../assets/Rectangle (1).png";
import phoneimg from "../assets/image 1.png";

export default function Main() {
  return (
    <div>
      <CenterDiv $center={true}>
        <TitleH1>
          Reimagining readiness for <br /> life's uncertain moments.
        </TitleH1>
        <Genh1 $center={true}>
          The app that makes disaster preparedness easy and accessible.
          <br /> Because sometimes tomorrow doesn't look like today.
        </Genh1>

        <CenterDiv $btn={true}>
          <BtnStore>
            <img src={apple} alt="no" style={{ marginRight: "10px" }} />
            App Store
          </BtnStore>
          <BtnStore>
            <img src={android} alt="no" style={{ marginRight: "10px" }} />
            Play Store
          </BtnStore>
        </CenterDiv>

        <img
          src={phoneimg}
          alt="no"
          style={{ margin: "110px 115px 275px 0" }}
        />
        <TitleH1>
          The right plan for when
          <br /> things don't go as planned
        </TitleH1>
        <Genh1 $center={true}>
          Not prepared? You're not alone. Emergency planning is
          <br /> overwhelming. We work with experts to make the hard parts easy,
          so
          <br />
          you can have confidence when it matters most.
        </Genh1>
        <CenterDiv $btn={true}>
          <CenterDiv $cardOuter1={true}>
            <MobileCard></MobileCard>
            <MobileCard></MobileCard>
          </CenterDiv>
          <CenterDiv $cardOuter={true}>
            <MobileCard></MobileCard>
            <MobileCard></MobileCard>
          </CenterDiv>
        </CenterDiv>
      </CenterDiv>
    </div>
  );
}
