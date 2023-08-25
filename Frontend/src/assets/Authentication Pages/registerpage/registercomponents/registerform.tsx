import {  Alreadyhaveaccount , 
    StyledRegisterFormContainer , 
    StyledInputField, 
    StyledInputLabel , 
    RegisterButton,
    PasswordToggleIcon,
    StyledRegisterForm} from "./registerform.styled";
    import {useState} from "react";
    import passwordhideicon from "../../../logos/icons/passwordhide.svg";
    import paswordshowicon from "../../../logos/icons/passwordshow.svg";


   const RegisterForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

        const handlePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };
        

    return (
        <StyledRegisterFormContainer>
            <StyledRegisterForm>

                <StyledInputLabel>First Name</StyledInputLabel>
                <StyledInputField placeholder="First Name" type="Name"  />
                <StyledInputLabel>Last Name</StyledInputLabel>
                <StyledInputField placeholder="Last Name" type = " Name" />
                <StyledInputLabel>E-Mail</StyledInputLabel>
                <StyledInputField placeholder="Email" type="email" />
                <StyledInputLabel>Password</StyledInputLabel>
                <StyledInputField placeholder="Password" type = "password" />
                <PasswordToggleIcon   src={
                            isPasswordVisible ? passwordhideicon : paswordshowicon
                        } 
                        onClick={handlePasswordVisibility}/>
                <RegisterButton>Register</RegisterButton>
                <Alreadyhaveaccount>Already Have an Account?</Alreadyhaveaccount>
            </StyledRegisterForm>

        </StyledRegisterFormContainer>

    )
   } 
   export  default RegisterForm;