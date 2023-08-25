import styled  from "styled-components";

const StyledRegisterView = styled.div`
  background-color: #F6F6F6;
  position: relative;
  overflow-x: hidden;
  height: 100vh; background: url("/CoffeShop/src/assets/logos/icons/backdrop.jpg");
  z-index  : 2;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 40px;
  `;
const StyledLogo = styled.img`
  height: 100px;
  width: 100px;
`;
const StyledBackdrop = styled.img``;

export {
    StyledRegisterView,
    StyledLogoContainer,
    StyledLogo,
    StyledBackdrop
};
