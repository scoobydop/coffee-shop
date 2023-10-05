import styled from "styled-components";

const StyledDashboardLayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const StyledDashboardContent = styled.div`
  flex: 1;
  padding: 0 30px;
  background-image: url("src/assets/images/logo/Graphic.png");
  background-position: right;
  background-repeat: no-repeat;
`;

const StyledDashboardContentWrapper = styled.main`
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: 170px;
`;


export {
    StyledDashboardLayoutWrapper,
    StyledDashboardContent,
    StyledDashboardContentWrapper
};
