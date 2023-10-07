import React, { useEffect, useState } from "react";
import {StyledDashboardWrapper, StyledDiv} from "./DashboardView.styled";
import { useUILayoutStore } from "@/hooks/UILayout/useUILayout.ts";
import axios from "axios"; // Import Axios
import Cookies from "universal-cookie";

const DashboardView = () => {
    const { addPageTitle } = useUILayoutStore();
    // const [items, setItems] = useState([]);

    useEffect(() => {
        addPageTitle("Welcome To Our Cafe");


    }, []);
    return (
        <StyledDashboardWrapper>
            <StyledDiv>
            </StyledDiv>
        </StyledDashboardWrapper>
    );
};

export default DashboardView;
