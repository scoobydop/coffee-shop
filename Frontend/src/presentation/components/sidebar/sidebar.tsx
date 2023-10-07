import React, {useState} from "react";
import {
    StyledDashboardSidebarLinks,
    StyledDashboardSidebarLogo,
    StyledDashboardSidebarLogout,
    StyledDashboardSidebarLogoWrapper,
    StyledDashboardSidebarTile,
    StyledSidebarBodyWrapper,
    StyledSidebarLogoutWrapper,
    StyledSidebarWrapper,
} from "@/components/Sidebar/Sidebar.styled.ts";
import Logo from "@/assets/images/logo/Coffeeshoplogo.svg";
import DashboardIcon from "@/assets/images/sidebar/DashboardIcon.tsx";
import AgencyIcon from "@/assets/images/sidebar/MenuIcon.tsx";
import CartIcon from "@/assets/images/sidebar/Carticon.tsx";
import SettingIcon from "@/assets/images/sidebar/Settingsicon";
import LogoutIcon from "@/assets/images/sidebar/LogoutIcon.tsx";

const Sidebar: React.FunctionComponent = () => {

    const sidebarRoutes = [
        {
            icon: <DashboardIcon/>,
            label: "Dashboard",
            route: "/",
        },
        {
            icon: <AgencyIcon/>,
            label: "Menu",
            route: "/menu",
        },
        {
            icon: <CartIcon/>,
            label: "Cart",
            route: "/cart",
        },

        {
            icon: <SettingIcon/>,
            label: "Settings",
            route: "/settings",
        },
    ] as const;




    return (
        <>

        <StyledSidebarWrapper>
            <StyledDashboardSidebarLogoWrapper>
                <StyledDashboardSidebarLogo src={Logo}/>
            </StyledDashboardSidebarLogoWrapper>
            <StyledSidebarBodyWrapper>
                <StyledDashboardSidebarLinks>
                    {sidebarRoutes.map((sidebarRoute, i) => (
                        <StyledDashboardSidebarTile to={sidebarRoute.route} key={i}>
                            {sidebarRoute.icon}
                            {sidebarRoute.label}
                        </StyledDashboardSidebarTile>
                    ))}
                </StyledDashboardSidebarLinks>
                <StyledSidebarLogoutWrapper>
                    <StyledDashboardSidebarLogout >
                        <LogoutIcon/>
                        <span>Logout</span>
                    </StyledDashboardSidebarLogout>
                </StyledSidebarLogoutWrapper>
            </StyledSidebarBodyWrapper>
        </StyledSidebarWrapper>
        </>
    )
};

export default Sidebar;
