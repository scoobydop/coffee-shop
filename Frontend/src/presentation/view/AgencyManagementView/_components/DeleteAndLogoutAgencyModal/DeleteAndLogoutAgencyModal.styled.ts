import styled from "styled-components";

const StyledConfirmationModalWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
  background: white;
 gap: 0 20px;
  width: 500px;
  height: 200px;
  z-index: 2;
  border: none;
  border-radius: 15px;
  -webkit-box-shadow: 0 0 21px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0 0 21px -6px rgba(66, 68, 90, 1);
  box-shadow: 0 0 21px -6px rgba(66, 68, 90, 1)
`

const StyledIconContainer = styled.div`
      margin-left: 20px;
`

const StyledModalContainer = styled.div`
  display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 40px 0;
 width: 100%;
 height: 100%;
`

const StyledHeaderContainer = styled.div`
 h1{
  font-size: xxx-large;
   color: gray;
 }
`

const StyledButtonsContainer = styled.div`
 width: 100%;
 display: flex;
 gap: 0 20px;
 justify-content: end;
 align-items: center;
 margin-right: 50%;
`

const StyledYesButton = styled.button`
width : 80px;
  height: 40px;
cursor: pointer;
  border:  none;
background: var(--danger-color);
color: white;  
border-radius: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  
`

const StyledNoButton = styled.button`
  width : 80px;
  height: 40px;
cursor: pointer;
background: var(--white-color);
border: 2px solid gray;
color: gray;
  border-radius: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`





export { StyledYesButton, StyledNoButton, StyledConfirmationModalWrapper,  StyledButtonsContainer, StyledHeaderContainer, StyledModalContainer, StyledIconContainer}
