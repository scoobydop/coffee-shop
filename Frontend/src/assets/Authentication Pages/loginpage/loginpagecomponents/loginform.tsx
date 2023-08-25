import { StyledLoginForm ,
    StyledInputLabel,
    StyledLoginFormContainer,
    StyledInputField,
    PasswordToggleIcon,
    LoginButton, 
    Forgetpwdiv
} from "./loginform.styled";
    import passwordhideicon from "../../../logos/icons/passwordhide.svg";
    import paswordshowicon from "../../../logos/icons/passwordshow.svg";
import { useState} from "react";

    const LoginForm = () => {
       const [isClicked , setIsClicked ]  = useState<boolean>(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

        const handlePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };
        const handleForgetpwclick = ()  => {
            setIsClicked  (!isClicked)
        }
    

        return (
          
                <StyledLoginFormContainer>
                    <StyledLoginForm>
                        <StyledInputLabel>Email</StyledInputLabel>
                        <StyledInputField placeholder="Email" type="email" />
                        <StyledInputLabel>Password</StyledInputLabel>
                        <StyledInputField placeholder="Password"  type={isPasswordVisible ? "text" : "password"} />
                        <PasswordToggleIcon   src={
                            isPasswordVisible ? passwordhideicon : paswordshowicon
                        } 
                        onClick={handlePasswordVisibility}/>
                       
                       <LoginButton type = "submit"  >Login</LoginButton>
                       {/* <Forgetpwdiv onClick= { isClicked} >Forgot Password?</Forgetpwdiv> */}
                    </StyledLoginForm>
                </StyledLoginFormContainer>
   
        )
    }

    export default LoginForm;