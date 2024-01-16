import React from "react";
import {
  BtnStore,
  CardImg,
  Cardh1,
  CenterDiv,
  CommentDiv,
  Commenth1,
  Genh1,
  LastInput,
  Lastdiv,
  MobileCard,
  Simplediv,
  TitleH1,
} from "../styled/styled";
import apple from "../assets/image 2.png";
import android from "../assets/Rectangle (1).png";
import phoneimg from "../assets/image 1.png";
import Footer from "../footer/footer";

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
            <MobileCard $small={true}>
              <CardImg $small={true} />
              <Simplediv>
                <CardImg $small1in={true} />
                <Cardh1>Create your family's emergency plan</Cardh1>
                <Cardh1 $p={true}>
                  Our app is tailored to you, your family and your little dog,
                  too. We tell you what you need to stay safe from hurricanes to
                  wildfires and everything in between.
                </Cardh1>
              </Simplediv>
            </MobileCard>
            <MobileCard $small2={true}>
              <CardImg $small2={true} />
              <Simplediv>
                <CardImg $small2in={true} />
                <Cardh1>
                  Know exactly what to do when an emergency strikes
                </Cardh1>
                <Cardh1 $p={true}>
                  When disasters happen, harbor automatically activates your
                  readiness plan and sends you personalized, on-demand info when
                  it matters the most.
                </Cardh1>
              </Simplediv>
            </MobileCard>
          </CenterDiv>
          {/* ************** */}
          <CenterDiv $cardOuter={true}>
            <MobileCard $small3={true}>
              <CardImg $small3={true} />
              <Simplediv>
                <CardImg $small3in={true} />
                <Cardh1>
                  Access and share important information, even offline
                </Cardh1>
                <Cardh1 $p={true}>
                  View critical information, family plans, and documents at the
                  push of a button, both online and offline - no worries if cell
                  towers go out.
                </Cardh1>
              </Simplediv>
            </MobileCard>

            <MobileCard $small4={true}>
              <CardImg $small4={true} />
              <Simplediv>
                <CardImg $small4in={true} />
                <Cardh1>
                  Get peace-of-mind with automatic risk assessments
                </Cardh1>
                <Cardh1 $p={true}>
                  We use data from NOAA, FEMA, and USGS to pinpoint what your
                  household is at risk for. No more guessing.
                </Cardh1>
              </Simplediv>
            </MobileCard>
          </CenterDiv>
        </CenterDiv>
      </CenterDiv>
      <CenterDiv $we={true}>
        <TitleH1 $we={true}>We're ready, are you?</TitleH1>
        <Genh1 $we={true}>Here's what people are saying about harbor.</Genh1>
      </CenterDiv>
      <CenterDiv $comWrap={true}>
        <CommentDiv>
          <Commenth1>
            It's beautiful, easy to use, and is genuinely growing my confidence
            for crisis preparation.
          </Commenth1>
          <div>
            <CardImg $star={true} />
          </div>

          <CenterDiv $com={true}>
            <CardImg $appleGray={true} />
            <div>
              <Commenth1 $com={true}>Antonea</Commenth1>
              <Commenth1>iOS Beta Tester</Commenth1>
            </div>
          </CenterDiv>
        </CommentDiv>
        <CommentDiv>
          <Commenth1>
            This app is something I’ve been hoping for for a while now. So I’m
            excited to be beta testing it.
          </Commenth1>
          <div>
            <CardImg $star={true} />
          </div>

          <CenterDiv $com={true}>
            <CardImg $appleGray={true} />
            <div>
              <Commenth1 $com={true}>Kathryn</Commenth1>
              <Commenth1>iOS Beta Tester</Commenth1>
            </div>
          </CenterDiv>
        </CommentDiv>
        <CommentDiv>
          <Commenth1>
            It’s a great app and I can’t wait to use it more and see what all
            content you add.
          </Commenth1>
          <div>
            <CardImg $star={true} />
          </div>

          <CenterDiv $com={true}>
            <CardImg $appleGray={true} />
            <div>
              <Commenth1 $com={true}>Gabriel</Commenth1>
              <Commenth1>iOS Beta Tester</Commenth1>
            </div>
          </CenterDiv>
        </CommentDiv>
      </CenterDiv>
      <CenterDiv $thumb={true}>
        <div>
          <CardImg $thumb={true} />
        </div>
        <TitleH1 $thumb={true}>
          Our mission is to
          <br /> encourage readiness for all
        </TitleH1>
        <Genh1 $center={true} $thumb={true}>
          It's our dream that one day, everyday readiness will be quite ordinary
          - like brushing your teeth.
        </Genh1>
        <BtnStore $thumb={true}>
          <Genh1 $thumb={true}>Learn more about us</Genh1>
        </BtnStore>
        <CardImg $thumbBack={true} />
      </CenterDiv>
      <CenterDiv $mobile={true}>
        <CenterDiv $inmobile style={{ flex: "1" }}>
          <TitleH1 $mobile={true}>
            Stay one step
            <br /> ahead with harbor
          </TitleH1>
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
        </CenterDiv>
        <div style={{ flex: "1" }}>
          <CardImg $mobile={true} />
        </div>
      </CenterDiv>
      <TitleH1>Join harbor high fives</TitleH1>
      <Genh1 $center={true}>
        Up high. Down low. Tips on how to find your way through any disaster
        <br /> in the best way possible: together. And be the first in line for
        Android.
      </Genh1>
      <CenterDiv $input={true}>
        <LastInput />
        <Lastdiv>
          <Genh1 $signup={true}>SIGN UP</Genh1>
        </Lastdiv>
      </CenterDiv>
      <Genh1>Our commitment to protecting your Data Privacy</Genh1>
      <Footer />
      <p>© 2020 Career Karma</p>
    </div>
  );
}
