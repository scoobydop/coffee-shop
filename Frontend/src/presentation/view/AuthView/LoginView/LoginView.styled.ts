import styled from "styled-components";
import {Link} from "react-router-dom";

interface LoginButtonProps {
    disabled: boolean;
}

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const StyledLoginLogo = styled.img`
  width: 177.629px;
  height: 59px;
  margin-bottom: 12px;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  height: 22.8px;
  margin: 12px 0;
  color: #242424;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledInput = styled.input`
  font-family: SFProDisplay, serif;
  padding: 5px 15px;
  width: 400px;
  height: 70px;
  border-radius: 6px;
  border: 1px solid black;
  background: var(--white-color);
  font-size: x-large;

  &:focus {
    outline: var(--primary-color);
  }

  &::placeholder {
    font-size: large;
  }
`;

const StyledRememberAndForget = styled.div`
  margin: 27px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
`;



const StyledForget = styled(Link)`
  margin-left: auto;
  text-decoration: underline;
  color: #696f79;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLoginButton = styled.button<LoginButtonProps>`
  display: block;
  font-family: SFProDisplay, serif;
  margin-top: 10px;
  align-self: center;
  background: black;
  width: 100%;
  color: var(--white-color);
  height: 70px;
  padding: 25px 0;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;

  ${({disabled}) => disabled && `
    cursor: not-allowed;
    pointer-events: none;
    filter: grayscale();
  `}
`;

export {
    StyledLoginLogo,
    StyledLoginForm,
    StyledRememberAndForget,
    StyledForget,
    StyledLoginButton
};
