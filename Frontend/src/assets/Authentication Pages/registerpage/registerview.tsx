import React from "react";
import RegisterForm from "./registercomponents/registerform";
import Applogo from "../../logos/Logo/Coffeeshoplogo.jpg"
import { StyledRegisterView ,  StyledLogoContainer,
    StyledLogo,
    StyledBackdrop  } from "./registerview.styled";
import Backdrop from "../../logos/icons/backdrop.jpg"
const RegisterView : React.FunctionComponent = () => {
    return(
        <StyledRegisterView>
            
            <StyledLogoContainer>
                <StyledLogo src = { Applogo } />
               
            </StyledLogoContainer>
            <RegisterForm/>
            <StyledBackdrop src = { Backdrop } />
        </StyledRegisterView>
    );
};
export default RegisterView;