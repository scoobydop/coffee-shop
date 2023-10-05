import styled from "styled-components";

const StyledAuthWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("src/assets/images/logo/Graphic.png");
  background-position: right;
  background-repeat: no-repeat;
  position: absolute;
`;

const StyledAuthCard = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 38px 46px;
  height: fit-content;
  width: fit-content;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.18);
`;

export {
    StyledAuthWrapper,
    StyledAuthCard
};
