import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {StyledAuthCard, StyledAuthWrapper} from "./AuthRoutes.styled.ts";
import Cookies from "universal-cookie";

const AuthRoutes: React.FunctionComponent = () => {
    const cookie = new Cookies();
    const auth = cookie.get('access');
        if (!!auth) {
        return (
            <Navigate
                to={'/'}
                replace
            />
        );
    }

    return (
        <StyledAuthWrapper>
            <StyledAuthCard>
                <Outlet/>
            </StyledAuthCard>
        </StyledAuthWrapper>
    );
};

export default AuthRoutes;
