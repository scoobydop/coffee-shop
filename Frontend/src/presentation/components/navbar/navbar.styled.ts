import styled from "styled-components";

interface ButtonProps {
    primary?: boolean
}

const StyledNavbarWrapper =  styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 0;
  align-items: center;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  border-bottom: 2px solid rgba(9, 30, 33, 0.100);

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const StyledRightSideFunctions = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 24px;
`;


const StyledButton = styled.button<ButtonProps>`
  background: ${props => props.primary ? "#1B9876" : "#FFF"};
  color: ${props => props.primary ? "" : "#1B9876"};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  padding: 13px 20px;
  outline: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 16px;
    width: 16px;
  }
`;

export {
    StyledNavbarWrapper,
    StyledRightSideFunctions,
    StyledButton
}