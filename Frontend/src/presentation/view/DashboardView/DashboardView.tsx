import React, {useEffect} from "react";
import {StyledDashboardWrapper,} from "./DashboardView.styled";
import DataBoxesWrapper from "@/view/DashboardView/_components/DataBoxesWrapper.tsx";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";
import Cookies from "universal-cookie";

const DashboardView = () => {
    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Dashboard")
    }, []);


    return (
        <StyledDashboardWrapper>
            <DataBoxesWrapper/>
        </StyledDashboardWrapper>
    );
};

export default DashboardView;
