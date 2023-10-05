import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "universal-cookie";

const PrivateRoutes: React.FunctionComponent = () => {
    const cookie = new Cookies();
    const auth = cookie.get('access');

    if (!auth) {
        return (
            <Navigate
                to={'/login'}
                replace
            />
        );
    }

    return (
        <Outlet/>
    );
};

export default PrivateRoutes;
