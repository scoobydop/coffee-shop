import styled from "styled-components";

interface DropDownProps {
    isDropdownOpen: boolean;
}

const StyledHamburgerIcon = styled.img`
    display: none;
`;

const StyledNavBarHello = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavBar = styled.header`
  height: var(--navbar-height);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-pure-white);
  box-shadow: -15px 15px 99px rgba(48, 66, 84, 0.15);
  padding: 0 20px;

`;


const StyledNavBarActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledNavBarUserWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const StyledNavBarUserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 15px;
`;

const StyledDropdown = styled.button`
  background-color: var(--primary-color);
  color: var(--color-pure-white);
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 8px;
  align-content: center;
  cursor: pointer;

`;

const DropDownIcon = styled.img`
  top: 50%;
  height: 30px;
  transform: translateY(-50%);
  display: inline-block;
`;

const StyledDropdownMenu = styled.ul<DropDownProps>`
  z-index: 999999;
  background-color: transparent;
  padding: 0 10px 20px 45px;
  font-size: 15px;
  display: ${({isDropdownOpen}) => (isDropdownOpen ? "block" : "none")};
  position: absolute;
  right: 20px;
  top: 50px;
  text-align: start;
`;

const StyledDropdownMenuItem = styled.div`
  color: var(--pure-white);
  background-color: var(--primary-color);
  position: static;
  height: 40px;
  border-radius: 8px;
  width: 100px;
  border: none;
`;

const StyledDropdownMenuButton = styled.button`
  color: var(--color-pure-white);
  background-color: var(--primary-color);
  position: static;
  height: 40px;
  border-radius: 8px;
  width: 100px;
  border: none;
  cursor: pointer;
  box-shadow: -9px 14px 25px 2px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: -9px 14px 25px 2px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: -9px 14px 25px 2px rgba(0, 0, 0, 0.71);

  &:focus, &:active {
    box-shadow: -9px 14px 25px 2px rgba(0, 0, 0, 0.71) inset;
    -webkit-box-shadow: -9px 14px 25px 2px rgba(0, 0, 0, 0.71) inset;
    -moz-box-shadow: -9px 14px 25px 2px rgba(0, 0, 0, 0.71) inset;
  }

`;

export {
    StyledNavBar,
    StyledHamburgerIcon,
    StyledNavBarHello,
    StyledNavBarActions,
    StyledNavBarUserWrapper,
    StyledNavBarUserAvatar,
    StyledDropdown,
    DropDownIcon,
    StyledDropdownMenu,
    StyledDropdownMenuItem,
    StyledDropdownMenuButton
};
