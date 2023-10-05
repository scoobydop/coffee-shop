import React from "react";
import {Outlet} from "react-router-dom";
import StyledRoot from "./Root.styled.ts";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root: React.FunctionComponent = () => {
    return (
        <StyledRoot>
            <ToastContainer
                position={"top-right"}
                autoClose={3000}
                closeOnClick
                pauseOnFocusLoss={false}
                pauseOnHover={false}
            />
            <Outlet/>
        </StyledRoot>
    );
};

export default Root;
