import React, {useState} from 'react'
import {
    DropDownIcon,
    StyledDropdown,
    StyledDropdownMenu,
    StyledDropdownMenuButton,
    StyledDropdownMenuItem,
    StyledHamburgerIcon,
    StyledNavBar,
    StyledNavBarActions,
    StyledNavBarHello,
    StyledNavBarUserAvatar,
    StyledNavBarUserWrapper,
} from './navbar.styled.ts'
import ArrowDown from '../../logos/icons/down-arrow.svg'
import HamburgerMenuIcon from "../../logos/icons/hamburgericon.svg";
import Logo from "../../logos/icons/coffeesvg.svg";


const NavBar: React.FunctionComponent = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const toggleHamburgerIcon = () => {
        console.log("Menu toggled");
    }

 

    return (
        <StyledNavBar>
            <StyledHamburgerIcon
                src={HamburgerMenuIcon}
                onClick={toggleHamburgerIcon}
            />
            <StyledNavBarHello>
                👋 Hello User
            </StyledNavBarHello>
            <StyledNavBarActions>
                
                <StyledNavBarUserWrapper>
                    <StyledNavBarUserAvatar src={Logo}/>
                    <StyledDropdown onClick={handleDropdownToggle}>
                        <DropDownIcon src={ArrowDown}/>
                    </StyledDropdown>
                    <StyledDropdownMenu isDropdownOpen={isDropdownOpen}>
                        <StyledDropdownMenuItem>
                            <StyledDropdownMenuButton                               
                            >
                                LOGOUT
                            </StyledDropdownMenuButton>
                        </StyledDropdownMenuItem>
                    </StyledDropdownMenu>
                </StyledNavBarUserWrapper>
            </StyledNavBarActions>
        </StyledNavBar>
    )
}

export default NavBar
