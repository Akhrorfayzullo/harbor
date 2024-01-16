import styled from "styled-components";
import card1Img from "../assets/card1.png";
import card2Img from "../assets/card2.png";
import card3Img from "../assets/card3.png";
import card4Img from "../assets/card4.png";
import card1icon from "../assets/card1icon.png";
import card2icon from "../assets/card2icon.png";
import card3icon from "../assets/card3icon.png";
import card4icon from "../assets/card4icon.png";
import star from "../assets/star.png";
import appleGray from "../assets/appleGray.png";
import thumbsUp from "../assets/thumsUp.png";
import thumbBackground from "../assets/thumbBackground.png";
import mobile from "../assets/mibile.png";
import harborimg from "../assets/harb.png";
import x from "../assets/x.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";

export const NavWrapper = styled.div`
  display: flex;
  border: 2px solid red;
  align-items: center;
  gap: ${(props) => (props.$inner ? "50px" : "none")};
  height: 100px;
  justify-content: ${(props) => (props.$outer ? "space-between" : "none")};

  margin: ${(props) => (props.$outer ? "0px 10vw" : "0px")};
`;
export const Smalldiv = styled.div`
  padding: 8px 20px;
  /* background-color: none; */
  border-radius: 40px;
  border: none;

  :hover {
    background-color: #65727b33;
  }

  /* border: 2px solid gainsboro; */
`;
export const Genh1 = styled.h1`
  color: ${(props) => (props.$thumb || props.$signup ? "#fff" : "#65727b")};
  text-align: ${(props) => (props.$noname ? "left" : "center")};

  font-family: Roboto;
  font-size: ${(props) => (props.$center ? "23px" : "16px")};
  font-style: normal;
  margin: ${(props) => (props.$center ? "38px 0 50px" : "0")};
  font-weight: 400;
  line-height: ${(props) => (props.$signup ? "36px" : "31px")}; /* 141% */
`;
export const CenterDiv = styled.div`
  display: flex;
  width: ${(props) => (props.$footerWrap ? "100%" : "undefined")};
  /* border: 10px solid olive; */
  flex-direction: ${(props) =>
    props.$btn ||
    props.$com ||
    props.$comWrap ||
    props.$mobile ||
    props.$input ||
    props.$footerWrap ||
    props.$noname ||
    props.$footerhome
      ? "row"
      : "column"};

  align-items: ${(props) => (props.$innerfooter ? "start" : "center")};
  justify-content: ${(props) =>
    props.$com
      ? "left"
      : props.$commWrap
      ? "space-around"
      : props.$inmobile
      ? "flex-end"
      : props.$footerWrap
      ? "space-between"
      : "center"};
  margin: ${(props) =>
    props.$center
      ? "145px 0 0"
      : props.$we
      ? "340px 0px 100px"
      : props.$cardOuter1
      ? "230px 0 0"
      : props.$thumb
      ? "190px 0 50px"
      : props.$mobile
      ? "50px 15vw 190px"
      : props.$inmobile
      ? "00px 00px 0px 00px"
      : props.$footer
      ? "200px 15vw 50px"
      : props.$footerWrap
      ? "80px 0 0 "
      : "0px"};

  background-color: ${(props) =>
    props.$thumb ? "#28514F" : props.$mobile ? "#F8E6BE" : "none"};

  border-top: ${(props) =>
    props.$footer ? "2px solid rgba(165, 155, 134, 0.20)" : "none"};

  gap: ${(props) =>
    props.$btn ||
    props.$cardOuter1 ||
    props.$cardOuter ||
    props.$com ||
    props.$comWrap
      ? "20px"
      : props.$we || props.$footerhome
      ? "36px"
      : props.$inmobile
      ? "30px"
      : props.$noname
      ? "80px"
      : props.$innerfooter
      ? "10px"
      : "0"};
`;
export const TitleH1 = styled.h1`
  color: ${(props) =>
    props.$thumb ? "#fff" : props.$mobile ? "#333" : "#28514f"};
  text-align: ${(props) => (props.$mobile ? "start" : "center")};
  font-family: DM Serif Display;
  font-size: ${(props) => (props.$mobile ? "40px" : "48px")};
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => (props.$mobile ? "47px" : "55px")}; /* 116% */
`;
export const BtnStore = styled.button`
  width: ${(props) => (props.$thumb ? "204px" : "156px")};
  height: 56px;
  border: none;
  display: flex;
  /* flex-direction: column-reverse; */
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #aeb4b6;
  margin: ${(props) => (props.$thumb ? "0 0 50px" : "0")};
`;
export const MobileCard = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.$small || props.$small2 ? "column" : "column-reverse"};
  align-items: center;
  gap: 40px;
  padding: 50px 60px;
  width: 460px;
  height: ${(props) => (props.$small || props.$small4 ? "768px" : "886px")};
  border-radius: 20px;
  background-color: ${(props) => {
    if (props.$small) {
      return "#DAE1F4";
    } else if (props.$small2) {
      return `#E0F0E6`;
    } else if (props.$small3) {
      return `#D0E6F3`;
    } else {
      return "#F4F0E9"; // Default background image
    }
  }};
  /* border: 1px solid red; */
`;
export const CardImg = styled.img.attrs((props) => ({
  alt: "no img",
  src: props.$small
    ? card1Img
    : props.$small2
    ? card2Img
    : props.$small3
    ? card3Img
    : props.$small4
    ? card4Img
    : props.$small1in
    ? card1icon
    : props.$small2in
    ? card2icon
    : props.$small3in
    ? card3icon
    : props.$small4in
    ? card4icon
    : props.$appleGray
    ? appleGray
    : props.$star
    ? star
    : props.$thumb
    ? thumbsUp
    : props.$thumbBack
    ? thumbBackground
    : props.$mobile
    ? mobile
    : props.$footerWrap
    ? harborimg
    : props.$x
    ? x
    : props.$insta
    ? insta
    : props.$facebook
    ? facebook
    : undefined, // Default background image
}))`
  /* Other styles */
  margin: ${(props) => (props.$thumb ? "-100px 0 170px" : "0")};
  width: ${(props) => (props.$thumbBack ? "100%" : "auto")};
`;
export const Cardh1 = styled.h1`
  color: #1b1f2b;
  font-family: Roboto;
  font-size: ${(props) => (props.$p ? "17px" : "40px")};
  font-style: normal;
  font-weight: ${(props) => (props.$p ? "400" : "700")};
  line-height: ${(props) => (props.$p ? "23px" : "47px")}; /* 118% */
`;
export const Simplediv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 294px;
  height: 230px;
  border-radius: 20px;
  padding: 31px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
export const Commenth1 = styled.h1`
  color: #1b1f2b;
  font-family: Merriweather;
  font-size: ${(props) => (props.$com ? "16px" : "13px")};
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
`;
export const LastInput = styled.input`
  width: 276px;
  height: 60px;
  padding-left: 30px;
  border: 1px solid #fff;
  border-radius: 40px 0px 0px 40px;
  background-color: #fff;
  box-shadow: 0px 4px 0px 0px rgba(167, 167, 167, 0.16);
`;
export const Lastdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 117px;
  height: 60px;
  border-radius: 0px 40px 40px 0px;
  background-color: #28514f;
  box-shadow: 0px 4px 0px 0px rgba(167, 167, 167, 0.16);
`;
