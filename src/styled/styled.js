import styled from "styled-components";

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
  color: #65727b;
  text-align: center;
  font-family: Roboto;
  font-size: ${(props) => (props.$center ? "23px" : "16px")};
  font-style: normal;
  margin: ${(props) => (props.$center ? "38px 0 50px" : "0px")};
  font-weight: 400;
  line-height: 31px; /* 141% */
`;
export const CenterDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$btn ? "row" : "column")};
  align-items: center;
  justify-content: center;
  margin: ${(props) => (props.$center ? "145px 0 0" : "0px")};
  gap: ${(props) =>
    props.$btn || props.$cardOuter1 || props.$cardOuter ? "20px" : "0"};
`;
export const TitleH1 = styled.h1`
  color: #28514f;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 55.68px; /* 116% */
`;
export const BtnStore = styled.button`
  width: 156px;
  height: 56px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #aeb4b6;
`;
export const MobileCard = styled.div`
  width: 460px;
  height: 768px;
  border-radius: 20px;
  background-color: #dae1f4;
`;
