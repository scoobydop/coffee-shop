import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledSidebarWrapper = styled.aside`
  background: #091E21;
  width: clamp(220px, 20vw, 240px);
  height: 100%;
  color: white;
`;

const StyledDashboardSidebarLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledDashboardSidebarLogo = styled.img`
  width: 170px;
  margin: 2.5em 0;
  object-fit: cover;
`;

const StyledSidebarBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
`;

const StyledDashboardSidebarLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const StyledDashboardSidebarTile = styled(NavLink)`
  width: 100%;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: start;
  white-space: nowrap;
  align-items: center;
  gap: 0 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 1em 1.5em;

  &:not(:last-child) {
    margin-bottom: 1em;
  }

  img {
    height: 24px;
    width: 24px;
  }

  max-height: fit-content;

  &.active, &:hover {
    path {
      fill: var(--primary-color) !important;
    }

    #dashboard-icon path {
      fill: none !important;
      stroke: var(--primary-color) !important;
    }

    background-color: var(--primary-color-extra-dark);
    color: var(--primary-color);
  }
`;

const StyledSidebarLogoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const StyledDashboardSidebarLogout = styled.div`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: start;
  white-space: nowrap;
  align-items: center;
  gap: 0 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  padding: 1em 1.5em;

  max-height: fit-content;

  &:hover {
    background-color: var(--primary-color-extra-dark);

    path {
      fill: var(--danger-color);
    }

    color: var(--danger-color);
  }

`;

export {
    StyledSidebarWrapper,
    StyledSidebarBodyWrapper,
    StyledDashboardSidebarLinks,
    StyledDashboardSidebarTile,
    StyledSidebarLogoutWrapper,
    StyledDashboardSidebarLogout,
    StyledDashboardSidebarLogo,
    StyledDashboardSidebarLogoWrapper,
};
