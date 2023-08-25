import styled  from "styled-components";
import { Link } from "react-router-dom";

const StyledLoginFormContainer = styled.div`
  height: 348px;
  width: 546px;
  background-color: var(--color-pure-white);
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 10%;
  padding: 40px;
  border-radius: 6px;
  border: 1px solid white;
  background-color: white;
`;
const StyledLoginForm = styled.form`
`;

const StyledInputLabel = styled.div`
  color: #949ca9;
`;

const StyledInputField = styled.input`
  width: 90%;
  height: 20px;
  border-radius: 6px;
  position: relative;
  padding: 20px;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

`;

const PasswordToggleIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  background: none;
  border: none;
  right: 75px;
  margin-top: 5%;
`;


const LoginButton = styled.button`
  background: #6F4E37;
  color: black;
  width: 96%;
  height: 52px;
  border-radius: 5px;
  border: none;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;`
;
const Forgetpwdiv = styled.button`
  color : black;
  font-size: 20px;
  cursor: pointer;
`;


export {
    StyledLoginForm,
    StyledInputLabel,
    StyledLoginFormContainer,
    StyledInputField,
    PasswordToggleIcon,
    LoginButton,
   Forgetpwdiv
};



