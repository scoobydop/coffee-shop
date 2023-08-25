import React from "react";
import LoginForm from "./loginpagecomponents/loginform";
import Applogo from "../../logos/Logo/Coffeeshoplogo.jpg"
import { StyledLoginView ,  StyledLogoContainer,StyledLogo, StyledBackdrop } from "./loginview.styled";
import Backdrop from "../../logos/icons/backdrop.jpg"
const LoginPage : React.FunctionComponent = () => {
    return(
        <StyledLoginView>
            <StyledLogoContainer>
                <StyledLogo src = { Applogo } />
               
            </StyledLogoContainer>
            <LoginForm/>
            <StyledBackdrop src = { Backdrop } />
        </StyledLoginView>
    );
};
export default LoginPage;