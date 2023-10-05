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
import Logo from "@/assets/images/logo/Logo-for-dark.svg";
import DashboardIcon from "@/assets/images/sidebar/DashboardIcon.tsx";
import AgencyIcon from "@/assets/images/sidebar/BuildingIcon.tsx";
import UserIcon from "@/assets/images/sidebar/Usericon";
import AnalyticsIcon from "@/assets/images/sidebar/Analyticsicon";
import SettingIcon from "@/assets/images/sidebar/Settingsicon";
import LogoutIcon from "@/assets/images/sidebar/LogoutIcon.tsx";
import {useDeleteLoginStore} from "@/hooks/DeleteAndLogout/useLogoutandDelete.ts";
import DeleteAndLogoutAgencyModal from "@/view/AgencyManagementView/_components/DeleteAndLogoutAgencyModal";

const Sidebar: React.FunctionComponent = () => {
    const showModal = useDeleteLoginStore(store => store.showModal);
    const [isLogoutAgencyModalOpen, setIsLogoutAgencyModalOpen] = useState<boolean>(false);

    const sidebarRoutes = [
        {
            icon: <DashboardIcon/>,
            label: "Dashboard",
            route: "/",
        },
        {
            icon: <AgencyIcon/>,
            label: "Agency Management",
            route: "/agency-management",
        },
        {
            icon: <UserIcon/>,
            label: "User Management",
            route: "/user-management",
        },
        {
            icon: <AnalyticsIcon/>,
            label: "Analytics",
            route: "/analytics",
        },
        {
            icon: <SettingIcon/>,
            label: "Settings",
            route: "/settings",
        },
    ] as const;




    return (
        <>
            <DeleteAndLogoutAgencyModal
                dispatcher={setIsLogoutAgencyModalOpen}
                type="LOGOUT"
                isOpen={isLogoutAgencyModalOpen}
            />
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
                    <StyledDashboardSidebarLogout onClick={() => setIsLogoutAgencyModalOpen(true)} >
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
