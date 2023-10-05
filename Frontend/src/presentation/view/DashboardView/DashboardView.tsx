import React, {useEffect} from "react";
import {StyledDashboardWrapper,} from "./DashboardView.styled";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";
import Cookies from "universal-cookie";

const DashboardView = () => {
    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Dashboard")
    }, []);


    return (
        <StyledDashboardWrapper>
            Dashboard
        </StyledDashboardWrapper>
    );
};

export default DashboardView;
