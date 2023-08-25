import React, {useState} from "react";
import {
    SidebarLogo,
    StyledDivider,
    StyledSideBar,
    StyledSidebarBody,
    StyledSidebarFooter,
    StyledSidebarItemContainer,
    StyledSidebarToggleIcon
} from "./sidebar.styled.ts";
import ToggleArrowLeftIcon from "../../logos/icons/left-arrow.svg";
import ToggleArrowRightIcon from "../../logos/icons/arrow-right.svg";
import Logo from "../../logos/Logo/Coffeeshoplogo.jpg"


interface SideBarProps {
    isCollapsed: boolean;
}


const SideBar: React.FunctionComponent = () => {

    const [ isOpen , setisOpen ] = useState<boolean>(false);

const handlecollapse = () => {
    setisOpen (!isOpen)
}

       return (
        <StyledSideBar isCollapsed={!isOpen}>
            <SidebarLogo src={Logo} isCollapsed={!isOpen}/>
            <StyledSidebarBody>
                <StyledSidebarItemContainer>
                   Home
                </StyledSidebarItemContainer>
                <StyledDivider/>
                <StyledSidebarItemContainer>
                    Menu
                </StyledSidebarItemContainer>
                <StyledDivider/>
                <StyledSidebarItemContainer>
                    Our Services
                </StyledSidebarItemContainer>
                <StyledDivider/>
                <StyledSidebarItemContainer>
                    About Us
                </StyledSidebarItemContainer>
                <StyledDivider/>
                <StyledSidebarItemContainer>
                    Staff
                </StyledSidebarItemContainer>
                <StyledDivider/>
                
                <StyledSidebarFooter isCollapsed={!isOpen}>
                    <StyledSidebarToggleIcon src={isOpen ? ToggleArrowLeftIcon : ToggleArrowRightIcon}
                                             />
                </StyledSidebarFooter>
            </StyledSidebarBody>
        </StyledSideBar>
    );
};


export default SideBar;
