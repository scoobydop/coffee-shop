import styled from "styled-components";

interface SideBarProps {
    isCollapsed: boolean;
}

const StyledSideBar = styled.div<SideBarProps>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  height: 100%;
  width: ${({isCollapsed}) => (isCollapsed ? '80px' : 'clamp(180px, 25vw, 240px)')};
  transition: var(--layout-transition);
  overflow-y: scroll;
  overflow-x: hidden;

`;

const SidebarLogo = styled.img<SideBarProps>`
  height: 24px;
  margin: 32px 70px 20px 30px;
  width: 80px;
  object-fit: contain;
  visibility: ${({isCollapsed}) => (isCollapsed ? 'hidden' : 'visible')};
`;

const StyledSidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  transition: all 0.5s;
  background-color: var(--primary-color);
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  span {
    width: 80%;
    margin: 0 auto;
    color: var(--secondary-color);
    padding: 10px 16px;
    font-size: 16px;
  }
`;

const StyledSidebarItemContainer = styled.div`
  a {
    text-decoration: none;
    color: var(--secondary-color);
  }

  .active > div, a:hover > div {
    border-radius: 8px;
    background-color: var(--color-white);
    color: var(--primary-color);
  }
  
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const StyledSidebarItemIcon = styled.img<SideBarProps>`
  height: 16px;
  width: 16px;
  margin-right: 15px;

  ${({isCollapsed}) => isCollapsed && `
    margin: 0;
    height: 20px;
    width: 20px;
    
  `}
`;

const StyledSidebarItem = styled.div<SideBarProps>`
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 40px;
  cursor: pointer;
  margin: 8px 20px;
  padding: 0 12.5px;
  
  ${({isCollapsed}) => isCollapsed && `
    justify-content: center;
  `}

`;

const StyledDivider = styled.div`
  width: 70%;
  margin: 17.5px auto;
  border: 1px solid #F2F4F6;
`;

const StyledSidebarFooter = styled.div<SideBarProps>`
  margin-top: auto;
  height: 60px;
  border-top: 1px solid var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  ${({isCollapsed}) => isCollapsed && `
    align-items: center;
  `}
`;

const StyledSidebarToggleIcon = styled.img`
    margin: 15px;
`;

export {
    StyledSideBar,
    SidebarLogo,
    StyledSidebarBody,
    StyledSidebarItemContainer,
    StyledSidebarItemIcon,
    StyledSidebarItem,
    StyledDivider,
    StyledSidebarFooter,
    StyledSidebarToggleIcon
};
