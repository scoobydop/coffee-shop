import styled  from "styled-components";

const StyledRegisterFormContainer = styled.div`
  height: 400px;
  width: 700px;;
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
const Textdiv = styled.div`
  font-size: 30px;
  font-size: 600;
  align-items: center;
`;
const StyledRegisterForm = styled.form`
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

const RegisterButton = styled.button`
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
const Alreadyhaveaccount = styled.button`
  color : black;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: white;
`;

export {
   
    StyledRegisterFormContainer , 
    StyledInputField, 
    StyledInputLabel , 
    RegisterButton,
    PasswordToggleIcon,
    StyledRegisterForm,
    Alreadyhaveaccount,
    Textdiv 

}