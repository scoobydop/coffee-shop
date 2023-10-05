import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar.tsx";
import {Navbar} from "@/components/Navbar/Navbar.tsx";
import {
    StyledDashboardContent,
    StyledDashboardContentWrapper,
    StyledDashboardLayoutWrapper
} from "./DashboardLayout.styled.ts";
import {Outlet} from "react-router-dom";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const DashboardLayout: React.FunctionComponent = () => {
    const {title} = useUILayoutStore()
    return (
        <StyledDashboardLayoutWrapper>
            <Sidebar/>
            <StyledDashboardContent>
                <Navbar text={title}/>
                <StyledDashboardContentWrapper>
                    <Outlet/>
                </StyledDashboardContentWrapper>
            </StyledDashboardContent>
        </StyledDashboardLayoutWrapper>
    );
};

export default DashboardLayout;
